<template>
  <ErrorNotification v-if="isError" />
  <Spinner v-if="isLoading" class-name="loader" />
  <div class="cards">
    <slot />
  </div>
</template>

<script setup lang="ts">
import ErrorNotification from '@/components/ui/ErrorNotification.vue';
import Spinner from '@/components/ui/Spinner.vue';

const props = withDefaults(
  defineProps<{
    isLoading?: boolean;
    isError?: boolean;
  }>(),
  {
    isLoading: false,
    isError: false,
  },
);
</script>

<style scoped lang="scss">
.error {
  padding: 15px;
  font-size: 25px;
  background: rgba($darkRed, 0.4);
  border-radius: 18px;
  box-shadow: 0px 0px 10px rgba($black, 0.3);
  text-align: center;
  color: $white;
}

.loader {
  margin-top: 200px;
}

.cards {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  max-height: 80vh;
  overflow-x: auto;
  padding: 15px;
}
</style>
