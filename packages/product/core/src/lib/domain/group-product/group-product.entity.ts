import type { GroupProductSchema } from './group-product.schema';

import { BaseProduct } from '../base-product/base-product.entity';
import { groupProductSchema } from './group-product.schema';

export const GROUP_PRODUCT_TYPE = 'group-product';

export class GroupProduct extends BaseProduct {
  constructor(data: GroupProductSchema) {
    super(data);
  }

  getType(): string {
    return GROUP_PRODUCT_TYPE;
  }

  isValid(): boolean {
    return groupProductSchema.safeParse(this).success;
  }
}
