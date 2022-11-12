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
  created: string;
  id: string;
}
export interface localOrderListType {
  id?: number;
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
export interface OrderGetStatus {
  count: number;
  next: string;
  previous: string;
  results: OrderStatusResults[];
}
export interface OrderStatusResults {
  id: number;
  orderId: string;
  productId: number;
  count: number;
  created: string;
}
export interface OrderResults {
  id: string;
  userId: 0;
  price: 0;
  shippingPrice: 0;
  amount: 0;
  method: 'CARD';
  status: string;
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
  shippingStatus: string;
  created: string;
}
