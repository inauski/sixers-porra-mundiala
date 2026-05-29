import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { BOMBOS, type Team } from "@/lib/teams";
import { FORMATIONS, findFormation } from "@/lib/formations";
import { playersByPosition, type Position } from "@/lib/players";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Check, Save, Trophy } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/predict")({
  head: () => ({
    meta: [
      { title: "Mi predicción — Fantasy Mundial 2026" },
      { name: "description", content: "Crea tu predicción del Mundial 2026: 12 equipos, formación y once ideal." },
    ],
  }),
  component: PredictPage,
});

type SelectedTeams = Record<string, string>; // bombo → team name

function PredictPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [teams, setTeams] = useState<SelectedTeams>({});
  const [formation, setFormation] = useState<string>("4-3-3");
  const [gk, setGk] = useState<string>("");
  const [defs, setDefs] = useState<string[]>([]);
  const [mids, setMids] = useState<string[]>([]);
  const [fwds, setFwds] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  // Load existing prediction
  const { data: existing } = useQuery({
    queryKey: ["my-prediction", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("predictions")
        .select("*")
        .eq("user_id", user!.id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (existing) {
      setTeams((existing.selected_teams as SelectedTeams) ?? {});
      setFormation(existing.formation);
      setGk(existing.goalkeeper ?? "");
      setDefs(existing.defenders ?? []);
      setMids(existing.midfielders ?? []);
      setFwds(existing.forwards ?? []);
    }
  }, [existing]);

  const f = findFormation(formation)!;
  const selectedTeamNames = useMemo(() => Object.values(teams), [teams]);

  const teamsDone = Object.keys(teams).length;
  const playersFilled = (gk ? 1 : 0) + defs.length + mids.length + fwds.length;
  const playersTotal = f.gk + f.def + f.mid + f.fwd;
  const progress = Math.round(((teamsDone + playersFilled) / (12 + playersTotal)) * 100);

  // Clamp player arrays if formation changes
  useEffect(() => {
    setDefs((d) => d.slice(0, f.def));
    setMids((m) => m.slice(0, f.mid));
    setFwds((w) => w.slice(0, f.fwd));
  }, [formation, f.def, f.mid, f.fwd]);

  function toggleTeam(bomboKey: string, team: Team) {
    setTeams((prev) => ({ ...prev, [bomboKey]: team.name }));
  }

  async function handleSave() {
    if (!user) return;
    if (teamsDone < 12) return toast.error("Elige un equipo en cada uno de los 12 bombos.");
    if (!gk) return toast.error("Elige un portero.");
    if (defs.length !== f.def) return toast.error(`Elige ${f.def} defensas.`);
    if (mids.length !== f.mid) return toast.error(`Elige ${f.mid} mediocentros.`);
    if (fwds.length !== f.fwd) return toast.error(`Elige ${f.fwd} delanteros.`);

    setSaving(true);
    const payload = {
      user_id: user.id,
      selected_teams: teams,
      formation,
      goalkeeper: gk,
      defenders: defs,
      midfielders: mids,
      forwards: fwds,
    };
    const { error } = await supabase
      .from("predictions")
      .upsert(payload, { onConflict: "user_id" });
    setSaving(false);
    if (error) toast.error(error.message);
    else {
      toast.success("¡Predicción guardada!");
      navigate({ to: "/leaderboard" });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Progress bar */}
        <div className="sticky top-16 z-30 -mx-4 mb-8 border-b bg-background/90 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-4">
            <Progress value={progress} className="h-2 flex-1" />
            <span className="font-display text-sm font-semibold tabular-nums">{progress}%</span>
            <Button onClick={handleSave} disabled={saving} size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Guardando…" : "Guardar"}
            </Button>
          </div>
        </div>

        {/* Bombos */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold">1 · Elige tus equipos</h2>
          <p className="mb-6 text-sm text-muted-foreground">Un equipo por cada uno de los 12 bombos.</p>

          <div className="space-y-6">
            {BOMBOS.map((bombo) => {
              const key = String(bombo.number);
              const chosen = teams[key];
              return (
                <div key={key} className="rounded-xl border bg-card p-4 shadow-card">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                      Bombo {bombo.number}
                    </h3>
                    {chosen && (
                      <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                        <Check className="mr-1 inline h-3 w-3" />Hecho
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {bombo.teams.map((team) => {
                      const active = chosen === team.name;
                      return (
                        <button
                          key={team.name}
                          type="button"
                          onClick={() => toggleTeam(key, team)}
                          className={`group relative flex items-center gap-3 rounded-lg border-2 p-3 text-left transition-all ${
                            active
                              ? "border-primary bg-primary/5 shadow-glow"
                              : "border-border bg-background hover:border-primary/40"
                          }`}
                        >
                          <span className="text-3xl leading-none">{team.flag}</span>
                          <div className="min-w-0 flex-1">
                            <div className="truncate font-semibold">{team.name}</div>
                            <div className="text-xs text-muted-foreground">{team.code}</div>
                          </div>
                          {active && (
                            <Check className="absolute right-2 top-2 h-4 w-4 text-primary" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Formation */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold">2 · Elige tu formación</h2>
          <p className="mb-6 text-sm text-muted-foreground">Define la estructura táctica de tu once.</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {FORMATIONS.map((opt) => {
              const active = formation === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFormation(opt.id)}
                  className={`rounded-xl border-2 p-4 text-center transition-all ${
                    active
                      ? "border-secondary bg-secondary/5 shadow-glow"
                      : "border-border bg-card hover:border-secondary/40"
                  }`}
                >
                  <div className="font-display text-xl font-bold">{opt.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {opt.def}D · {opt.mid}M · {opt.fwd}A
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Players */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold">3 · Monta tu once</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Solo verás jugadores de las {selectedTeamNames.length || "—"} selecciones que elegiste.
          </p>

          <div className="space-y-5">
            <PlayerSlot
              label="Portero"
              count={1}
              position="GK"
              teams={selectedTeamNames}
              selected={gk ? [gk] : []}
              onChange={(arr) => setGk(arr[0] ?? "")}
            />
            <PlayerSlot
              label={`Defensas (${f.def})`}
              count={f.def}
              position="DEF"
              teams={selectedTeamNames}
              selected={defs}
              onChange={setDefs}
            />
            <PlayerSlot
              label={`Mediocentros (${f.mid})`}
              count={f.mid}
              position="MID"
              teams={selectedTeamNames}
              selected={mids}
              onChange={setMids}
            />
            <PlayerSlot
              label={`Delanteros (${f.fwd})`}
              count={f.fwd}
              position="FWD"
              teams={selectedTeamNames}
              selected={fwds}
              onChange={setFwds}
            />
          </div>
        </section>

        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving} size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Trophy className="mr-2 h-4 w-4" />
            {saving ? "Guardando…" : "Guardar predicción"}
          </Button>
        </div>
      </main>
    </div>
  );
}

function PlayerSlot({
  label,
  count,
  position,
  teams,
  selected,
  onChange,
}: {
  label: string;
  count: number;
  position: Position;
  teams: string[];
  selected: string[];
  onChange: (next: string[]) => void;
}) {
  const [query, setQuery] = useState("");
  const pool = useMemo(() => playersByPosition(position, teams), [position, teams]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pool;
    return pool.filter((p) => p.name.toLowerCase().includes(q) || p.team.toLowerCase().includes(q));
  }, [pool, query]);

  function toggle(name: string) {
    if (selected.includes(name)) {
      onChange(selected.filter((n) => n !== name));
    } else if (selected.length < count) {
      onChange([...selected, name]);
    } else if (count === 1) {
      onChange([name]);
    } else {
      toast.error(`Máximo ${count} jugadores en esta posición.`);
    }
  }

  return (
    <div className="rounded-xl border bg-card p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display font-semibold">{label}</h3>
        <span className="text-xs text-muted-foreground">
          {selected.length}/{count}
        </span>
      </div>

      {selected.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {selected.map((name) => (
            <span
              key={name}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {name}
              <button
                type="button"
                onClick={() => toggle(name)}
                className="ml-1 rounded-full text-primary/60 hover:text-primary"
                aria-label="Quitar"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {teams.length === 0 ? (
        <p className="text-sm text-muted-foreground">Primero elige tus equipos en el paso 1.</p>
      ) : (
        <>
          <Input
            placeholder="Buscar jugador o selección…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mb-3"
          />
          <div className="max-h-64 overflow-y-auto rounded-lg border">
            {filtered.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">Sin resultados</div>
            ) : (
              <ul className="divide-y">
                {filtered.map((p) => {
                  const active = selected.includes(p.name);
                  return (
                    <li key={`${p.team}-${p.name}`}>
                      <button
                        type="button"
                        onClick={() => toggle(p.name)}
                        className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors ${
                          active ? "bg-primary/10 text-primary" : "hover:bg-muted"
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="truncate font-medium">{p.name}</div>
                          <div className="text-xs text-muted-foreground">{p.team}</div>
                        </div>
                        {active && <Check className="h-4 w-4 shrink-0" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <CustomPlayerInput
            count={count}
            selectedLength={selected.length}
            onAdd={(name) => {
              if (selected.includes(name)) return;
              if (count === 1) onChange([name]);
              else if (selected.length < count) onChange([...selected, name]);
              else toast.error(`Máximo ${count} jugadores en esta posición.`);
            }}
          />
        </>
      )}
    </div>
  );
}

function CustomPlayerInput({
  count,
  selectedLength,
  onAdd,
}: {
  count: number;
  selectedLength: number;
  onAdd: (name: string) => void;
}) {
  const [value, setValue] = useState("");
  const full = selectedLength >= count && count !== 1;

  function submit() {
    const v = value.trim();
    if (!v) return;
    if (v.length > 80) return toast.error("Nombre demasiado largo.");
    onAdd(v);
    setValue("");
  }

  return (
    <div className="mt-3 rounded-lg border border-dashed bg-muted/30 p-3">
      <div className="mb-2 text-xs font-medium text-muted-foreground">
        ¿No está en la lista? Añade "Otro" jugador escribiendo su nombre
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Nombre del jugador…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
          maxLength={80}
          disabled={full}
        />
        <Button type="button" size="sm" variant="outline" onClick={submit} disabled={!value.trim() || full}>
          Añadir
        </Button>
      </div>
    </div>
  );
}
