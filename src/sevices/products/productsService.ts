import myJsonAPI from '@/queries/myJson/myJsonAPI.ts';
import { myJsonRoutes } from '@/queries/myJson/myJsonRoutes.ts';
import type { IProduct } from '@/types/product.ts';

export const getProductsData = async () =>
  await myJsonAPI(myJsonRoutes.products);

export const getProductData = async (id: number) =>
  await myJsonAPI<IProduct>(`${myJsonRoutes.products}/${id}`);
