import type { StandardProductSchema } from './standard-product.schema';

import { BaseProduct } from '../base-product/base-product.entity';
import { standardProductSchema } from './standard-product.schema';

export const PRODUCT_TYPE = 'standard-product';

export class StandardProduct extends BaseProduct {
  constructor(data: StandardProductSchema) {
    super(data);
  }

  getType(): string {
    return PRODUCT_TYPE;
  }

  isValid(): boolean {
    return standardProductSchema.safeParse(this).success;
  }
}
