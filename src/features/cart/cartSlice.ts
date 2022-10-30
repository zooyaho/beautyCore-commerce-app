import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Product {
  productId: number;
  name: string;
  price: number;
  productQuantity: number;
}

export interface CheckedCartItem {
  productId: number;
  count: number;
}

export interface CartStateType {
  seletedProduct: Product | null;
  productList: Product[];
  checkedCartList: CheckedCartItem[];
}

const initialState: CartStateType = {
  seletedProduct: null,
  productList: [],
  checkedCartList: [],
};

export const cartSlice = createSlice({
  name: 'CART',
  initialState,
  reducers: {
    addProductList: (state, action: PayloadAction<Product>) => {
      if (
        state.productList.find(
          (stateProduct) => stateProduct.productId === action.payload.productId,
        )
      )
        return;
      state.productList.push(action.payload);
    },
    deleteProductList: (state, action: PayloadAction<Product>) => {
      state.productList = state.productList.filter(
        (stateProduct) => stateProduct.productId !== action.payload.productId,
      );
    },
    updateProductList: (state, action: PayloadAction<Product>) => {
      state.productList.forEach((stateProduct, index) => {
        if (stateProduct.productId === action.payload.productId) {
          state.productList[index] = action.payload;
        }
      });
    },
    updateCheckedCartList: (state, action: PayloadAction<CheckedCartItem>) => {
      if (!state.checkedCartList.length) {
        // initial 추가
        state.checkedCartList.push(action.payload);
      } else {
        state.checkedCartList.forEach((product, index) => {
          if (product.productId === action.payload.productId) {
            // 업데이트
            state.checkedCartList[index] = action.payload;
          } else {
            // new 추가
            state.checkedCartList.push(action.payload);
          }
        });
      }
    },
    deleteCheckedCartList: (
      state,
      action: PayloadAction<{ productId: number }>,
    ) => {
      state.checkedCartList = state.checkedCartList.filter(
        (product) => product.productId !== action.payload.productId,
      );
    },
  },
});

export const {
  actions: cartSliceAction, //
  reducer: cartSliceReducer,
} = cartSlice;

export default cartSlice;
