import { onMounted, ref } from 'vue';
import { getProductData } from '@/sevices/products/productsService.ts';
import type { IProduct } from '@/types/product.ts';

export const useGetProductById = (id?: number) => {
  const isLoading = ref(false);
  const isError = ref(false);
  const product = ref<IProduct>(null);

  const fetchProductById = async (id: number) => {
    isLoading.value = true;
    isError.value = false;

    try {
      product.value = await getProductData(id);
    } catch (err) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => await fetchProductById(id));

  return {
    product,
    isLoading,
    isError,
  };
};
