# Core

Encapsulates the business logic of the Product.
Defines the domain entities, use cases, and repository interfaces that represent the core business logic.
This package ensures that the core functionality is independent of external frameworks and technologies.

Responsibilities:
- Define what a product is and its behaviors.
- Specify the methods and use-cases for interacting with products.
- Define the ProductAdapter interface that adapters must implement.
- Ensure the core logic is abstract and not dependent on any specific implementation.
- Unit tests to validate the business logic.

## About

### Entities

The Entities define the shape of the data.

### Repositories

The repositories are concerned about data access and persistence.
They describe a contract allows external data sources to interact with our data.

Repositories are primarily concerned with data access and persistence. They provide a simple and consistent interface for interacting with the underlying data storage.
The methods within a respoitory are typcially straightforward and focusses on retrieving or manipulating data without additional logic.

For example a method called `findById` will simply query the data source and return the item. It doesnt' contain additional logic or checks.

```ts
async findById(id: ID): Promise<Product | undefined> {
  // Directly interacts with the data source to fetch the product by ID
  return await database.findProductById(id);
}
```

### Adapters

The Adapters are the implmentations of the repositories for each data source.
If we want to store products in memory, we create an adapter that adheres to the respository.
If we want to switch memory for a database, we create an adapter for the database then use that.

By adhering to the repository contract, we have a consistence interface for working with our data.

### Use Cases

Use-cases are concerned with the business logic and behaviour.
They define what actions can be performed and how they interfact with repositories and other services.

Use-caes are used by the application services, controllers and sometimes other use-cases.

Use-cases encapsulate the business logic and workflows.
They define what actions can be performed and how they interact with repositories and other services. 
Use-cases can include additional logic, validations, and conditions that are specific to the business requirements.

Example

1. Uses the repository's findById method to fetch the product.
2. Adds additional business logic to handle specific scenarios:
  - If the product is not found, it returns undefined.
  - If the product is discontinued, it returns undefined.
  - If multiple products are found with the same ID (hypothetical scenario), it handles this case appropriately.
  
```ts
import { ProductRepository } from "./product.repository.interface";
import { ID, Product } from "../domain";

export class GetProductById {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: ID): Promise<Product | undefined> {
    // Fetch the product using the repository
    const product = await this.productRepository.findById(id);

    // Additional business logic
    if (!product) {
      return undefined;
    }

    // Example business logic: Check if the product is discontinued
    if (product.isDiscontinued) {
      return undefined;
    }

    // Example business logic: Handle cases where there might be multiple products with the same ID
    // (This is just an illustrative example; typically, IDs are unique)
    if (Array.isArray(product)) {
      // Handle the case where multiple products are found
      return product[0]; // Return the first product as an example
    }

    return product;
  }
}
```

## Usage

```ts
import product from '@internal/product/core';
```

## Adapters

Adapters describe how external data can interact with the Product business logic.
For example a Magento adapter describes how we can use Magento to manage Products.

Responsibilities:
- Defines the implementation details for the `ProductAdapter` type.
- Serve as an intermediary between the external source and the core business logic.
- Ensure that any external-source-specific logic is encapsulated within this adapter.

### How to create a new adapter

Start by creating a new Typescript package with the Nx generator, which will contain the adapter.
The adapter package should be located `/packages/product/adatpers/{new-adapter-name}`

Your new adapter should adhere to the `ProductAdapter` type from the `product/core` package.
This type defines how an adapter can interact with the business logic.

> [!TIP]
> As long as the `ProductAdapter` type is adhered to, it doesn't matter wether the adapter usings Classes or Functions.
>Use what is best for the Adapter.

```ts
import type { Product, ProductAdapter } from '@internal/product/core';

// Class example
export class NewAdapter implements ProductAdapter {
  async getProducts(): Promise<Product[]>> {
    // Implementation details for this adapter
    return [];
  }

  // ...
}

// Function Example

export const NewAdapter: ProductAdapter {
  async getProducts(): Promise<Product[]>> {
    // Implementation details for this adapter
    return [];
  }
}
```

### How to use a new adapter

Awesome, you now have a new adapter! Your new adapter is the gateway/intermediary between the UI and the core business logic.
To start using your adapter import it into your UI package.

```tsx
import { useEffect, useState } from 'react';
import { NewAdapter } from '@internal/product/adapters/new-adapter';
import { Product } from '@internal/product/core';

// If using class-based adapter
const adapter = new NewAdapter();

// If using function-based adapter
// const adapter = NewAdapter;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await adapter.getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
```
