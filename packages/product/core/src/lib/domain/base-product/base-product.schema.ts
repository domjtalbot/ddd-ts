import { z } from 'zod';

export const description = z.string().max(200).optional();
export type Description = z.infer<typeof description>;

export const id = z.string().uuid();
export type ID = z.infer<typeof id>;

export const name = z.string().max(10);
export type Name = z.infer<typeof name>;

export const price = z.string();
export type Price = z.infer<typeof price>;

export const baseProductSchema = z.object({
  description,
  id,
  name,
  price,
});

export type BaseProductSchema = z.infer<typeof baseProductSchema>;
