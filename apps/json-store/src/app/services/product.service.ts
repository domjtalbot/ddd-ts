import { JsonProductAdapter } from '@demo/product/adapter/json';
import { resolve } from 'path';

export const productStore = new JsonProductAdapter({
  filePath: resolve(__dirname, '../../../data.json'),
  mappedProperties: {
    products: 'products',
    productId: 'id',
    productName: 'name',
    productDescription: 'description',
    productPrice: 'price',
  },
});
