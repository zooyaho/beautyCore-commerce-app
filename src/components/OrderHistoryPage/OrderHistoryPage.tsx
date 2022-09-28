import Link from 'next/link';
import React from 'react';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

function OrderHistoryPage() {
  return (
    <Box as="main" pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem" px="1rem">
        결제내역
      </Text>
      <Box mt="3rem">
        <Divider />
        <Text py="1rem" pl="1rem" textStyle="sm" fontWeight="700">
          [2021 - 04 - 01]
        </Text>
        <Divider />
        <Flex p=".7rem 1rem">
          <Img
            mr=".7rem"
            w="3.75rem"
            h="3.75rem"
            src="/images/dummyImg/상품이미지.png"
          />
          <Box textStyle="sm">
            <Text fontWeight="bold">바스 &amp; 샴푸</Text>
            <Text textColor="gray.600">바스 &amp; 샴푸 | 120ml</Text>
            <Text textColor="primary.500" fontWeight="bold">
              27,000원&nbsp;/&nbsp;1개
            </Text>
          </Box>
          <Spacer />
          <Text
            textStyle="sm"
            fontWeight="700"
            color="primary.500"
            alignSelf="center"
          >
            결제완료
          </Text>
        </Flex>
        {/* s: 배송지 정보 */}
        <Box borderTop="10px solid #F9F9F9" borderBottom="10px solid #F9F9F9">
          <Text as="h3" py=".8rem" pl="1rem" fontWeight="700">
            배송지 정보
          </Text>
          <Divider />
          <Flex flexDirection="column" gap=".7rem" px="1rem" my="1rem">
            <Flex>
              <Text minW="30%">이름</Text>
              <Text textColor="gray.700">박지우</Text>
            </Flex>
            <Flex>
              <Text minW="30%">핸드폰 번호</Text>
              <Text textColor="gray.700">010-1234-1234</Text>
            </Flex>
            <Flex>
              <Text minW="30%">우편번호</Text>
              <Text textColor="gray.700">01234</Text>
            </Flex>
            <Flex>
              <Text minW="30%">주소</Text>
              <Text textColor="gray.700">
                서울특별시 마포구 성산동 123-3 성산빌딩 B동 302호
              </Text>
            </Flex>
            <Flex>
              <Text minW="30%">배송요청사항</Text>
              <Text textColor="gray.700">문앞에 두고 가주세요</Text>
            </Flex>
          </Flex>
        </Box>
        {/* e: 배송지 정보 */}
        {/* s: 결제 정보 */}
        <Text as="h3" py=".8rem" pl="1rem" fontWeight="700">
          결제정보
        </Text>
        <Divider />
        <Container textStyle="md" fontWeight="400">
          <Flex textColor="gray.600" mt="1rem">
            <Text>총 상품금액</Text>
            <Spacer />
            <Text>108,000 원</Text>
          </Flex>
          <Flex textColor="gray.600" mt=".7rem">
            <Text>총 배송비</Text>
            <Spacer />
            <Text>2,500 원</Text>
          </Flex>
          <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
            <Text>결제수단</Text>
            <Spacer />
            <Text fontWeight="bole">신용카드 결제</Text>
          </Flex>
        </Container>
        <Divider />
        <Flex my="1.3rem" px="1rem">
          <Text>결제금액</Text>
          <Spacer />
          <Text textColor="primary.500" fontWeight="700">
            29,500 원
          </Text>
        </Flex>
        {/* e: 결제 정보 */}
        <Flex p="2rem 1rem" gap=".7rem">
          <Button
            type="button"
            size="lg"
            fontSize="md"
            borderRadius="25px"
            textColor="primary.500"
            flexGrow="1"
            variant="whiteButton"
          >
            <Link href="/">메인화면 이동</Link>
          </Button>
          <Button
            type="button"
            size="lg"
            fontSize="md"
            fontWeight="bold"
            borderRadius="25px"
            colorScheme="primary"
            flexGrow="1"
          >
            <Link href="/">주문내역 이동</Link>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default OrderHistoryPage;
