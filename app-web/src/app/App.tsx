import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation, Routes, Route } from "react-router-dom";
import { Auth, Home, Onboarding, Profile } from "./routes";

export default function App() {
  const location = useLocation();
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <p className="text-white p-4">Loading...</p>;
  }
  if (!isSignedIn && !user && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }

  if (
    isSignedIn &&
    !user?.publicMetadata?.isOnboardingCompleted &&
    location.pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" replace />;
  }

  if (
    isSignedIn &&
    user?.publicMetadata?.isOnboardingCompleted &&
    location.pathname === "/onboarding"
  ) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
