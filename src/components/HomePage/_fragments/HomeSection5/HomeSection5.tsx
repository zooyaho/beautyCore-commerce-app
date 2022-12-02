import Link from 'next/link';
import React from 'react';

import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

// interface HomeSection5Props extends ChakraProps { }

function HomeSection5() {
  return (
    <Center bg="#FFFCEF">
      <Flex
        direction="column"
        px="1rem"
        my="1.4rem"
        w="calc(100% - 2rem)"
        bg="white"
        alignItems="center"
      >
        <Text textStyle="sxl_wb" mt="10vh">
          소중한 우리 아이를 위해
        </Text>
        <Text mt="1.4rem">
          순수 자연유래 / 자연유래 유화제 / 자연유래
          <br />
          계면활성제 99.9% 타가는 EWG 그린등급
          <br />
          성문 100% 만을 사용한 건강한 화장품입니다.
        </Text>
        <Button
          w="12rem"
          h="3.2rem"
          mt="2rem"
          variant="primaryButton"
          size="lg"
        >
          <Link href={ROUTES.PRODUCT_LIST}>상품전체보기</Link>
        </Button>
        <Box textStyle="sm_wb" textAlign="center" mb="10vh">
          <Image
            mt="80px"
            src="/images/home/Group_243.png"
            alt="화장품 이미지"
          />
          <Text>바스 &amp; 샴푸</Text>
          <Image
            mt="80px"
            src="/images/home/Group_243.png"
            alt="화장품 이미지"
          />
          <Text>오일</Text>
          <Image
            mt="80px"
            src="/images/home/Group_243.png"
            alt="화장품 이미지"
          />
          <Text>파우더 로션</Text>
        </Box>
      </Flex>
    </Center>
  );
}

export default HomeSection5;
