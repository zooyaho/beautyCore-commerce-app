export interface Cart {
  id: number;
  cartitem: string;
  userId: number;
}
export interface CartList {
  count: number;
  next: string;
  previous: string;
  results: Cart[];
}
export interface CartItem {
  productId: number;
  cartId: number;
  count: number;
}
