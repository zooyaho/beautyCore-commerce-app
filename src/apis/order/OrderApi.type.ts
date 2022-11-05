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
