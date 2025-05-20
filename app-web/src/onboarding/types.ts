import type { z } from "zod";
import { onboardingSchema } from "./schema/onboardingSchema";

export type FormValues = z.infer<typeof onboardingSchema>;