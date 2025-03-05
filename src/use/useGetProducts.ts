import { useFetchData } from '@/use/useFetchProductData.ts';

import { getProductsData } from '@/sevices/products/productsService.ts';

import type { IGetProductsDataRes } from '@/sevices/products/productsTypes.ts';

export const useGetProducts = (id?: number) => {
  const { data, isLoading, isError } =
    useFetchData<IGetProductsDataRes>(getProductsData);

  return {
    products: data,
    isLoading,
    isError,
  };
};
