import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { onboardingSchema } from "../schema/onboardingSchema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useLocationAutocomplete } from "./useLocationAutocomplete";
import { updateUserMetadataService } from "../../common/services/updateUserMetadataService";

type FormValues = z.infer<typeof onboardingSchema>;

export function useOnboardingForm() {
  const { user } = useUser();
  const { getToken } = useAuth();

  const form = useForm<FormValues>({
    resolver: zodResolver(onboardingSchema),
  });

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = form;

  const profileImage = watch("profileImage");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { inputRef, isLoaded } = useLocationAutocomplete(setValue);

  useEffect(() => {
    if (profileImage?.[0]) {
      const url = URL.createObjectURL(profileImage[0]);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileImage]);

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    if (!user) return;

    if (data.profileImage?.[0]) {
      await user.setProfileImage({ file: data.profileImage[0] });
    }

    const token = await getToken();

    await updateUserMetadataService(token!, {
      city: data.city,
      country: data.country,
      language: navigator.language || "es",
      latitude: data.latitude,
      longitude: data.longitude,
      isOnboardingCompleted: true,
    });

    await user?.reload()  
  };

  return {
    form,
    previewUrl,
    onSubmit: handleSubmit(submitHandler),
    inputRef,
    isLoaded,
    isSubmitting,
  };
}
