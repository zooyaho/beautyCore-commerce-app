import { Review } from '@apis/reveiw/ReviewListApi.type';

export interface ITags {
  id: number;
  name: string;
}
export interface Product {
  avgRate: number;
  capacity: number;
  description: string;
  detail: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  reviewCount: number;
  reviewList: Review[];
}
export interface ProductList {
  next: string;
  previous: string;
  results: Product[];
  cursor: string;
}
