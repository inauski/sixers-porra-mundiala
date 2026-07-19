import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import * as XLSX from "xlsx";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Trophy, Medal, Award, Eye, Download } from "lucide-react";
import { findFormation } from "@/lib/formations";
import { findTeamByName } from "@/lib/teams";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Clasificación — SixersPorra" },
      { name: "description", content: "Tabla pública con todas las predicciones del fantasy del Mundial 2026 y sus puntuaciones." },
      { property: "og:title", content: "Clasificación · SixersPorra" },
      { property: "og:description", content: "Tabla pública de predicciones y puntos del fantasy." },
    ],
  }),
  component: LeaderboardPage,
});

interface PredictionRow {
  id: string;
  user_id: string;
  selected_teams: Record<string, string>;
  formation: string;
  goalkeeper: string | null;
  defenders: string[];
  midfielders: string[];
  forwards: string[];
  total_points: number;
  phase1_points: number;
  created_at: string;
  profiles: { display_name: string } | null;
}

interface ScoreRow { name: string; matchday: number; points: number }
interface BonusRow { user_id: string; bombo: number; matchday: number; points: number; penalty: boolean }

const MATCHDAY_LABELS: Record<number, string> = {
  1: "Grupo J1", 2: "Grupo J2", 3: "Grupo J3", 4: "1/16",
  5: "Octavos", 6: "Cuartos", 7: "Semifinal", 9: "3-4 puesto", 8: "Final",
};
const MATCHDAYS_ORDER = [1, 2, 3, 4, 5, 6, 7, 9, 8];

