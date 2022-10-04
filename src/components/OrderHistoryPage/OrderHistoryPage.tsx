import React from 'react';

import {
  Box,
  Button,
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
      <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem" px="1rem">
        주문내역
      </Text>
      <Box mt="3rem">
        {/* s: 주문내역1 */}
        <Box mt="1rem">
          <Divider />
          <Text py="1rem" pl="1rem" textStyle="sm" fontWeight="700">
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
          <Box textStyle="sm">
            <Text fontWeight="bold">바스 &amp; 샴푸</Text>
            <Text textColor="gray.600">바스 &amp; 샴푸 | 120ml</Text>
            <Text textColor="primary.500" fontWeight="bold">
              27,000원&nbsp;/&nbsp;1개
            </Text>
          </Box>
          <Spacer />
          <Flex
            flexDirection="column"
            textStyle="sm"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Text fontWeight="700" color="primary.500">
              결제완료
            </Text>
            <Text>배송비 2,500원</Text>
          </Flex>
        </Flex>
        {/* e: 주문내역1 */}
        <Flex justifyContent="flex-end" px="1rem">
          <Button colorScheme="primary" borderRadius="5px" flexGrow=".2">
            주문취소
          </Button>
        </Flex>
        {/* s: 주문내역2 */}
        <Box mt="1rem">
          <Divider />
          <Text py="1rem" pl="1rem" textStyle="sm" fontWeight="700">
            [2021 - 03 - 21]
          </Text>
        </Box>
        {/* s: map */}
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
          <Flex
            flexDirection="column"
            textStyle="sm"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Text fontWeight="700" color="primary.500">
              상품준비
            </Text>
            <Text>무료배송</Text>
          </Flex>
        </Flex>
        {/* e: map */}
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
          <Flex
            flexDirection="column"
            textStyle="sm"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Text fontWeight="700" color="primary.500">
              배송중
            </Text>
            <Text>배송비 2,500원</Text>
          </Flex>
        </Flex>
        {/* e: 주문내역2 */}
        {/* s: 주문내역3 */}
        <Box mt="1rem">
          <Divider />
          <Text py="1rem" pl="1rem" textStyle="sm" fontWeight="700">
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
          <Box textStyle="sm">
            <Text fontWeight="bold">바스 &amp; 샴푸</Text>
            <Text textColor="gray.600">바스 &amp; 샴푸 | 120ml</Text>
            <Text textColor="primary.500" fontWeight="bold">
              27,000원&nbsp;/&nbsp;1개
            </Text>
          </Box>
          <Spacer />
          <Flex
            flexDirection="column"
            textStyle="sm"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Text fontWeight="700" color="primary.500">
              배송완료
            </Text>
            <Text>배송비 2,500원</Text>
          </Flex>
        </Flex>
        {/* e: 주문내역3 */}
        <Flex justifyContent="flex-end" px="1rem">
          <Button variant="whiteButton" borderRadius="5px" flexGrow=".2">
            리뷰작성
          </Button>
        </Flex>
        <Divider mt="1rem" />
        <Flex justifyContent="center" alignItems="center" my="3rem">
          <Button variant="pageButton">1</Button>
          <Button variant="pageButton">2</Button>
          <Button variant="pageButton">3</Button>
          <Button variant="pageButton">4</Button>
          <Button variant="pageButton">5</Button>
          <Button colorScheme="transparent" ml="1rem" border="none">
            <RightArrowIcon boxSize="10px" />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default OrderHistoryPage;
