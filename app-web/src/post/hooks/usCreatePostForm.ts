import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCreatePost } from "../../store/firebase/hooks/useCreatePost";
import { z } from "zod";
import { useGeoLocation } from "./useGeoLocation";
import { postSchema } from "../schema/postSchema";
import { activityTypes } from "../schema/postSchema";
import { useUser } from "@clerk/clerk-react";

type FormValues = z.infer<typeof postSchema>;

export function useCreatePostForm() {
  const location = useGeoLocation();
  const { createPost, loading, error } = useCreatePost();

  const { user } = useUser();

  const form = useForm<FormValues>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: FormValues) => {
    if (!location) return alert("Ubicación no disponible");



    await createPost({
      ...data,
      ...location,
      userId: user?.id ?? "",
      userName: user?.firstName ?? "",
      userLastName: user?.lastName ?? "",
    });
  };

  return {
    form,
    onSubmit,
    loading,
    error,
    activityTypes,
    locationReady: !!location,
  };
}