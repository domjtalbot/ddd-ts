import { ID, Product } from "./domain";

export interface ProductRepository {
  delete(product: Product): Promise<void>;
  list(): Promise<Product[]>;
  findById(id: ID): Promise<Product | undefined>;
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
}
