import React from 'react';
import { Link } from 'react-scroll';

import {
  Box,
  Button,
  ChakraProps,
  Flex,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

// import PurchaseModal from '@components/ProductPage/_fragment/PurchaseModal';
// import { SubmitButton } from '@components/common';
import DetailSection1 from './_fragment/DetailSection1';
import DetailSection2 from './_fragment/DetailSection2';
import DetailSection3 from './_fragment/DetailSection3';

import { RatingStarIcon } from 'generated/icons/MyIcons';

interface ProductDetailByIdPageProps extends ChakraProps {
  id?: string | string[];
}

const productInfo = [
  {
    id: '0',
    name: '바스 & 샴푸',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 클렌저',
    price: 27000,
    capacity: 300,
    tags: ['올인원', '클렌저', '마일드', '바스 & 샴푸'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '1',
    name: '오일',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 오일',
    price: 25000,
    capacity: 50,
    tags: ['올인원', '클렌저', '마일드', '오일'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '2',
    name: '로션',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 로션',
    price: 20000,
    capacity: 100,
    tags: ['올인원', '클렌저', '마일드', '로션'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '3',
    name: '크림',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 크림',
    price: 18000,
    capacity: 310,
    tags: ['올인원', '클렌저', '마일드', '크림'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
  {
    id: '4',
    name: '파우더로션',
    description:
      '머리부터 발끝까지 한번에! 마일드한 세정을 도와주는 올인원 파우더로션',
    price: 30000,
    capacity: 200,
    tags: ['올인원', '클렌저', '마일드', '파우더로션'],
    avgRate: '4.3',
    reviewCount: '125',
    created: '2022-09-26T08:10:13.948Z',
    imgurl: '/images/ProductProfile.png',
  },
];

function ProductDetailByIdPage({
  id,
  ...basisProps
}: ProductDetailByIdPageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box {...basisProps}>
      <Box boxSize="343px" h="300px" bgImage="/images/ProductDetail.png"></Box>
      <Flex
        direction="column"
        w="100%"
        h="100%"
        justify="space-between"
        roundedTop="20px"
        boxShadow="0px -10px 10px -8px #1A1A1A1A"
      >
        <Box w="50px" h="5px" rounded="2.5px" bg="gray.200" m="10px auto"></Box>
        <Box mx="15px" mb="15px">
          <HStack mt="20px" spacing="1">
            <Text variant="bold20">인코스런 로션</Text>
            <Text variant="normal20gray">120ml</Text>
          </HStack>
          <VStack spacing="-1" align="start" mb="10px">
            <HStack spacing="0">
              <Text variant="bold20commerse">27,000</Text>
              <Text variant="normal20">원</Text>
            </HStack>
            <HStack fontWeight="bold" fontSize="12px" spacing="1">
              <Text>3만원 이상 구매시</Text>
              <Text color="commerse.500">무료배송</Text>
            </HStack>
          </VStack>
          <Text mb="10px">
            순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를
            위한 고보습 로션
          </Text>
          <HStack spacing="1">
            <RatingStarIcon />
            <Text variant="bold16">4.3</Text>
            <Text variant="normal16gray">(리뷰 125개)</Text>
          </HStack>
        </Box>
        <VStack mb="30px" onClick={onOpen}>
          <Button variant="whiteButton" size="lg">
            장바구니
          </Button>
          <Button variant="primaryButton" size="lg">
            바로구매
          </Button>
        </VStack>
      </Flex>
      <HStack w="100%" justify="space-evenly" pb="30">
        <Link to="DetailInfo" spy={true} smooth={true}>
          <Button variant="btntoggle">상세정보</Button>
        </Link>
        <Link to="PurchaseInfo" spy={true} smooth={true} offset={-200}>
          <Button variant="btntoggle">구매정보</Button>
        </Link>
        <Link to="ReviewInfo" spy={true} smooth={true}>
          <Button variant="btntoggle">리뷰 (78)</Button>
        </Link>
      </HStack>
      <DetailSection1 />
      <DetailSection2 />
      <DetailSection3 />
      {/* <PurchaseModal
        isOpen={isOpen}
        onClose={onClose}
        purchase={['테스트', 2000, `${id}`]}
      /> */}
    </Box>
  );
}

export default ProductDetailByIdPage;
