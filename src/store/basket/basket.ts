import type { IProduct } from '@/types/product.ts';

export interface IBasketProduct {
  count: number;
  product: IProduct;
}

interface IBasketState {
  products: IBasketProduct[];
}

const state: IBasketState = {
  products: [],
};

const mutations = {
  addProduct(state, product: IProduct) {
    if (!state.products.length) {
      state.products.push({
        count: 1,
        product,
      });
      return;
    }

    const basketProduct = state.products.find(
      ({ product: basketProduct }) => basketProduct.id === product.id,
    );

    if (basketProduct) basketProduct.count += 1;
    else {
      state.products.push({
        count: 1,
        product,
      });
    }
  },
  removeProduct(state, product: IProduct) {
    if (!state.products.length) return;

    const basketProductIndex = state.products.findIndex(
      ({ product: basketProduct }) => basketProduct.id === product.id,
    );

    if (basketProductIndex !== -1) {
      const basketProduct = state.products[basketProductIndex];

      if (basketProduct.count > 1) {
        basketProduct.count -= 1;
      } else {
        state.products.splice(basketProductIndex, 1);
      }
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
