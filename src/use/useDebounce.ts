import { onUnmounted, ref, watch } from 'vue';
// import { Ref } from '@vue/reactivity';

export const useDebounce = (val: any, delay?: number): any => {
  const debouncedValue = ref(val.value);
  let timer: ReturnType<typeof setTimeout> | null = null;

  watch(val, (newValue) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      debouncedValue.value = newValue;
    }, 700);
  });

  onUnmounted(() => clearTimeout(timer));

  return debouncedValue;
};
