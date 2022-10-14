import { useRouter } from 'next/router';
import React from 'react';

import {
  Box,
  Button,
  Center,
  ChakraProps,
  Container,
  Flex,
  Img,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useGetProduct } from '@apis/product/ProductApi.query';

import ScrollToTop from '@components/common/ScrollToTop';

import { LAYOUT } from '@constants/layout';

import CartDrawer from './_fragment/CartDrawer';
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

function ProductListDetailByIdPage() {
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const detailShowToggleHandler = () => setIsShowDetail((isShow) => !isShow);
  const focusTarget = React.useRef<Array<null | HTMLDivElement>>([]);
  const { onOpen } = useDisclosure();
  const {
    query: { id: productId },
  } = useRouter();
  const { data: productData, isLoading } = useGetProduct(Number(productId));
  const SCROLL_BUTTONS = [
    { title: '상세정보', target: 0 },
    { title: '구매정보', target: 1 },
    { title: `리뷰 (${productData?.reviewCount})`, target: 2 },
  ];

  console.log('reviewList: ', productData?.reviewList);

  return (
    <>
      {isLoading || !productData ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Box pt={LAYOUT.HEADER.HEIGHT} pos="relative" bg="gray.100">
            {/* s: 상품 이미지 */}
            <Center>
              <Img src={productData.photo} mt="1rem" />
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
              <Text textStyle="sl_wb" pt="2rem">
                {productData.name}
                <Text as="span" textColor="gray.600" ml="5px">
                  {productData.capacity}ml
                </Text>
              </Text>
              <Text textStyle="sl_wb_cp" mt=".7rem">
                {productData.price}
                <Text as="span" textColor="black" fontWeight="normal">
                  원
                </Text>
              </Text>
              <Text textStyle="ss_wb_cg800">
                3만원 이상 구매시
                <Text as="span" textColor="primary.500">
                  &nbsp;무료배송
                </Text>
              </Text>
              <Text my=".7rem" textStyle="md">
                {productData.description}
              </Text>
              <Flex alignItems="center" gap="3px" pb="1rem">
                <RatingStarIcon color="primary.500" boxSize="14px" />
                <Text textStyle="sm_wb">
                  {productData.avgRate !== null
                    ? productData.avgRate.toFixed(2)
                    : 0}
                </Text>
                <Text textStyle="sm_wn_cg700">
                  (리뷰 {productData.reviewCount}개)
                </Text>
              </Flex>
              <CartDrawer />
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
              {SCROLL_BUTTONS.map(({ title, target }) => {
                const scrollTo = () => {
                  focusTarget.current[target]?.scrollIntoView({
                    behavior: 'smooth',
                  });
                };
                return (
                  <Button
                    variant="transparentButton"
                    onClick={scrollTo}
                    key={target}
                    _hover={{ textColor: 'primary.500', fontWeight: '700' }}
                    _focus={{ textColor: 'primary.500', fontWeight: '700' }}
                  >
                    {title}
                  </Button>
                );
              })}
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
              ref={(el) => (focusTarget.current[0] = el)}
            />
            <Box>
              <Container pb="2rem" pt={isShowDetail ? '2rem' : 'null'}>
                <Button
                  w="100%"
                  bg="white"
                  border="1px solid #1A1A1A"
                  borderRadius="50px"
                  size="lg"
                  textStyle="sm_wb"
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
              <OrderInfoSection focusTarget={focusTarget} />
              {/* 리뷰 */}
              <ReviewSection
                reviewList={productData.reviewList}
                avgRate={
                  productData.avgRate
                    ? Number(productData.avgRate.toFixed(1))
                    : 0
                }
                focusTarget={focusTarget}
              />
            </Box>
          </Box>
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default ProductListDetailByIdPage;
