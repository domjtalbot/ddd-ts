import type {
  DownloadLink,
  DigitalProductSchema,
} from './digital-product.schema';

import { BaseProduct } from '../base-product/base-product.entity';
import { digitalProductSchema } from './digital-product.schema';

export const DIGITAL_PRODUCT_TYPE = 'digital-product';

export class DigitalProduct extends BaseProduct {
  downloadLink: DownloadLink;

  constructor(data: DigitalProductSchema) {
    super(data);

    const digitalProduct = digitalProductSchema.parse(data);

    this.downloadLink = digitalProduct.downloadLink;
  }

  getType(): string {
    return DIGITAL_PRODUCT_TYPE;
  }

  isValid(): boolean {
    return digitalProductSchema.safeParse(this).success;
  }
}
