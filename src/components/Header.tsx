import { Link, useRouterState } from "@tanstack/react-router";
import { Trophy, Menu, LogOut, User as UserIcon, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function Header() {
  const { user, signOut } = useAuth();
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  const { data: isAdmin } = useQuery({
    queryKey: ["is-admin", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user!.id)
        .eq("role", "admin")
        .maybeSingle();
      return !!data;
    },
  });

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/predict", label: "Mi predicción" },
    { to: "/leaderboard", label: "Clasificación" },
    ...(isAdmin ? [{ to: "/admin", label: "Admin", icon: true }] : []),
  ];


  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero shadow-glow">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Sixers<span className="text-secondary">Porra</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <span className="flex items-center gap-2 rounded-md bg-muted px-3 py-1.5 text-xs font-medium">
                <UserIcon className="h-3.5 w-3.5" />
                {user.email}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={async () => {
                  await signOut();
                  qc.invalidateQueries();
                }}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button asChild size="sm">
              <Link to="/auth">Iniciar sesión</Link>
            </Button>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            {user ? (
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  await signOut();
                  qc.invalidateQueries();
                  setOpen(false);
                }}
              >
                Cerrar sesión
              </Button>
            ) : (
              <Button asChild size="sm" onClick={() => setOpen(false)}>
                <Link to="/auth">Iniciar sesión</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
