import Link from 'next/link';
import React from 'react';

import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  Flex,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import { CloseButtonIcon } from 'generated/icons/MyIcons';

// interface CartPageProps extends ChakraProps { }

function CartPage() {
  const item = Math.floor(Math.random() * 10);
  let content;
  if (item >= 5) {
    content = (
      <>
        <Flex
          justify="space-between"
          pt={LAYOUT.HEADER.HEIGHT}
          px="1rem"
          textColor="gray.600"
        >
          <Flex>
            <Checkbox alignSelf="center" colorScheme="primary" size="lg">
              <Text as="span" textStyle="md" fontWeight="400">
                모두선택
              </Text>
            </Checkbox>
          </Flex>
          <Button bg="transparent" _hover={{ background: 'transparent' }}>
            <Text as="span" textStyle="md" fontWeight="400">
              선택삭제
            </Text>
          </Button>
        </Flex>
        <Box bg="gray.200" pt=".7rem" pb="1.4rem">
          {/* item */}
          <Container bg="white" mt=".7rem" py="1rem">
            <Flex>
              <Checkbox
                alignSelf="flex-start"
                colorScheme="primary"
                size="lg"
                mr=".7rem"
              />
              <Box w="100%">
                <Flex w="100%">
                  <Flex>
                    <Img mr=".7rem" src="/images/dummyImg/상품이미지.png" />
                    <Box textStyle="md">
                      <Text fontWeight="700">바스 &amp; 샴푸</Text>
                      <Text textColor="gray.600">바스 &amp; 샴푸 | 120ml</Text>
                      <Text textColor="primary.500" fontWeight="700">
                        27,000원
                      </Text>
                    </Box>
                  </Flex>
                  <Spacer />
                  <Button
                    bg="transparent"
                    _hover={{ background: 'transparent' }}
                    pr="0"
                    h="1rem"
                  >
                    <CloseButtonIcon boxSize="12px" />
                  </Button>
                </Flex>
                <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
                  <Text fontWeight="400" textColor="gray.600" textStyle="md">
                    바스 &amp; 샴푸
                  </Text>
                  <Flex mt=".3rem">
                    <Flex
                      bg="white"
                      border="1px solid #EAECF0"
                      borderRadius="5px"
                      h="25px"
                    >
                      <Button
                        bg="white"
                        h="25px"
                        background="transparent"
                        _hover={{ background: 'transparent' }}
                        fontSize="20px"
                        p="0"
                      >
                        -
                      </Button>
                      <Text
                        w="25px"
                        textAlign="center"
                        textStyle="sm"
                        lineHeight="25px"
                        borderLeft="1px solid #EAECF0"
                        borderRight="1px solid #EAECF0"
                      >
                        2
                      </Text>
                      <Button
                        bg="white"
                        w="25px"
                        h="25px"
                        background="transparent"
                        _hover={{ background: 'transparent' }}
                        fontSize="20px"
                        p="0"
                      >
                        +
                      </Button>
                    </Flex>
                    <Spacer />
                    <Text fontWeight="700" textColor="gray.600" textStyle="md">
                      54,000원
                    </Text>
                  </Flex>
                </Box>
                <Flex>
                  <Text fontWeight="400" textStyle="md">
                    배송비 무료
                  </Text>
                  <Spacer />
                  <Text fontWeight="700" textStyle="lg">
                    54,000원
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
          {/* item */}
          <Container bg="white" mt=".7rem" py="1rem">
            <Flex>
              <Checkbox
                alignSelf="flex-start"
                colorScheme="primary"
                size="lg"
                mr=".7rem"
              />
              <Box w="100%">
                <Flex w="100%">
                  <Flex>
                    <Img mr=".7rem" src="/images/dummyImg/상품이미지.png" />
                    <Box textStyle="md">
                      <Text fontWeight="700">바스 &amp; 샴푸</Text>
                      <Text textColor="gray.600">바스 &amp; 샴푸 | 120ml</Text>
                      <Text textColor="primary.500" fontWeight="700">
                        27,000원
                      </Text>
                    </Box>
                  </Flex>
                  <Spacer />
                  <Button
                    bg="transparent"
                    _hover={{ background: 'transparent' }}
                    pr="0"
                    h="1rem"
                  >
                    <CloseButtonIcon boxSize="12px" />
                  </Button>
                </Flex>
                <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
                  <Text fontWeight="400" textColor="gray.600" textStyle="md">
                    바스 &amp; 샴푸
                  </Text>
                  <Flex mt=".3rem">
                    <Flex
                      bg="white"
                      border="1px solid #EAECF0"
                      borderRadius="5px"
                      h="25px"
                    >
                      <Button
                        bg="white"
                        h="25px"
                        background="transparent"
                        _hover={{ background: 'transparent' }}
                        fontSize="20px"
                        p="0"
                      >
                        -
                      </Button>
                      <Text
                        w="25px"
                        textAlign="center"
                        textStyle="sm"
                        lineHeight="25px"
                        borderLeft="1px solid #EAECF0"
                        borderRight="1px solid #EAECF0"
                      >
                        2
                      </Text>
                      <Button
                        bg="white"
                        w="25px"
                        h="25px"
                        background="transparent"
                        _hover={{ background: 'transparent' }}
                        fontSize="20px"
                        p="0"
                      >
                        +
                      </Button>
                    </Flex>
                    <Spacer />
                    <Text fontWeight="700" textColor="gray.600" textStyle="md">
                      54,000원
                    </Text>
                  </Flex>
                </Box>
                <Flex>
                  <Text fontWeight="400" textStyle="md">
                    배송비 무료
                  </Text>
                  <Spacer />
                  <Text fontWeight="700" textStyle="lg">
                    54,000원
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
        {/* 총 금액 */}
        <Container fontWeight="400">
          <Flex textColor="gray.600" mt="1.3rem">
            <Text>총 상품금액</Text>
            <Spacer />
            <Text>108,000 원</Text>
          </Flex>
          <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
            <Text>총 배송비</Text>
            <Spacer />
            <Text>0 원</Text>
          </Flex>
          <Divider />
          <Flex my="1.3rem">
            <Text>결제금액</Text>
            <Spacer />
            <Text textColor="primary.500" fontWeight="700">
              108,000 원
            </Text>
          </Flex>
          <Button
            w="100%"
            size="lg"
            fontWeight="bold"
            borderRadius="25px"
            mb="3.125rem"
            colorScheme="primary"
            type="submit"
          >
            결제하기
          </Button>
        </Container>
      </>
    );
  } else {
    content = (
      <Center minH="65vh">
        <Flex pt={LAYOUT.HEADER.HEIGHT} flexDirection="column" w="50%">
          <Text textAlign="center" textStyle="md" fontWeight="700">
            장바구니가 비어있습니다. <br />
            상품을 추가해 보세요!
          </Text>
          <Button
            w="100%"
            size="lg"
            fontWeight="bold"
            borderRadius="25px"
            colorScheme="primary"
            mt="2rem"
          >
            <Link href="/">상품보러가기</Link>
          </Button>
        </Flex>
      </Center>
    );
  }
  return <>{content}</>;
}

export default CartPage;
