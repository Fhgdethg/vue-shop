<template>
  <div class="basketCard">
    <ProductSmallCard :product="product.product" :is-show-add-btn="false" />
    <div class="cardFunctional">
      <p class="total">{{ product.count }}</p>
      <ActionButton @click="store.commit('basket/addProduct', product.product)">
        +
      </ActionButton>
      <ActionButton
        @click="store.commit('basket/removeProduct', product.product)"
      >
        -
      </ActionButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { IBasketProduct } from '@/store/basket/basket.ts';
import Button from '@/components/Button.vue';
import ProductSmallCard from '@/components/ProductSmallCard.vue';
import { useStore } from 'vuex';
import ActionButton from '@/components/ActionButton.vue';

export default defineComponent({
  components: { ActionButton, ProductSmallCard, Button },
  props: {
    product: {
      type: Object as () => IBasketProduct,
      required: true,
    },
  },
  setup({ product }) {
    const store = useStore();
    return { store, product };
  },
});
</script>

<style lang="scss" scoped>
.basketCard {
  padding: 0 15px 0 0;
  background: $white;
  display: flex;
}

.cardFunctional {
  padding: 20px 15px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.total {
  font-size: 22px;
  color: $darkBlue;
  font-weight: 700;
}
</style>
