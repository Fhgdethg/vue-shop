<template>
  <input
    :value="inputVal"
    @input="handleInput"
    :class="`search ${cl || ''}`"
    :placeholder="placeholder || 'Search'"
  />
</template>

<script setup lang="ts">
import { useDebounce } from '@/use/useDebounce.ts';
import { ref, watch } from 'vue';

const emit = defineEmits(['updateValue']);
const props = defineProps<{ cl?: string; placeholder?: string }>();

const inputVal = ref('');

const debouncedValue = useDebounce<string>(inputVal, 700);

const handleInput = (event: Event) => {
  inputVal.value = (event.target as HTMLInputElement).value;
};

watch(debouncedValue, (newValue) => {
  emit('updateValue', newValue);
});
</script>

<style lang="scss" scoped>
.search {
  padding: 10px;
  min-width: 320px;
  border-radius: 12px;
  border: 2px solid $darkBlue;
  font-size: 16px;
  color: $darkBlue;

  &::placeholder {
    color: $darkBlue;
  }
}
</style>
