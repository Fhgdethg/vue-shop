<template>
  <div class="card">
    <Spinner v-if="isLoading" />
    <ErrorNotification v-if="isError" />
    <div class="cardInner" v-if="product">
      <div class="productImages">
        <img
          v-for="productImage in product.images"
          :src="productImage"
          :alt="product.title"
          class="productPhoto"
        />
      </div>
      <div class="cardData">
        <div>
          <h1 class="productTitle">
            {{ product.title }}
          </h1>
          <p class="productPrice">{{ product.price }} $</p>
          <p class="productDescription">{{ product.description }}</p>
          <p class="productRating">
            <span class="ratingNumber">{{ product.rating }}</span>
            <span class="ratingStar">&nbsp;&#9733</span>
          </p>
        </div>
        <div class="btns">
          <Button @click="goBack">Go Back</Button>
          <Button @click="store.commit('basket/addProduct', product)">Add To Basket</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useStore} from "vuex";

import Button from '@/components/elements/Button.vue';
import ErrorNotification from "@/components/ui/ErrorNotification.vue";
import Spinner from "@/components/ui/Spinner.vue";

import { useGetProductById } from '@/use/useGetProductById.ts';

const router = useRouter();
const route = useRoute();
const store = useStore();

const productId = route.params.productId;

const {
  product: productData,
  isLoading: isLoadingData,
  isError: isErrorData,
} = useGetProductById(productId);

const product = computed(() => productData.value?.data || null);
const isLoading = computed(() => isLoadingData.value);
const isError = computed(() => isErrorData.value);

const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
.card {
  padding: 25px 20px;
  box-shadow: 0px 1px 10px rgba($darkBlue, 0.4);
  border-radius: 15px;
}

.cardInner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 100%;
}

.productImages {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.productPhoto {
  width: 270px;
  height: auto;
  max-height: 270px;
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

.productPrice {
  font-size: 30px;
  color: $darkBlue;
  font-weight: 700;
  font-style: italic;
}

.productDescription {
  margin-top: 30px;
  font-size: 20px;
}

.productRating {
  margin-top: 20px;
  text-align: right;
  font-size: 16px;
  font-weight: 700;
}

.ratingNumber {
  color: $darkBlue;
}

.ratingStar {
  color: $darkRed;
}

.btns {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
