import instance from '@apis/_axios/instance';

import { Product, ProductList } from './ProductAPi.type';

export async function getProductList(): Promise<ProductList> {
  const { data } = await instance.get('/v1/product/');
  return data;
}
export async function getProduct(productId: number): Promise<Product> {
  const { data } = await instance.get(`/v1/product/${productId}/`);
  return data;
}
