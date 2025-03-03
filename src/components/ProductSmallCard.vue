<template>
  <div class="productCard">
    <div class="cardInner">
      <img :src="product.images[0]" :alt="product.title" class="productPhoto" />
      <div class="cardData">
        <div>
          <h3 class="productTitle">
            {{ product.title }}
          </h3>
          <p class="price">{{ product.price }} $</p>
        </div>
        <div class="btns">
          <Button @click="moreInformation">More Information</Button>
          <Button @click="addToBasket" v-if="isShowAddBtn"
            >Add To Basket</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IProduct } from '@/types/product.ts';
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';
import { routes } from '@/router/routes.ts';
import { useStore } from 'vuex';

export default defineComponent({
  components: { Button },
  props: {
    product: {
      type: Object as () => IProduct,
      required: true,
    },
    isShowAddBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup({ product }) {
    const router = useRouter();
    const store = useStore();

    function moreInformation() {
      console.log(product);
      router.push(`${routes.catalog}/${product.id}`);
    }

    const addToBasket = () => {
      store.commit('basket/addProduct', product);
    };

    return { product, moreInformation, addToBasket };
  },
});
</script>

<style lang="scss" scoped>
.productCard {
  padding: 20px;
  box-shadow: 0px 1px 10px rgba($darkBlue, 0.4);
  border-radius: 20px;
}

.cardInner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 100%;
}

.productPhoto {
  width: 200px;
  height: auto;
  max-height: 200px;
  border-radius: 10%;
  box-shadow: 0px 1px 10px rgba($black, 0.4);
}

.cardData {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.productTitle {
  margin-bottom: 10px;
}

.price {
  font-size: 30px;
  color: $darkBlue;
  font-weight: 700;
  font-style: italic;
}

.btns {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
