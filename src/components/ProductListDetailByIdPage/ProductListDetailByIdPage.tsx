import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

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

import { ProductDetail } from '@apis/product/ProductAPi.type';
import { cartSliceAction } from '@features/cart/cartSlice';

import {
  DownArrowIcon,
  RatingStarIcon,
  UpArrowIcon,
} from '@components/common/@Icons/MyIcons';
import CartDrawer from '@components/common/CartDrawer';
import ScrollToTop from '@components/common/ScrollToTop';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';
import { setLocalStorage } from '@utils/localStorage/helper';
import { productImgSrc } from '@utils/productImgSrc';

import OrderInfoSection from './_fragment/OrderInfoSection';
import ReviewSection from './_fragment/ReviewSection';

interface ProductListDetailByIdPageProps extends ChakraProps {
  productListData: ProductDetail;
}

function ProductListDetailByIdPage({
  productListData: productData,
}: ProductListDetailByIdPageProps) {
  const { query } = useRouter();
  const [isShowDetail, setIsShowDetail] = useState(false);
  const detailShowToggleHandler = () => setIsShowDetail((isShow) => !isShow);
  const focusTarget = useRef<Array<null | HTMLDivElement>>([]);
  const SCROLL_BUTTONS = [
    { title: '상세정보', target: 0 },
    { title: '구매정보', target: 1 },
    { title: `리뷰 (${productData?.reviewCount})`, target: 2 },
  ];
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const setStorageOrderListHandler = () => {
    setLocalStorage('order', [
      {
        productId: productData.id,
        name: productData.name,
        photo: productData.photo,
        capacity: productData.capacity,
        price: productData.price,
        count: 1,
      },
    ]);
  };

  return (
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
          <Flex flexDirection="column" gap=".7rem">
            <Button
              variant="whiteButton"
              size="lg"
              onClick={() => {
                dispatch(
                  cartSliceAction.addProductList({
                    productId: productData.id,
                    name: productData.name,
                    price: productData.price,
                    productQuantity: 1,
                  }),
                );
                onOpen();
              }}
            >
              장바구니
            </Button>
            <Button
              variant="primaryButton"
              size="lg"
              onClick={setStorageOrderListHandler}
            >
              <Link href={ROUTES.ORDER}>
                <Center as="a" w="100%" h="100%">
                  바로구매
                </Center>
              </Link>
            </Button>
          </Flex>
          <CartDrawer isOpen={isOpen} onClose={onClose} />
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
          src={query && productImgSrc(query.tagName as string)}
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
              productData.avgRate ? Number(productData.avgRate.toFixed(1)) : 0
            }
            focusTarget={focusTarget}
          />
        </Box>
      </Box>
      <ScrollToTop />
    </>
  );
}

export default ProductListDetailByIdPage;
