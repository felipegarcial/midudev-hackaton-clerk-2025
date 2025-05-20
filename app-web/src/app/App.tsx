import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Navigate, useLocation, Routes, Route } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import { Auth, Feed, Onboarding, Profile } from "./routes";

export default function App() {
  const location = useLocation();
  const { user, isLoaded, isSignedIn } = useUser();
  const { setUser, clearUser, loading, authenticated, onboardingCompleted } = useUserStore();

  // Sync Clerk user into Zustand
  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn && user) {
      setUser(user);
    } else {
      clearUser();
    }
  }, [isLoaded, isSignedIn]);

  // 1. Esperar que Clerk cargue
  if (!isLoaded || loading) {
    return <p className="text-white p-4">Loading...</p>;
  }

  // 2. No autenticado → redirigir al login
  if (!authenticated && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }

  // 3. Autenticado pero no ha hecho onboarding
  if (authenticated && !onboardingCompleted && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

  // 4. Autenticado y con onboarding → renderizar rutas
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
