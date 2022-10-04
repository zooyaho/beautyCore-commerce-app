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
const DUMMY_PRODUCT = {
  id: 1,
  name: '크림',
  description: '촉촉하고 부드러운 보습감을 부여하는 마일드 크림',
  price: 25000,
  capacity: 250,
  detail:
    '<p><img alt="" src="/_media/ckeditor/2022/09/11/pjmhnc.png" />ㅁㄴㅇ</p>',
  reviewList: [
    {
      id: 'u1',
      user: 'zooyaho',
      rate: 1.5,
      content:
        '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
      reviewimageSet: [
        {
          reviewId: 1,
          url: '/images/home/Rectangle_9.png',
        },
        {
          reviewId: 2,
          url: '/images/home/Rectangle_9.png',
        },
        {
          reviewId: 3,
          url: '/images/home/Rectangle_9.png',
        },
      ],
      created: '2022-03-26T12:22:25.934Z',
    },
    {
      id: 'u2',
      user: 'mark',
      rate: 3,
      content:
        '아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
      reviewimageSet: [],
      created: '2022-05-16T12:22:25.934Z',
    },
    {
      id: 'u3',
      user: 'lee',
      rate: 2.5,
      content:
        '처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
      reviewimageSet: [
        {
          reviewId: 1,
          url: '/images/home/Rectangle_9.png',
        },
      ],
      created: '2022-05-06T12:22:25.934Z',
    },
  ],
  avgRate: 4.3,
  reviewCount: 3,
};

const SCROLL_BUTTONS = [
  { title: '상세정보', target: 0 },
  { title: '구매정보', target: 1 },
  { title: `리뷰 (${DUMMY_PRODUCT.reviewCount})`, target: 2 },
];

function ProductListDetailByIdPage({ id }: ProductListDetailByIdPageProps) {
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const detailShowToggleHandler = () => setIsShowDetail((isShow) => !isShow);
  const focusTarget = React.useRef<Array<null | HTMLDivElement>>([]);
  const { onOpen } = useDisclosure();

  return (
    <>
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
          <Text textStyle="sl_wb" pt="2rem">
            {DUMMY_PRODUCT.name}
            <Text as="span" textColor="gray.600" ml="5px">
              {DUMMY_PRODUCT.capacity}ml
            </Text>
          </Text>
          <Text textStyle="sl_wb_cp" mt=".7rem">
            {DUMMY_PRODUCT.price}
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
            {DUMMY_PRODUCT.description}
          </Text>
          <Flex alignItems="center" gap="3px" pb="1rem">
            <RatingStarIcon color="primary.500" boxSize="14px" />
            <Text textStyle="sm_wb">{DUMMY_PRODUCT.avgRate}</Text>
            <Text textStyle="sm_wn_cg700">
              (리뷰 {DUMMY_PRODUCT.reviewCount}개)
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
            reviewList={DUMMY_PRODUCT.reviewList}
            avgRate={DUMMY_PRODUCT.avgRate}
            focusTarget={focusTarget}
          />
        </Box>
      </Box>
      <ScrollToTop />
    </>
  );
}

export default ProductListDetailByIdPage;
