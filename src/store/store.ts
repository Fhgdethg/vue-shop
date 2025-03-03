import { createStore } from 'vuex';
import basket from '@/store/basket/basket.ts';

export default createStore({
  modules: {
    basket,
  },
});
