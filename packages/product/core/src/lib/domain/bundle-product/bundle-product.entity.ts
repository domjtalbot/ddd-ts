import type { BundleProductSchema } from './bundle-product.schema';

import { BaseProduct } from '../base-product/base-product.entity';
import { bundleProductSchema } from './bundle-product.schema';

export const BUNDLE_PRODUCT_TYPE = 'bundle-product';

export class BundleProduct extends BaseProduct {
  constructor(data: BundleProductSchema) {
    super(data);
  }

  getType(): string {
    return BUNDLE_PRODUCT_TYPE;
  }

  isValid(): boolean {
    return bundleProductSchema.safeParse(this).success;
  }
}
