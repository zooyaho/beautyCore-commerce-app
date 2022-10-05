import React from 'react';

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import { RightArrowIcon } from 'generated/icons/MyIcons';

function OrderHistoryPage() {
  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
        주문내역
      </Text>
      <Box mt="3rem">
        {/* s: 주문내역1 */}
        <Box mt="1rem">
          <Divider />
          <Text py="1rem" pl="1rem" textStyle="ss_wb">
            [2021 - 04 - 01]
          </Text>
          <Divider />
        </Box>
        <Flex p=".7rem 1rem">
          <Img
            mr=".7rem"
            w="3.75rem"
            h="3.75rem"
            src="/images/dummyImg/상품이미지.png"
          />
          <Box>
            <Text textStyle="ss_wb">바스 &amp; 샴푸</Text>
            <Text textStyle="ss_wn_cg600" textColor="gray.600">
              바스 &amp; 샴푸 | 120ml
            </Text>
            <Text textStyle="ss_wb_cp">27,000원&nbsp;/&nbsp;1개</Text>
          </Box>
          <Spacer />
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Text textStyle="ss_wb_cp">결제완료</Text>
            <Text textStyle="sm">배송비 2,500원</Text>
          </Flex>
        </Flex>
        {/* e: 주문내역1 */}
        <Flex justifyContent="flex-end" px="1rem">
          <Button
            colorScheme="primary"
            borderRadius="5px"
            flexGrow=".2"
            w="fit-content"
          >
            주문취소
          </Button>
        </Flex>

        {/* s: 주문내역2 */}
        <Box mt="1rem">
          <Divider />
          <Text py="1rem" pl="1rem" textStyle="ss_wb">
            [2021 - 03 - 11]
          </Text>
          <Divider />
        </Box>
        <Flex p=".7rem 1rem">
          <Img
            mr=".7rem"
            w="3.75rem"
            h="3.75rem"
            src="/images/dummyImg/상품이미지.png"
          />
          <Box>
            <Text textStyle="ss_wb">바스 &amp; 샴푸</Text>
            <Text textStyle="ss_wn_cg600" textColor="gray.600">
              바스 &amp; 샴푸 | 120ml
            </Text>
            <Text textStyle="ss_wb_cp">27,000원&nbsp;/&nbsp;1개</Text>
          </Box>
          <Spacer />
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Text textStyle="ss_wb_cp">결제완료</Text>
            <Text textStyle="sm">배송비 2,500원</Text>
          </Flex>
        </Flex>
        {/* e: 주문내역2 */}
        <Flex justifyContent="flex-end" px="1rem">
          <Button
            variant="whiteButton"
            borderRadius="5px"
            h="40px"
            w="fit-content"
            flexGrow=".2"
          >
            리뷰작성
          </Button>
        </Flex>
        <Divider mt="1rem" />
        <Center>
          <Flex justifyContent="center" alignItems="center" my="3rem" w="70%">
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
    </Box>
  );
}

export default OrderHistoryPage;
