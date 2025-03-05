import { onMounted, ref } from 'vue';

export const useFetchData = <T>(
  fetchServiceAction: (id?: number | null) => any,
  id?: number,
) => {
  const isLoading = ref(false);
  const isError = ref(false);
  const data = ref<T>(null);

  const fetchData = async (id?: number) => {
    isLoading.value = true;
    isError.value = false;

    try {
      id
        ? (data.value = await fetchServiceAction(id))
        : (data.value = await fetchServiceAction());
    } catch (err) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => await fetchData(id));

  return {
    data,
    isLoading,
    isError,
  };
};
