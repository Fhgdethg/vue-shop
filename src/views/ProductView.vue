<template>
  <section class="product">
    <div class="wrp">
      <ProductPageCard />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductPageCard from '@/components/ProductPageCard.vue';
</script>

<style scoped>
.product {
  padding: 60px 10px;
}

.wrp {
  margin: 0 auto;
  max-width: 1500px;
}
</style>
