// src/schemas/postSchema.ts
import { z } from "zod";

export const activityTypes = [
  "food",
  "movie",
  "tv",
  "music",
  "book",
  "podcast",
  "game",
  "sport",
  "event",
  "place",
  "art",
  "show",
  "productivity",
  "hangout",
] as const;

export const postSchema = z.object({
  description: z.string().min(3, "La descripción es obligatoria"),
  photo: z.string().url("La URL de la imagen es inválida"),
  typeActivity: z.enum(activityTypes, {
    errorMap: () => ({ message: "Selecciona un tipo de actividad válido" }),
  }),
});
