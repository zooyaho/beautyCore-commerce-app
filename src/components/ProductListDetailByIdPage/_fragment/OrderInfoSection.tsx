import React from 'react';

import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { DownArrowIcon, UpArrowIcon } from 'generated/icons/MyIcons';

function OrderInfoSection() {
  const [isShowOderInfo, setIsShowOderInfo] = React.useState(false);

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="gray.100"
        px="1rem"
        h="4rem"
        onClick={() => setIsShowOderInfo(!isShowOderInfo)}
      >
        <Text fontWeight="bold">주문 및 배송 안내</Text>
        {isShowOderInfo ? <DownArrowIcon /> : <UpArrowIcon />}
      </Flex>
      {isShowOderInfo && (
        <Flex flexDirection="column" px="1rem" bg="gray.100">
          <Text fontWeight="bold" mb="1rem">
            [주문 및 배송 안내]
          </Text>
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gridTemplateRows={'auto auto auto 1fr'}
            gridTemplateColumns={'20% 1fr'}
            gap="4"
          >
            <GridItem>배송방법 :</GridItem>
            <GridItem>인코스런 택배</GridItem>
            <GridItem>배송지역 :</GridItem>
            <GridItem>전국</GridItem>
            <GridItem>배송비용 :</GridItem>
            <GridItem>
              단품 상품 구매 시 3,000배송비 발생 그외 단품 묶음 구매의 경우
              30,000원 이상 구매 시 무료배송
            </GridItem>
          </Grid>
        </Flex>
      )}
    </Box>
  );
}

export default OrderInfoSection;
