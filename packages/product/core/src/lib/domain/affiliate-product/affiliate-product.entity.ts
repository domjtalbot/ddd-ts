import type { AffiliateProductSchema } from './affiliate-product.schema';

import { BaseProduct } from '../base-product/base-product.entity';
import { affiliateProductSchema } from './affiliate-product.schema';

export const AFFILIATE_PRODUCT_TYPE = 'affiliate-product';

export class AffiliateProduct extends BaseProduct {
  constructor(data: AffiliateProductSchema) {
    super(data);
  }

  getType(): string {
    return AFFILIATE_PRODUCT_TYPE;
  }

  isValid(): boolean {
    return affiliateProductSchema.safeParse(this).success;
  }
}
