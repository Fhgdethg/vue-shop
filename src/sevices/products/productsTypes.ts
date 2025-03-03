import { IProduct } from '@/types/product.ts';

export interface IGetProductsDataRes {
  total: number;
  skip: number;
  limit: number;
  products: IProduct[];
}
