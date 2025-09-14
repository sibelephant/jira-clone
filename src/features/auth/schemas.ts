import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Minimum 8 characters"),
});


export const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Minimum 2 characters"),
  password: z.string().min(8, "Minimum 8 characters"),
});
