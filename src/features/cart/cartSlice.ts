import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Product {
  productId: number;
  name: string;
  price: number;
  productQuantity: number;
}

export interface CartStateType {
  seletedProduct: Product | null;
  productList: Product[];
}

const initialState: CartStateType = {
  seletedProduct: null,
  productList: [],
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
      console.log(state.productList);
      state.productList.forEach((stateProduct, index) => {
        if (stateProduct.productId === action.payload.productId) {
          state.productList[index] = action.payload;
        }
      });
    },
    updateSelectedProduct: (state, action: PayloadAction<Product>) => {
      console.log('1');
      state.seletedProduct = action.payload;
    },
  },
});

export const {
  actions: cartSliceAction, //
  reducer: cartSliceReducer,
} = cartSlice;

export default cartSlice;
