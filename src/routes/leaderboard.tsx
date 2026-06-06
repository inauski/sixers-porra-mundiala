import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Trophy, Medal, Award, Eye } from "lucide-react";
import { findFormation } from "@/lib/formations";
import { findTeamByName } from "@/lib/teams";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
  created_at: string;
  profiles: { display_name: string } | null;
}

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


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold md:text-4xl">Clasificación global</h1>
            <p className="mt-1 text-muted-foreground">Todas las predicciones, ordenadas por puntos.</p>
          </div>
          <div className="hidden items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary md:flex">
            <Trophy className="h-5 w-5" />
            <span className="font-display text-sm font-semibold">{data?.length ?? 0} jugadores</span>
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
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
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
