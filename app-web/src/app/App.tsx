import "./App.css";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Auth, Feed, Onboarding, Profile } from "./routes";
import { useCheckOnboarding } from "../auth/hooks";

export default function App() {

  const location = useLocation();
  const { isLoading, authenticated, onboardingCompleted  } = useCheckOnboarding(); 


  if (isLoading) {
    return <p className="text-white p-4">Loading...</p>;
  }


  if (!authenticated && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }
  if (authenticated && !onboardingCompleted && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace />;
  }

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
