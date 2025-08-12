import { z } from "zod";

// Reset Password Schema
export const resetPasswordSchema = z.object({
  token: z.string().min(1, { message: "Token là bắt buộc." }),
  password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự." }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp.",
  path: ["confirmPassword"],
});

// Export types
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