function LeaderboardPage() {
  const [selected, setSelected] = useState<PredictionRow | null>(null);
  const { data, isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async (): Promise<PredictionRow[]> => {
      const { data, error } = await supabase
        .from("predictions")
        .select("*, profiles(display_name)")
        .order("total_points", { ascending: false })
        .order("created_at", { ascending: true });
      if (error) throw error;
      return (data ?? []) as unknown as PredictionRow[];
    },
  });

  const { data: scores } = useQuery({
    queryKey: ["all-player-scores"],
    queryFn: async (): Promise<ScoreRow[]> => {
      const { data, error } = await (supabase as any).from("player_scores").select("name,matchday,points");
      if (error) throw error;
      return (data ?? []) as ScoreRow[];
    },
  });

  const { data: bonuses } = useQuery({
    queryKey: ["all-team-bonuses"],
    queryFn: async (): Promise<BonusRow[]> => {
      const { data, error } = await (supabase as any).from("team_bonuses").select("user_id,bombo,matchday,points,penalty");
      if (error) throw error;
      return (data ?? []) as BonusRow[];
    },
  });

  const { data: settings } = useQuery({
    queryKey: ["app-settings"],
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from("app_settings")
        .select("leaderboard_details_visible")
        .eq("id", true)
        .maybeSingle();
      if (error) throw error;
      return (data ?? { leaderboard_details_visible: true }) as { leaderboard_details_visible: boolean };
    },
  });
  const showDetails = settings?.leaderboard_details_visible ?? true;

  const scoreMap = useMemo(() => {
    const m = new Map<string, number>();
    (scores ?? []).forEach((s) => m.set(`${s.name}:${s.matchday}`, s.points));
    return m;
  }, [scores]);

  const bonusesByUser = useMemo(() => {
    const m = new Map<string, BonusRow[]>();
    (bonuses ?? []).forEach((b) => {
      const arr = m.get(b.user_id) ?? [];
      arr.push(b);
      m.set(b.user_id, arr);
    });
    return m;
  }, [bonuses]);

  function handleExport() {
    if (!data?.length) return;
    const rows = data.map((r, i) => {
      const teams = Object.entries(r.selected_teams)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([bombo, tname]) => `B${bombo}: ${tname}`)
        .join(" | ");
      return {
        "#": i + 1,
        Jugador: r.profiles?.display_name ?? "Anónimo",
        Formación: findFormation(r.formation)?.label ?? r.formation,
        "Equipos elegidos": teams,
        Portero: r.goalkeeper ?? "",
        Defensas: r.defenders.join(", "),
        Mediocentros: r.midfielders.join(", "),
        Delanteros: r.forwards.join(", "),
        "Puntos fase 1": r.phase1_points ?? 0,
        Puntos: r.total_points,
      };
    });
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Clasificación");
    XLSX.writeFile(wb, `clasificacion_${new Date().toISOString().slice(0, 10)}.xlsx`);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold md:text-4xl">Clasificación global</h1>
            <p className="mt-1 text-muted-foreground">Todas las predicciones, ordenadas por puntos.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleExport} disabled={!data?.length} variant="outline">
              <Download className="mr-2 h-4 w-4" /> Descargar Excel
            </Button>
            <div className="hidden items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary md:flex">
              <Trophy className="h-5 w-5" />
              <span className="font-display text-sm font-semibold">{data?.length ?? 0} jugadores</span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="rounded-xl border bg-card p-8 text-center text-muted-foreground">Cargando…</div>
        ) : (data?.length ?? 0) === 0 ? (
          <div className="rounded-xl border bg-card p-8 text-center text-muted-foreground">
            Aún no hay predicciones. ¡Sé el primero!
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border bg-card shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left">#</th>
                    <th className="px-4 py-3 text-left">Jugador</th>
                    {showDetails && <th className="hidden px-4 py-3 text-left md:table-cell">Formación</th>}
                    {showDetails && <th className="hidden px-4 py-3 text-left lg:table-cell">Equipos elegidos</th>}
                    <th className="px-4 py-3 text-right">Puntos fase 1</th>
                    <th className="px-4 py-3 text-right">Puntos</th>
                    {showDetails && <th className="px-4 py-3 text-right">Ver</th>}
                  </tr>
                </thead>
                <tbody>
                  {data!.map((row, i) => (
                    <tr key={row.id} className="border-t transition-colors hover:bg-muted/30">
                      <td className="px-4 py-3 font-semibold">
                        <RankBadge rank={i + 1} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium">{row.profiles?.display_name ?? "Anónimo"}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(row.created_at).toLocaleDateString("es-ES")}
                        </div>
                      </td>
                      {showDetails && (
                        <td className="hidden px-4 py-3 md:table-cell">
                          <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                            {findFormation(row.formation)?.label ?? row.formation}
                          </span>
                        </td>
                      )}
                      {showDetails && (
                        <td className="hidden px-4 py-3 lg:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {Object.values(row.selected_teams).map((tname) => {
                              const t = findTeamByName(tname);
                              return (
                                <span key={tname} className="inline-flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 text-xs">
                                  <span>{t?.flag ?? "🏳️"}</span>
                                  <span>{t?.code ?? tname}</span>
                                </span>
                              );
                            })}
                          </div>
                        </td>
                      )}
                      <td className="px-4 py-3 text-right font-mono text-sm">{row.phase1_points ?? 0}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-display text-lg font-bold text-primary">{row.total_points}</span>
                      </td>
                      {showDetails && (
                        <td className="px-4 py-3 text-right">
                          <Button size="sm" variant="outline" onClick={() => setSelected(row)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  Predicción de {selected.profiles?.display_name ?? "Anónimo"}
                </DialogTitle>
                <DialogDescription>
                  Formación {findFormation(selected.formation)?.label ?? selected.formation} ·{" "}
                  <span className="font-semibold text-primary">{selected.total_points} pts</span>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5">
                <section>
                  <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Equipos elegidos
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(selected.selected_teams).map(([bombo, tname]) => {
                      const t = findTeamByName(tname);
                      return (
                        <span key={bombo} className="inline-flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-1.5 text-sm">
                          <span className="font-mono text-xs text-muted-foreground">B{bombo}</span>
                          <span className="text-lg leading-none">{t?.flag ?? "🏳️"}</span>
                          <span className="font-medium">{t?.name ?? tname}</span>
                        </span>
                      );
                    })}
                  </div>
                </section>

                <PlayerGroup label="Portero" players={selected.goalkeeper ? [selected.goalkeeper] : []} />
                <PlayerGroup label="Defensas" players={selected.defenders} />
                <PlayerGroup label="Mediocentros" players={selected.midfielders} />
                <PlayerGroup label="Delanteros" players={selected.forwards} />

                <MatchdayBreakdown
                  prediction={selected}
                  scoreMap={scoreMap}
                  userBonuses={bonusesByUser.get(selected.user_id) ?? []}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MatchdayBreakdown({
  prediction,
  scoreMap,
  userBonuses,
}: {
  prediction: PredictionRow;
  scoreMap: Map<string, number>;
  userBonuses: BonusRow[];
}) {
  const [md, setMd] = useState<string>("all");

  const players = useMemo(() => {
    const list: { name: string; pos: string }[] = [];
    if (prediction.goalkeeper) list.push({ name: prediction.goalkeeper, pos: "POR" });
    prediction.defenders.forEach((n) => list.push({ name: n, pos: "DEF" }));
    prediction.midfielders.forEach((n) => list.push({ name: n, pos: "MED" }));
    prediction.forwards.forEach((n) => list.push({ name: n, pos: "DEL" }));
    return list;
  }, [prediction]);

  const matchdays = md === "all" ? MATCHDAYS_ORDER : [Number(md)];

  let playerTotal = 0;
  const playerRows = players.map((p) => {
    const perMd = matchdays.map((m) => scoreMap.get(`${p.name}:${m}`) ?? 0);
    const sum = perMd.reduce((a, b) => a + b, 0);
    playerTotal += sum;
    return { ...p, perMd, sum };
  });

  const bonusRows = matchdays.flatMap((m) =>
    userBonuses
      .filter((b) => b.matchday === m && (b.points > 0 || b.penalty))
      .map((b) => ({ ...b, total: b.points + (b.penalty ? 1 : 0) })),
  );
  const bonusTotal = bonusRows.reduce((a, b) => a + b.total, 0);

  return (
    <section className="rounded-lg border bg-muted/30 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Desglose por jornada
        </h3>
        <Select value={md} onValueChange={setMd}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las jornadas</SelectItem>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((m) => (
              <SelectItem key={m} value={String(m)}>{MATCHDAY_LABELS[m]}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="text-muted-foreground">
            <tr>
              <th className="px-2 py-1 text-left font-medium">Jugador</th>
              <th className="px-2 py-1 text-left font-medium">Pos</th>
              {matchdays.map((m) => (
                <th key={m} className="px-2 py-1 text-right font-medium">{MATCHDAY_LABELS[m]}</th>
              ))}
              <th className="px-2 py-1 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {playerRows.map((r) => (
              <tr key={r.name} className="border-t">
                <td className="px-2 py-1">{r.name}</td>
                <td className="px-2 py-1 text-muted-foreground">{r.pos}</td>
                {r.perMd.map((v, i) => (
                  <td key={i} className="px-2 py-1 text-right font-mono">{v || "·"}</td>
                ))}
                <td className="px-2 py-1 text-right font-mono font-semibold">{r.sum}</td>
              </tr>
            ))}
            <tr className="border-t bg-muted/50">
              <td className="px-2 py-1 font-semibold" colSpan={2 + matchdays.length}>Subtotal jugadores</td>
              <td className="px-2 py-1 text-right font-mono font-bold">{playerTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <h4 className="mb-1 text-xs font-semibold uppercase text-muted-foreground">Bonus por equipos</h4>
        {bonusRows.length === 0 ? (
          <p className="text-xs text-muted-foreground">Sin bonus en esta selección.</p>
        ) : (
          <ul className="space-y-1 text-xs">
            {bonusRows.map((b, i) => {
              const tname = prediction.selected_teams?.[String(b.bombo)];
              const t = tname ? findTeamByName(tname) : undefined;
              return (
                <li key={i} className="flex justify-between rounded bg-background/60 px-2 py-1">
                  <span>
                    {MATCHDAY_LABELS[b.matchday]} · Bombo {b.bombo}
                    {tname && (
                      <span className="ml-1 text-muted-foreground">
                        — {t?.flag ?? "🏳️"} {t?.name ?? tname}
                      </span>
                    )}
                    {b.penalty && <span className="ml-1 text-primary">(+1 penaltis)</span>}
                  </span>
                  <span className="font-mono font-semibold">{b.total}</span>
                </li>
              );
            })}
            <li className="flex justify-between border-t pt-1 font-semibold">
              <span>Subtotal bonus</span>
              <span className="font-mono">{bonusTotal}</span>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-3 flex justify-between border-t pt-2 text-sm font-bold">
        <span>Total {md === "all" ? "acumulado" : MATCHDAY_LABELS[Number(md)]}</span>
        <span className="text-primary">{playerTotal + bonusTotal} pts</span>
      </div>
    </section>
  );
}

function PlayerGroup({ label, players }: { label: string; players: string[] }) {
  if (!players?.length) return null;
  return (
    <section>
      <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {players.map((p) => (
          <span key={p} className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-yellow-950"><Trophy className="h-3.5 w-3.5" /></span>;
  if (rank === 2) return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-300 text-zinc-800"><Medal className="h-3.5 w-3.5" /></span>;
  if (rank === 3) return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-amber-50"><Award className="h-3.5 w-3.5" /></span>;
  return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">{rank}</span>;
}
