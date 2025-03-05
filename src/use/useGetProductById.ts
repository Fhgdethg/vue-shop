import { useFetchData } from '@/use/useFetchProductData.ts';

import { getProductData } from '@/sevices/products/productsService.ts';

import type { IProduct } from '@/types/product.ts';

export const useGetProductById = (id?: number) => {
  const { data, isLoading, isError } = useFetchData<IProduct>(
    getProductData,
    id,
  );

  return {
    product: data,
    isLoading,
    isError,
  };
};
