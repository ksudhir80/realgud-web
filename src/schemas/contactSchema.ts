import { z } from "zod";

export const contactSchema =
  z.object({
    name: z.string().min(3),
    mobile: z.string().min(10),
    city: z.string().min(2),
    quantity: z.string().min(1),
    message: z.string().optional()
  });

export type ContactFormType =
  z.infer<typeof contactSchema>;