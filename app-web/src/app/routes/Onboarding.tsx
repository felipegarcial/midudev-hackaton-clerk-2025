import { UserButton } from "@clerk/clerk-react";
import { OnboardingForm } from "../../modules/onboarding/components/OnboardingForm";

export function Onboarding() {
  return (
    <>
      <h1>Onboarding</h1>
      <UserButton />
      <OnboardingForm / >
    </>
  )

};
