import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Checkbox, useBoolean } from '@chakra-ui/react';

import { Cart } from '@apis/cart/CartApi.type';
import { cartSliceAction } from '@features/cart/cartSlice';

import { useQueryClient } from '@tanstack/react-query';

interface CheckBoxProps {
  value: number;
  productId: number;
}

function CheckBox({ value, productId }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useBoolean();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const cartQueryData: Cart[] | undefined = queryClient.getQueryData(['cart']);
  // const checkedCartList = useAppStore((store) => store.CART.checkedCartList);

  const changeCheckedCartHandler = useCallback(() => {
    if (cartQueryData) {
      const count = cartQueryData[0].cartitem.find(
        (product) => product.productId === productId,
      )?.count;
      if (count && !isChecked) {
        dispatch(cartSliceAction.updateCheckedCartList({ productId, count }));
      } else {
        dispatch(cartSliceAction.deleteCheckedCartList({ productId }));
      }
    }
  }, [cartQueryData, dispatch, isChecked, productId]);

  return (
    <Checkbox
      alignSelf="flex-start"
      colorScheme="primary"
      size="lg"
      mr=".7rem"
      value={value}
      onChange={() => {
        setIsChecked.toggle();
        changeCheckedCartHandler();
      }}
    />
  );
}

export default CheckBox;
