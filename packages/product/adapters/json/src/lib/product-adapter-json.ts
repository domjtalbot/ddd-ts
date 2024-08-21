import { StandardProduct, ID, Product, ProductRepository } from '@demo/product';
import { z } from 'zod';
import { readFile } from 'fs/promises';
import get from 'lodash.get';

const mappedProperties = z.object({
  products: z.string(),
  productId: z.string(),
  productName: z.string(),
  productDescription: z.string(),
  productPrice: z.string(),
});

export const jsonProductAdapterConfig = z.object({
  filePath: z.string(),
  mappedProperties,
});

export type JsonProductAdapterConfig = z.infer<typeof jsonProductAdapterConfig>;

export class JsonProductAdapter implements ProductRepository {
  private products: Product[] = [];
  private filePath: string;
  private mappedProperties: JsonProductAdapterConfig['mappedProperties'];

  constructor(input: JsonProductAdapterConfig) {
    const { filePath, mappedProperties } =
      jsonProductAdapterConfig.parse(input);

    this.filePath = filePath;
    this.mappedProperties = mappedProperties;
  }

  private async readJsonFile(): Promise<JSON> {
    const data = await readFile(this.filePath, 'utf-8');

    return JSON.parse(data);
  }

  private parseJson(data: JSON): Product[] {
    const products = get(data, this.mappedProperties.products);

    return products?.map?.((product: JSON) => {
      return {
        description: get(product, this.mappedProperties.productDescription),
        id: get(product, this.mappedProperties.productId),
        name: get(product, this.mappedProperties.productName),
        price: get(product, this.mappedProperties.productPrice),
      };
    });
  }

  async create() {
    throw new Error('Method not implemented.');
  }

  async delete() {
    throw new Error('Method not implemented.');
  }

  async findById(): Promise<Product | undefined> {
    throw new Error('Method not implemented.');
  }

  async list() {
    const data = await this.readJsonFile();
    const jsonProducts = this.parseJson(data);

    return jsonProducts.map(
      (product) =>
        new StandardProduct({
          description: product.description,
          id: product.id,
          name: product.name,
          price: product.price,
        })
    );
  }

  async update() {
    throw new Error('Method not implemented.');
  }
}
