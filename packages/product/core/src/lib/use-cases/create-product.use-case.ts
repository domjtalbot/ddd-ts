import { productSchema } from '../domain';
import { ProductRepository } from '../product.repository.interface';
import { UseCase } from './use-case';
import { z } from 'zod';

const createProductInputSchema = productSchema;

export type CreateProductInput = z.infer<typeof createProductInputSchema>;

export class CreateProduct extends UseCase<
  CreateProductInput,
  void
> {
  constructor(private productRepository: ProductRepository) {
    super();

    this.productRepository = productRepository;
  }

  async execute(input: CreateProductInput) {
    const product = createProductInputSchema.parse(input);

    await this.productRepository.create(product);
  }
}
