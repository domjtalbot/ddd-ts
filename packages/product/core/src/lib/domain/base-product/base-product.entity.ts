import type {
  BaseProductSchema,
  Description,
  ID,
  Name,
  Price,
} from './base-product.schema';

import { baseProductSchema } from './base-product.schema';

export abstract class BaseProduct {
  id: ID;
  name: Name;
  description: Description;
  price: Price;

  constructor(data: BaseProductSchema) {
    const product = baseProductSchema.parse(data);

    this.description = product.description;
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
  }

  abstract getType(): string;

  abstract isValid(): boolean;
}
