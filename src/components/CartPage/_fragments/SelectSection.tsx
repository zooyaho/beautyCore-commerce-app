import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Checkbox, Flex, Text, useBoolean } from '@chakra-ui/react';

import { Cart } from '@apis/cart/CartApi.type';
import { cartSliceAction } from '@features/cart/cartSlice';

function SelectSection() {
  const [allChecked, setAllChecked] = useBoolean();
  const dispatch = useDispatch();

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
