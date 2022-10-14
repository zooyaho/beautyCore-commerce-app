import { Review } from '@apis/reveiw/ReviewListApi.type';

export interface Tags {
  id: number;
  name: string;
}
export interface Product {
  avgRate: number;
  capacity: number;
  description: string;
  id: number;
  name: string;
  price: number;
  reviewCount: number;
  tags: Tags[];
  thumbnail: string;
}
export interface ProductList {
  results: Product[];
  cursor: string;
}
export interface ProductDetail {
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
export interface ProductDetailList {
  next: string;
  previous: string;
  results: Product[];
  cursor: string;
}
