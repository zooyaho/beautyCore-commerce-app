import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart/cartSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
    },
  });
}

const store = makeStore();

export default store;
