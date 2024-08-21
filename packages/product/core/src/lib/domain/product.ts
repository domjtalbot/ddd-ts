import { affiliateProductSchema } from './affiliate-product';
import { bundleProductSchema } from './bundle-product';
import { configurableProductSchema } from './configurable-product';
import { digitalProductSchema } from './digital-product';
import { groupProductSchema } from './group-product';
import { standardProductSchema } from './standard-product';

import { z } from 'zod';

export const productSchema = z.union([
  affiliateProductSchema,
  bundleProductSchema,
  configurableProductSchema,
  digitalProductSchema,
  groupProductSchema,
  standardProductSchema,
]);

export type Product = z.infer<typeof productSchema>;
