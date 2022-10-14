import instance from '@apis/_axios/instance';

import {
  Product,
  ProductDetail,
  ProductDetailList,
  ProductList,
} from './ProductAPi.type';

export async function getProduct(productId: number): Promise<ProductDetail> {
  const { data } = await instance.get(`/v1/product/${productId}/`);
  return data;
}
export async function getProductList(cursor: string): Promise<ProductList> {
  const { data } = await instance.get(
    cursor
      ? `/v1/product/?cursor=${cursor}&?page_size=10`
      : `/v1/product/?page_size=10`,
  );
  return data;
}
