import { z } from "zod";

export const onboardingSchema = z.object({
  firstName: z.string({
    required_error: "El nombre es obligatorio.",
  }),
  lastName: z.string({
    required_error: "El apellido es obligatorio.",
  }),
  birthdate: z
    .string({
      required_error: "La fecha de nacimiento es obligatoria.",
    })
    .regex(/\d{4}-\d{2}-\d{2}/, {
      message: "Formato inválido (YYYY-MM-DD)",
    }),
  city: z.string({
    required_error: "La ciudad es obligatoria.",
  }),
  country: z.string({
    required_error: "El país es obligatorio.",
  }),
  latitude: z
    .number({
      required_error: "La latitud es obligatoria.",
      invalid_type_error: "Latitud inválida.",
    }),
  longitude: z
    .number({
      required_error: "La longitud es obligatoria.",
      invalid_type_error: "Longitud inválida.",
    }),
  profileImage: z
    .custom<FileList | undefined>()
    .optional()
    .refine((value) => {
      if (!value || value.length === 0) return true;
      return value[0].size < 5 * 1024 * 1024;
    }, {
      message: "La imagen es muy pesada.",
    }),
});