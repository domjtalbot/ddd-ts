import type { ConfigurableProductSchema } from './configurable-product.schema';

import { BaseProduct } from '../base-product/base-product.entity';
import { configurableProductSchema } from './configurable-product.schema';

export const CONFIGURABLE_PRODUCT_TYPE = 'configurable-product';

export class ConfigurableProduct extends BaseProduct {
  constructor(data: ConfigurableProductSchema) {
    super(data);
  }

  getType(): string {
    return CONFIGURABLE_PRODUCT_TYPE;
  }

  isValid(): boolean {
    return configurableProductSchema.safeParse(this).success;
  }
}
