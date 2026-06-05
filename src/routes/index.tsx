import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Trophy, Users, ListChecks, Sparkles, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SixersPredict — Predice y compite con tus amigos" },
      { name: "description", content: "Elige 12 equipos por bombo, tu formación táctica y tu once ideal. Compite en el ranking global del Mundial 2026." },
      { property: "og:title", content: "SixersPredict" },
      { property: "og:description", content: "Crea tu predicción y compite en el fantasy oficial del Mundial 2026." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)]" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Mundial FIFA 2026 · USA · México · Canadá</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Elige. Predice. Compite.
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Solo uno llegará a la cima.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Elige un equipo por cada uno de los 12 bombos, monta tu formación y tu once ideal.
              Compite en la clasificación global con tus amigos.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/predict">
                  Crear mi predicción
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <Link to="/leaderboard">Ver clasificación</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {[
            { k: "48", v: "Selecciones" },
            { k: "12", v: "Bombos" },
            { k: "5", v: "Formaciones" },
            { k: "∞", v: "Predicciones" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Cómo funciona</h2>
          <p className="mt-3 text-muted-foreground">
            Tres pasos para entrar en el fantasy del Mundial.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ListChecks,
              title: "1. Elige equipos",
              text: "Selecciona 1 selección de cada uno de los 12 bombos del sorteo.",
            },
            {
              icon: Users,
              title: "2. Monta tu once",
              text: "Escoge tu formación y los jugadores por posición (portero, defensa, medio, delantero).",
            },
            {
              icon: Trophy,
              title: "3. Acumula puntos",
              text: "Tus equipos y jugadores suman puntos por victorias, empates y goles durante el torneo.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scoring */}
      <section className="bg-muted/40">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Sistema de puntuación</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-card">
              <h3 className="mb-4 font-display text-lg font-semibold text-primary">Por equipo</h3>
              <ul className="space-y-2 text-sm">
                <Row label="Victoria" pts="+3" />
                <Row label="Empate" pts="+1" />
                <Row label="Derrota" pts="0" />
                <Row label="Victoria en penaltis" pts="+1 extra" />
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-card">
              <h3 className="mb-4 font-display text-lg font-semibold text-secondary">Goles de jugador</h3>
              <ul className="space-y-2 text-sm">
                <Row label="Gol de delantero" pts="+3" />
                <Row label="Gol de mediocentro" pts="+4" />
                <Row label="Gol de defensa" pts="+5" />
                <Row label="Gol de portero" pts="+5" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          SixersPredict · Hecho para los amantes del fútbol
        </div>
      </footer>
    </div>
  );
}

function Row({ label, pts }: { label: string; pts: string }) {
  return (
    <li className="flex items-center justify-between border-b border-border/50 py-2 last:border-0">
      <span>{label}</span>
      <span className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs font-bold text-accent">{pts}</span>
    </li>
  );
}
