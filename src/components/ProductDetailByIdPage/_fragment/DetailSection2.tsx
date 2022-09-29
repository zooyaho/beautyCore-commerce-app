import React, { useState } from 'react';

import { Box, Button, Collapse, HStack, Text, VStack } from '@chakra-ui/react';

import { DownArrowIcon, UpwardArrowIcon } from 'generated/icons/MyIcons';

const DetailSection2 = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button
        id="PurchaseInfo"
        w="100%"
        rounded={'0px'}
        p="0"
        onClick={() => setOpen(!open)}
      >
        <HStack justify="space-between" w="100%">
          <Text variant="bold16">주문 및 배송 안내</Text>
          {open ? <UpwardArrowIcon /> : <DownArrowIcon />}
        </HStack>
      </Button>
      <Collapse in={open} animateOpacity>
        <VStack bg="gray.100" align="start" py="30px">
          <Text variant="bold16">[주문 및 배송 안내] </Text>
          <Text>배송방법 : 인코스런 택배 </Text>
          <Text>배송지역 : 전국 </Text>
          <VStack align="start" spacing="0px">
            <Text>배송비용 : 단품 상품 구매 시 3,000배송비 발생</Text>
            <HStack>
              <Box minW="60px"></Box>
              <Text>
                그외 단품 묶음 구매의 경우 30,000원 이상 구매 시 무료배송
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Collapse>
    </>
  );
};

export default DetailSection2;
