import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button,
  Checkbox,
  Flex,
  Text,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react';

import { useDeleteCartItemMutation } from '@apis/cart/CartApi.mutation';
import { CartItem } from '@apis/cart/CartApi.type';
import { cartSliceAction } from '@features/cart/cartSlice';
import useAppStore from '@features/useAppStore';

import { useQueryClient } from '@tanstack/react-query';

import SelectDeleteModal from './SelectDeleteModal';

interface SelectSectionProps {
  cartQueryData: CartItem[] | undefined;
}

function SelectSection({ cartQueryData }: SelectSectionProps) {
  const [allChecked, setAllChecked] = useBoolean();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const checkedCartList = useAppStore((store) => store.CART.checkedCartList);
  const { mutate: deleteCartItemMutate } = useDeleteCartItemMutation();

  useEffect(() => {
    if (
      checkedCartList.length !== cartQueryData?.length ||
      checkedCartList.length === 0
    ) {
      setAllChecked.off();
    } else {
      setAllChecked.on();
    }
  }, [cartQueryData?.length, checkedCartList.length, setAllChecked]);

  const toggleAllSelectedHandler = () => {
    setAllChecked.toggle();
    dispatch(cartSliceAction.toggleAllChecked(!allChecked));
  };

  const deleteSelectedListHandler = () => {
    console.log('checkedCartList: ', checkedCartList); // {"productId": 5,"count": 3}
    const deleteList = cartQueryData?.filter((product) => {
      return checkedCartList.find((checkedProduct) => {
        return product.productId === checkedProduct.productId;
      });
    });
    deleteList?.forEach((product) => {
      deleteCartItemMutate(product.id, {
        onSuccess: () => {
          queryClient.invalidateQueries(['cart', product.id]);
          queryClient.invalidateQueries(['cart']);
        },
      });
    });
    checkedCartList.forEach((product) => {
      dispatch(
        cartSliceAction.deleteCheckedCartList({ productId: product.productId }),
      );
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex pb=".7rem">
        <Checkbox
          alignSelf="center"
          colorScheme="primary"
          size="lg"
          isChecked={allChecked}
          onChange={toggleAllSelectedHandler}
        >
          <Text as="span" textStyle="md">
            모두선택
          </Text>
        </Checkbox>
      </Flex>
      <Button
        variant="transparentButton"
        onClick={() => {
          onOpen();
          deleteSelectedListHandler();
        }}
      >
        <Text as="span" textStyle="md">
          선택삭제
        </Text>
      </Button>
      <SelectDeleteModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default SelectSection;
