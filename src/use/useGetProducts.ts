import { onMounted, ref } from 'vue';
import { getProductsData } from '@/sevices/products/productsService.ts';
import type { IGetProductsDataRes } from '@/sevices/products/productsTypes.ts';

export const useGetProducts = (id?: number) => {
  const isLoading = ref(false);
  const isError = ref(false);
  const products = ref<IGetProductsDataRes>(null);

  const fetchProducts = async () => {
    isLoading.value = true;
    isError.value = false;

    try {
      products.value = await getProductsData();
    } catch (err) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchProducts);

  return {
    products,
    isLoading,
    isError,
  };
};
