import { z } from 'zod';

import { baseProductSchema } from '../base-product/base-product.schema';

export const downloadLink = z.string().url();
export type DownloadLink = z.infer<typeof downloadLink>;

export const digitalProductSchema = baseProductSchema.extend({
  downloadLink,
});

export type DigitalProductSchema = z.infer<typeof digitalProductSchema>;
