import { productStore } from './services/product.service';

export default async function Index() {
  let products = [];

  try {
    products = await productStore.list();
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <h1>Welcome to the JSON Product store 👋</h1>

      <h2>Catalog</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
