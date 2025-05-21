import { useUser } from "@clerk/clerk-react"

export function useCheckOnboarding() {
  const { user, isLoaded } = useUser()

  if (!isLoaded || !user) {
    return { isLoading: false, authenticated: false, onboardingCompleted: false }
  }

  const onboardingCompleted = user.publicMetadata?.onboardingCompleted === true

  return {
    isLoading: false,
    authenticated: true,
    onboardingCompleted,
  }
}