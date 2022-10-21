//@delete:line
import counterSlice from '@features/counter/counterSlice';
import modalSlice from '@features/modal/modalSlice';
import userSlice from '@features/user/userSlice';

import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart/cartSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      //@delete:line
      // [counterSlice.name]: counterSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
      // [modalSlice.name]: modalSlice.reducer,
    },
  });
}

const store = makeStore();

export default store;
