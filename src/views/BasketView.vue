<template>
  <section class="basket">
    <div class="wrp">
      <CardsList>
        <ProductBasketCard
          v-for="productData in basketProducts"
          :key="productData.product.id"
          :product="productData"
        />
        <p class="emptyText" v-if="!basketProducts.length">Basket is empty</p>
      </CardsList>
      <div class="btnPay" v-if="basketProducts.length">
        <Button @click="console.log('Payed')">Pay For It</Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardsList from '@/components/CardsList.vue';
import ProductBasketCard from '@/components/ProductBasketCard.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import Button from '@/components/Button.vue';

const store = useStore();
const basketProducts = computed(() => store.state.basket.products);
</script>

<style scoped lang="scss">
.basket {
  padding: 60px 0px;
}

.wrp {
  margin: 0 auto;
  max-width: 1500px;
}

.btnPay {
  max-width: 300px;
  margin: 10px 15px 5px 15px;
}

.emptyText {
  color: $darkBlue;
  font-weight: 700;
  font-size: 28px;
}
</style>
