import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isLogin: boolean;
  id: undefined | number;
}

const initialState: UserStateType = {
  isLogin: false,
  id: undefined,
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const {
  actions: userSliceActions, //
  reducer: userSliceReducer,
} = userSlice;

export default userSlice;
