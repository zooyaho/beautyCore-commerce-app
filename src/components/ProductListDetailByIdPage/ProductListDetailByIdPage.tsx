import React from 'react';

import {
  Box,
  Button,
  Center,
  ChakraProps,
  Container,
  Flex,
  Img,
  Tab,
  Text,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import OrderInfoSection from './_fragment/OrderInfoSection';
import ReviewSection from './_fragment/ReviewSection';

import {
  DownArrowIcon,
  RatingStarIcon,
  UpArrowIcon,
} from 'generated/icons/MyIcons';

interface ProductListDetailByIdPageProps extends ChakraProps {
  id?: string | string[];
}

function ProductListDetailByIdPage({ id }: ProductListDetailByIdPageProps) {
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const detailShowToggleHandler = () => setIsShowDetail((isShow) => !isShow);
  return (
    <Box pt={LAYOUT.HEADER.HEIGHT} pos="relative" bg="gray.100">
      {/* s: 상품 이미지 */}
      <Center>
        <Img src="/images/dummyImg/Group_252.png" mt="1rem" />
      </Center>
      {/* e: 상품 이미지 */}
      <Box
        bg="white"
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
          <RatingStarIcon color="primary.500" boxSize="14px" />
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
      {/* s: 이동 버튼 */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="2rem"
        h="5rem"
        bg="white"
        textColor="gray.600"
      >
        <Button variant="transparentButton">상세정보</Button>
        <Button variant="transparentButton">구매정보</Button>
        <Button variant="transparentButton">리뷰 (78)</Button>
      </Flex>
      {/* e: 이동 버튼 */}

      {/* 상세 정보 */}
      <Img
        src="/images/dummyImg/크림-상세이미지.png"
        alt="크림 상세이미지"
        w="100%"
        h={isShowDetail ? 'auto' : '80vh'}
        objectPosition="0 0"
        objectFit="cover"
        mt="2rem"
      />
      <Box>
        <Container pb="2rem" pt={isShowDetail ? '2rem' : 'null'}>
          <Button
            w="100%"
            bg="white"
            border="1px solid #1A1A1A"
            borderRadius="50px"
            size="lg"
            fontWeight="700"
            textStyle="md"
            boxShadow="0 0 10px #1A1A1A1A"
            onClick={detailShowToggleHandler}
          >
            상세정보 접기
            {isShowDetail ? (
              <DownArrowIcon ml=".7rem" />
            ) : (
              <UpArrowIcon ml=".7rem" />
            )}
          </Button>
        </Container>
        {/* 주문 및 배송 안내 */}
        <OrderInfoSection />
        {/* 리뷰 */}
        <ReviewSection />
      </Box>
    </Box>
  );
}

export default ProductListDetailByIdPage;
