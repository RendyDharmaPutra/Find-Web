import { z } from "zod";

export const RegisterSchema = z.object({
  Fullname: z
    .string()
    .min(3, "Nama Lengkap minimal 3 karakter")
    .max(50, "Nama Lengkap maksimal 50 karakter"),
  Username: z
    .string()
    .min(6, "Username minimal 6 karakter")
    .max(15, "Username maksimal 15 karakter"),
  Password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .max(15, "Password maksimal 15 karakter"),
});

export type RegsiterSchemaType = z.infer<typeof RegisterSchema>;
