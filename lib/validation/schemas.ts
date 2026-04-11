import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.email("Enter a valid email address"),
});

export const suggestSchema = z.object({
  compoundName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(120, "Name is too long")
    .trim(),
});

export const reviewSchema = z.object({
  compoundId: z.uuid(),
  title: z.string().min(3).max(160).trim(),
  body: z.string().min(20).max(4000).trim(),
  rating: z.int().min(1).max(5),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
export type SuggestInput = z.infer<typeof suggestSchema>;
export type ReviewInput = z.infer<typeof reviewSchema>;
