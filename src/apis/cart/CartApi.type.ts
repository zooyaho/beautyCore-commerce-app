export interface Cart {
  id: number;
  cartitem: CartItem[];
  userId: number;
}
export interface CartList {
  count: number;
  next: string;
  previous: string;
  results: Cart[];
}
export interface CartItem {
  id: number;
  productId: number;
  cartId: number;
  count: number;
}
export interface CartCount {
  count: number;
}
export interface CartItemId extends CartCount {
  id: number;
}
