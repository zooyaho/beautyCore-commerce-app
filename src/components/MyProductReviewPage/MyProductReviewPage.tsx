import React from 'react';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Img,
  Text,
} from '@chakra-ui/react';

import PrintRatingStars from '@components/common/PrintRatingStars';

import { LAYOUT } from '@constants/layout';

import { RightArrowIcon } from 'generated/icons/MyIcons';

function MyProductReviewPage() {
  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
        주문내역
      </Text>
      <Box mt="3rem" mb=".5rem" fontWeight="bold" px="1rem">
        <Text>
          총&nbsp;
          <Text as="span" textColor="primary.500">
            78
          </Text>
          건
        </Text>
      </Box>
      {/* s: review item */}
      <Container pt="1.5rem">
        <Box as="header" mb="1.5rem" textStyle="sm">
          <Flex justifyContent="space-between">
            <Text textStyle="ss_wb">박지우</Text>
            <PrintRatingStars rate={3.5} starBoxSize="14px" />
          </Flex>
          <Text textStyle="ss_wn_cg600">2021.03.29</Text>
        </Box>
        <Flex flexDirection="column" mt="1rem" mb="1.5rem">
          <Text>순해서 아이피부에도 자극없이 사용할 수 있어요!</Text>
          <Flex gap=".7rem" mt=".5rem">
            <Img src="./images/dummyImg/Rectangle_2008.png" alt="상품 이미지" />
            <Img src="./images/dummyImg/Rectangle_2008.png" alt="상품 이미지" />
            <Img src="./images/dummyImg/Rectangle_2008.png" alt="상품 이미지" />
          </Flex>
        </Flex>
        <Divider />
      </Container>
      {/* e: review item */}
      <Container pt="1.5rem">
        <Box as="header" mb="1.5rem" textStyle="sm">
          <Flex justifyContent="space-between">
            <Text textStyle="ss_wb">박지우</Text>
            <PrintRatingStars rate={4.5} starBoxSize="14px" />
          </Flex>
          <Text textStyle="ss_wn_cg600">2021.03.29</Text>
        </Box>
        <Flex flexDirection="column" mt="1rem" mb="1.5rem">
          <Text>순해서 아이피부에도 자극없이 사용할 수 있어요!</Text>
          <Flex gap=".7rem" mt=".5rem"></Flex>
        </Flex>
        <Divider />
      </Container>
      <Center>
        <Flex justifyContent="center" alignItems="center" my="3rem" w="60%">
          <Button variant="pageButton">1</Button>
          <Button variant="pageButton">2</Button>
          <Button variant="pageButton">3</Button>
          <Button variant="pageButton">4</Button>
          <Button variant="pageButton">5</Button>
          <Button variant="transparentButton">
            <RightArrowIcon boxSize="10px" ml="1rem" />
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default MyProductReviewPage;
