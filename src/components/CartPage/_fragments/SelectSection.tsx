import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Checkbox, Flex, Text, useBoolean } from '@chakra-ui/react';

import { cartSliceAction } from '@features/cart/cartSlice';
import useAppStore from '@features/useAppStore';

interface SelectSectionProps {
  cartQueryDataLength: number;
}

function SelectSection({ cartQueryDataLength }: SelectSectionProps) {
  const [allChecked, setAllChecked] = useBoolean();
  const dispatch = useDispatch();
  const storeIsAllSelecte = useAppStore((store) => store.CART.allChecked);
  const checkedCartList = useAppStore((store) => store.CART.checkedCartList);

  useEffect(() => {
    if (checkedCartList.length !== cartQueryDataLength) {
      setAllChecked.off();
    } else {
      setAllChecked.on();
    }
  }, [
    cartQueryDataLength,
    checkedCartList.length,
    setAllChecked,
    storeIsAllSelecte,
  ]);

  const toggleAllSelectedHandler = useCallback(() => {
    setAllChecked.toggle();
    dispatch(cartSliceAction.toggleAllChecked(!allChecked));
  }, [allChecked, dispatch, setAllChecked]);

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
      <Button variant="transparentButton">
        <Text as="span" textStyle="md">
          선택삭제
        </Text>
      </Button>
    </>
  );
}

export default SelectSection;
