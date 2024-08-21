import { Product } from '../domain';
import { ProductRepository } from '../product.repository.interface';
import { UseCase } from './use-case';

export type GetProductsInput = void;
export type GetProductsOutput = Product[];

export class GetProducts extends UseCase<GetProductsInput, GetProductsOutput> {
  constructor(private productRepository: ProductRepository) {
    super();

    this.productRepository = productRepository;
  }

  async execute() {
    return this.productRepository.list();
  }
}
