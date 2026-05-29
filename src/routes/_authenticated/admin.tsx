import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Save, Search } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [{ title: "Admin · Puntuaciones — SixersPredict" }],
  }),
  component: AdminPage,
});

interface PredictionRow {
  goalkeeper: string | null;
  defenders: string[];
  midfielders: string[];
  forwards: string[];
}

interface ScoreRow {
  name: string;
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
        .select("goalkeeper,defenders,midfielders,forwards");
      if (error) throw error;
      return data ?? [];
    },
  });

  const { data: scores } = useQuery({
    queryKey: ["player-scores"],
    enabled: !!isAdmin,
    queryFn: async (): Promise<ScoreRow[]> => {
      const { data, error } = await supabase.from("player_scores").select("name,points");
      if (error) throw error;
      return data ?? [];
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
    (scores ?? []).forEach((s) => m.set(s.name, s.points));
    return m;
  }, [scores]);

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
              <div className="grid gap-2 md:grid-cols-2">
                {list.map((name) => (
                  <ScoreRowEditor
                    key={name}
                    name={name}
                    initial={scoreMap.get(name) ?? 0}
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

function ScoreRowEditor({
  name,
  initial,
  onSaved,
}: {
  name: string;
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
    const { error } = await supabase
      .from("player_scores")
      .upsert({ name, points: n }, { onConflict: "name" });
    setSaving(false);
    if (error) toast.error(error.message);
    else {
      toast.success(`${name}: ${n} pts`);
      setDirty(false);
      onSaved();
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border bg-card p-3 shadow-sm">
      <div className="min-w-0 flex-1 truncate font-medium">{name}</div>
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
        className="w-24 text-right"
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
