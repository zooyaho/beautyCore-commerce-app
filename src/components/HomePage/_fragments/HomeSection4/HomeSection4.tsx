import Link from 'next/link';
import React from 'react';

import { Box, Container, Flex, Text } from '@chakra-ui/react';

import ArrowRight from '@components/common/@Icons/System/ArrowRight';

function HomeSection4() {
  return (
    <Container
      bgImage="url(./images/home/Rectangle_431.png)"
      bgSize="cover"
      h="28rem"
      pos="relative"
    >
      <Box position="absolute" left="5%" top="20%" textStyle="xl">
        <Text>
          <Text as="span" textStyle="sxl_wb_cp">
            인코스런
          </Text>
          가입하고
        </Text>
        <Text textStyle="sxl_wb">전상품 1000원 혜택</Text>
        <Text>받아보세요</Text>
        <Flex mt="1.4rem" textStyle="md" alignItems="center">
          <Link href="/">이벤트 상세보기</Link>
          <ArrowRight />
        </Flex>
      </Box>
    </Container>
  );
}

export default HomeSection4;
