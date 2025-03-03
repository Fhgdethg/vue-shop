<template>
  <section class="catalog">
    <div class="wrp">
      <Search
        @updateValue="searchUpdateHandler"
        cl="productSearch"
        placeholder="Enter product name"
      />
      <CardsList
        :isLoading="isLoading"
        :isError="isError"
        empty-text="No products"
      >
        <ProductSmallCard
          v-if="products"
          v-for="product in products"
          :product="product"
        />
        <p
          class="emptyText"
          v-if="!isLoading && !isError && products?.length === 0"
        >
          Basket is empty
        </p>
      </CardsList>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardsList from '@/components/CardsList.vue';
import Search from '@/components/Search.vue';
import { useGetProducts } from '@/use/useGetProducts.ts';
import { computed, ref, watch } from 'vue';
import ProductSmallCard from '@/components/ProductSmallCard.vue';

const {
  products: productsData,
  isLoading: isLoadingData,
  isError: isErrorData,
} = useGetProducts();

const products = computed(() => productsData.value?.data?.products || null);
const isLoading = computed(() => isLoadingData.value);
const isError = computed(() => isErrorData.value);

const searchQuery = ref('');

const filteredProducts = computed(() => {
  if (!searchQuery.value.trim()) {
    return products.value;
  }
  return products.value.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchQuery.value.trim().toLowerCase()),
  );
});

const searchUpdateHandler = (val: string) => {
  searchQuery.value = val;
};
</script>

<style scoped lang="scss">
.catalog {
  padding: 60px 0px;
}

.wrp {
  margin: 0 auto;
  max-width: 1500px;
}

.productSearch {
  margin: 0 15px 20px 15px;
}

.emptyText {
  color: $darkBlue;
  font-weight: 700;
  font-size: 28px;
}
</style>
