import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { findTeamByName } from "@/lib/teams";
import { ShieldAlert, Save, Search } from "lucide-react";
import { toast } from "sonner";


export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [{ title: "Admin · Puntuaciones — SixersPredict" }],
  }),
  component: AdminPage,
});

interface PredictionRow {
  user_id: string;
  goalkeeper: string | null;
  defenders: string[];
  midfielders: string[];
  forwards: string[];
  selected_teams: Record<string, string>;
  profiles: { display_name: string } | null;
}

interface BonusRow {
  user_id: string;
  bombo: number;
  matchday: number;
  points: number;
  penalty: boolean;
}

const MATCHDAY_LABELS: Record<number, string> = {
  1: "Grupo J1",
  2: "Grupo J2",
  3: "Grupo J3",
  4: "1/16",
  5: "Octavos",
  6: "Cuartos",
  7: "Semifinal",
  8: "Final",
};


interface ScoreRow {
  name: string;
  matchday: number;
  points: number;
}

function AdminPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const [query, setQuery] = useState("");

  const { data: isAdmin, isLoading: roleLoading } = useQuery({
    queryKey: ["is-admin", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user!.id)
        .eq("role", "admin")
        .maybeSingle();
      if (error) throw error;
      return !!data;
    },
  });

  const { data: preds } = useQuery({
    queryKey: ["all-predictions-players"],
    enabled: !!isAdmin,
    queryFn: async (): Promise<PredictionRow[]> => {
      const { data, error } = await supabase
        .from("predictions")
        .select("user_id,goalkeeper,defenders,midfielders,forwards,selected_teams,profiles(display_name)")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return (data ?? []) as unknown as PredictionRow[];
    },
  });

  const { data: scores } = useQuery({
    queryKey: ["player-scores"],
    enabled: !!isAdmin,
    queryFn: async (): Promise<ScoreRow[]> => {
      const { data, error } = await (supabase as any)
        .from("player_scores")
        .select("name,matchday,points");
      if (error) throw error;
      return (data ?? []) as ScoreRow[];
    },
  });

  const { data: bonuses } = useQuery({
    queryKey: ["team-bonuses"],
    enabled: !!isAdmin,
    queryFn: async (): Promise<BonusRow[]> => {
      const { data, error } = await (supabase as any)
        .from("team_bonuses")
        .select("user_id,bombo,matchday,points,penalty");
      if (error) throw error;
      return (data ?? []) as BonusRow[];
    },
  });


  // Build unique sorted player list from all predictions, grouped by position
  const grouped = useMemo(() => {
    const g: Record<"GK" | "DEF" | "MID" | "FWD", Set<string>> = {
      GK: new Set(),
      DEF: new Set(),
      MID: new Set(),
      FWD: new Set(),
    };
    (preds ?? []).forEach((p) => {
      if (p.goalkeeper) g.GK.add(p.goalkeeper);
      p.defenders.forEach((n) => g.DEF.add(n));
      p.midfielders.forEach((n) => g.MID.add(n));
      p.forwards.forEach((n) => g.FWD.add(n));
    });
    return {
      GK: [...g.GK].sort((a, b) => a.localeCompare(b)),
      DEF: [...g.DEF].sort((a, b) => a.localeCompare(b)),
      MID: [...g.MID].sort((a, b) => a.localeCompare(b)),
      FWD: [...g.FWD].sort((a, b) => a.localeCompare(b)),
    };
  }, [preds]);

  const scoreMap = useMemo(() => {
    const m = new Map<string, number>();
    (scores ?? []).forEach((s) => m.set(`${s.name}:${s.matchday}`, s.points));
    return m;
  }, [scores]);

  const bonusMap = useMemo(() => {
    const m = new Map<string, BonusRow>();
    (bonuses ?? []).forEach((b) => m.set(`${b.user_id}:${b.bombo}:${b.matchday}`, b));
    return m;
  }, [bonuses]);


  if (roleLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center text-muted-foreground">Cargando…</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center">
          <ShieldAlert className="mb-4 h-12 w-12 text-destructive" />
          <h1 className="font-display text-2xl font-bold">Acceso restringido</h1>
          <p className="mt-2 max-w-md text-muted-foreground">
            Solo los administradores pueden gestionar las puntuaciones de los jugadores.
          </p>
          <Button asChild className="mt-6" variant="outline">
            <Link to="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const totalPlayers = grouped.GK.length + grouped.DEF.length + grouped.MID.length + grouped.FWD.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold">Panel de administración</h1>
          <p className="mt-1 text-muted-foreground">
            Introduce los puntos de cada jugador. La clasificación se recalcula automáticamente.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {totalPlayers} jugadores únicos elegidos por los usuarios.
          </p>
        </div>

        <div className="mb-6 flex items-center gap-2 rounded-lg border bg-card px-3 py-2 shadow-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar jugador…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 shadow-none focus-visible:ring-0"
          />
        </div>

        {(["GK", "DEF", "MID", "FWD"] as const).map((pos) => {
          const list = grouped[pos].filter((n) =>
            n.toLowerCase().includes(query.trim().toLowerCase()),
          );
          if (list.length === 0) return null;
          return (
            <section key={pos} className="mb-8">
              <h2 className="mb-3 font-display text-lg font-bold">
                {POS_LABEL[pos]} <span className="text-muted-foreground">({list.length})</span>
              </h2>
              <div className="grid gap-2">
                {list.map((name) => (
                  <PlayerScoreBlock
                    key={name}
                    name={name}
                    scoreMap={scoreMap}
                    onSaved={() => {
                      qc.invalidateQueries({ queryKey: ["player-scores"] });
                      qc.invalidateQueries({ queryKey: ["leaderboard"] });
                    }}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {totalPlayers === 0 && (
          <div className="rounded-xl border bg-card p-8 text-center text-muted-foreground">
            Aún no hay predicciones guardadas.
          </div>
        )}

        <section className="mt-12">
          <h2 className="mb-1 font-display text-2xl font-bold">Bonus por equipos</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Para cada usuario, asigna +1, +2 o +3 puntos por el equipo elegido en cada bombo. Marca la casilla
            "Penaltis" si el equipo ganó por penaltis (+1 extra).
          </p>
          <div className="space-y-6">
            {(preds ?? []).map((p) => (
              <UserBonusCard
                key={p.user_id}
                userId={p.user_id}
                displayName={p.profiles?.display_name ?? "Anónimo"}
                selectedTeams={p.selected_teams}
                bonusMap={bonusMap}
                onSaved={() => {
                  qc.invalidateQueries({ queryKey: ["team-bonuses"] });
                  qc.invalidateQueries({ queryKey: ["leaderboard"] });
                }}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const POS_LABEL: Record<"GK" | "DEF" | "MID" | "FWD", string> = {
  GK: "Porteros",

  DEF: "Defensas",
  MID: "Mediocentros",
  FWD: "Delanteros",
};

function PlayerScoreBlock({
  name,
  scoreMap,
  onSaved,
}: {
  name: string;
  scoreMap: Map<string, number>;
  onSaved: () => void;
}) {
  const matchdays = Array.from({ length: 8 }, (_, i) => i + 1);
  const total = matchdays.reduce((s, md) => s + (scoreMap.get(`${name}:${md}`) ?? 0), 0);

  return (
    <div className="rounded-lg border bg-card p-3 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex-1 truncate text-sm font-semibold">{name}</span>
        <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
          {total} pts
        </span>
      </div>
      <div className="grid gap-1.5 sm:grid-cols-2">
        {matchdays.map((md) => (
          <ScoreRowEditor
            key={md}
            name={name}
            matchday={md}
            initial={scoreMap.get(`${name}:${md}`) ?? 0}
            onSaved={onSaved}
          />
        ))}
      </div>
    </div>
  );
}

function ScoreRowEditor({
  name,
  matchday,
  initial,
  onSaved,
}: {
  name: string;
  matchday: number;
  initial: number;
  onSaved: () => void;
}) {
  const [value, setValue] = useState<string>(String(initial));
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setValue(String(initial));
    setDirty(false);
  }, [initial]);

  async function save() {
    const n = Number(value);
    if (!Number.isFinite(n) || !Number.isInteger(n)) {
      return toast.error("Introduce un número entero.");
    }
    if (n < -1000 || n > 1000) {
      return toast.error("Puntos fuera de rango (-1000 a 1000).");
    }
    setSaving(true);
    const { error } = await (supabase as any)
      .from("player_scores")
      .upsert({ name, matchday, points: n }, { onConflict: "name,matchday" });
    setSaving(false);
    if (error) toast.error(error.message);
    else {
      toast.success(`${name} · ${MATCHDAY_LABELS[matchday]}: ${n} pts`);
      setDirty(false);
      onSaved();
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-md border bg-background/60 px-2 py-1.5">
      <span className="w-20 shrink-0 font-mono text-[11px] text-muted-foreground">
        {MATCHDAY_LABELS[matchday]}
      </span>
      <Input
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setDirty(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") save();
        }}
        className="h-8 flex-1 text-right"
      />
      <Button
        type="button"
        size="sm"
        variant={dirty ? "default" : "outline"}
        onClick={save}
        disabled={saving || !dirty}
      >
        <Save className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}

function UserBonusCard({
  userId,
  displayName,
  selectedTeams,
  bonusMap,
  onSaved,
}: {
  userId: string;
  displayName: string;
  selectedTeams: Record<string, string>;
  bonusMap: Map<string, BonusRow>;
  onSaved: () => void;
}) {
  const bombos = Array.from({ length: 12 }, (_, i) => i + 1);
  const matchdays = Array.from({ length: 8 }, (_, i) => i + 1);
  const userTotal = bombos.reduce((sum, b) => {
    return matchdays.reduce((s, md) => {
      const row = bonusMap.get(`${userId}:${b}:${md}`);
      return s + (row ? row.points + (row.penalty ? 1 : 0) : 0);
    }, sum);
  }, 0);

  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold">{displayName}</h3>
        <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
          Total bonus: {userTotal} pts
        </span>
      </div>
      <div className="space-y-4">
        {bombos.map((b) => {
          const teamName = selectedTeams?.[String(b)];
          if (!teamName) return null;
          return (
            <TeamBonusBlock
              key={b}
              userId={userId}
              bombo={b}
              teamName={teamName}
              bonusMap={bonusMap}
              onSaved={onSaved}
            />
          );
        })}
      </div>
    </div>
  );
}

function TeamBonusBlock({
  userId,
  bombo,
  teamName,
  bonusMap,
  onSaved,
}: {
  userId: string;
  bombo: number;
  teamName: string;
  bonusMap: Map<string, BonusRow>;
  onSaved: () => void;
}) {
  const team = findTeamByName(teamName);
  const matchdays = Array.from({ length: 8 }, (_, i) => i + 1);
  const teamTotal = matchdays.reduce((s, md) => {
    const row = bonusMap.get(`${userId}:${bombo}:${md}`);
    return s + (row ? row.points + (row.penalty ? 1 : 0) : 0);
  }, 0);

  return (
    <div className="rounded-lg border bg-muted/20 p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="font-mono text-xs text-muted-foreground">B{bombo}</span>
        <span className="text-lg leading-none">{team?.flag ?? "🏳️"}</span>
        <span className="flex-1 truncate text-sm font-semibold">{team?.name ?? teamName}</span>
        <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
          {teamTotal} pts
        </span>
      </div>
      <div className="grid gap-1.5">
        {matchdays.map((md) => {
          const current = bonusMap.get(`${userId}:${bombo}:${md}`);
          return (
            <BonusRowEditor
              key={md}
              userId={userId}
              bombo={bombo}
              matchday={md}
              teamName={teamName}
              initialPoints={current?.points ?? 0}
              initialPenalty={current?.penalty ?? false}
              onSaved={onSaved}
            />
          );
        })}
      </div>
    </div>
  );
}

function BonusRowEditor({
  userId,
  bombo,
  matchday,
  teamName,
  initialPoints,
  initialPenalty,
  onSaved,
}: {
  userId: string;
  bombo: number;
  matchday: number;
  teamName: string;
  initialPoints: number;
  initialPenalty: boolean;
  onSaved: () => void;
}) {
  const [points, setPoints] = useState(initialPoints);
  const [penalty, setPenalty] = useState(initialPenalty);
  const [saving, setSaving] = useState(false);
  const dirty = points !== initialPoints || penalty !== initialPenalty;

  useEffect(() => {
    setPoints(initialPoints);
    setPenalty(initialPenalty);
  }, [initialPoints, initialPenalty]);

  async function save() {
    setSaving(true);
    const { error } = await (supabase as any)
      .from("team_bonuses")
      .upsert(
        { user_id: userId, bombo, matchday, points, penalty },
        { onConflict: "user_id,bombo,matchday" },
      );
    setSaving(false);
    if (error) toast.error(error.message);
    else {
      toast.success(
        `B${bombo} · ${MATCHDAY_LABELS[matchday]} · ${teamName}: ${points + (penalty ? 1 : 0)} pts`,
      );
      onSaved();
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-md border bg-background/60 px-2 py-1.5">
      <span className="w-20 shrink-0 font-mono text-[11px] text-muted-foreground">
        {MATCHDAY_LABELS[matchday]}
      </span>
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setPoints(n)}
            className={`h-7 w-7 rounded text-xs font-bold transition-colors ${
              points === n
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {n === 0 ? "—" : `+${n}`}
          </button>
        ))}
      </div>
      <label className="flex items-center gap-1.5 text-xs">
        <Checkbox
          checked={penalty}
          onCheckedChange={(v) => setPenalty(v === true)}
        />
        Penaltis
      </label>
      <Button
        type="button"
        size="sm"
        variant={dirty ? "default" : "outline"}
        onClick={save}
        disabled={saving || !dirty}
        className="ml-auto"
      >
        <Save className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}

