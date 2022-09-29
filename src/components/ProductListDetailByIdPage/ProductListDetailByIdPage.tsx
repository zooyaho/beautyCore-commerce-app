import React from 'react';

import { Box, Button, ChakraProps, Flex, Img, Text } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import { RatingStarIcon } from 'generated/icons/MyIcons';

interface ProductListDetailByIdPageProps extends ChakraProps {
  id?: string | string[];
}

function ProductListDetailByIdPage({ id }: ProductListDetailByIdPageProps) {
  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Img src="/images/dummyImg/Group_252.png" mt="1rem" zIndex="0" />
      <Box
        boxShadow=" 0px 0px 10px rgba(26, 26, 26, 0.1)"
        borderRadius="20px 20px 0px 0px"
        px="1rem"
      >
        <Flex justifyContent="center" pt=".7rem">
          <Box w="50px" h="5px" bg="gray.200" borderRadius="2.5px" />
        </Flex>
        <Text textStyle="lg" fontWeight="bold" pt="2rem">
          인코스런 로션
          <Text as="span" textColor="gray.600" ml="5px">
            120ml
          </Text>
        </Text>
        <Text
          textStyle="lg"
          textColor="primary.500"
          fontWeight="bold"
          mt=".7rem"
        >
          27,000
          <Text as="span" textColor="black" fontWeight="normal">
            원
          </Text>
        </Text>
        <Text textStyle="sm" fontWeight="bold" textColor="gray.800">
          3만원 이상 구매시
          <Text as="span" textColor="primary.500">
            &nbsp;무료배송
          </Text>
        </Text>
        <Text my=".7rem">
          순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한
          고보습 로션
        </Text>
        <Flex alignItems="center" gap="3px" pb="1rem">
          <RatingStarIcon color="primary.500" boxSize="10px" />
          <Text fontWeight="bold">3.5</Text>
          <Text textColor="gray.700">(리뷰 125개)</Text>
        </Flex>
        <Flex flexDirection="column" gap=".7rem">
          <Button variant="whiteButton" size="lg">
            장바구니
          </Button>
          <Button variant="primaryButton" size="lg">
            바로구매
          </Button>
        </Flex>
      </Box>
      <Flex>
        <Button>상세정보</Button>
        <Button>구매정보</Button>
        <Button>리뷰 (78)</Button>
      </Flex>
    </Box>
  );
}

export default ProductListDetailByIdPage;
