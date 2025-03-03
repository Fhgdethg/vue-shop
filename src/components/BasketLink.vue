<template>
  <Link :to="routes.basket">
    <div class="wrapper">
      Basket
      <NumberCircle :number="totalCount" />
    </div>
  </Link>
</template>

<script setup lang="ts">
import Link from '@/components/Link.vue';
import NumberCircle from '@/components/ui/NumberCircle.vue';

import { routes } from '@/router/routes.ts';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const totalCount = computed(() =>
  store.state.basket.products.reduce((acc, prev) => acc + prev.count, 0),
);
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
}
</style>
