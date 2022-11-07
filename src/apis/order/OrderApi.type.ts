export interface Order {
  userId: number;
  price: number;
  shippingPrice: number;
  amount: number;
  method: string;
  userName: string;
  userPhone: string;
  userAddrPost: string;
  userAddr: string;
  userAddrDetail: string;
  shipName: string;
  shipPhone: string;
  shipAddrPost: string;
  shipAddr: string;
  shipAddrDetail: string;
  orderMessage: string;
}
export interface localOrderListType {
  productId: number;
  name: string;
  photo: string;
  capacity: number;
  price: number;
  count: number;
}
export interface OrderStatus {
  orderId: string;
  productId: number;
  count: number;
}
