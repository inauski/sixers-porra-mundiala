import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
  component: AuthGate,
});

function AuthGate() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth", replace: true });
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
          Cargando…
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
          <Trophy className="mb-4 h-12 w-12 text-primary" />
          <h1 className="font-display text-2xl font-bold">Inicia sesión para jugar</h1>
          <p className="mt-2 max-w-md text-muted-foreground">
            Necesitas una cuenta para crear y guardar tu predicción del Mundial 2026.
          </p>
          <Button asChild className="mt-6">
            <Link to="/auth">Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
