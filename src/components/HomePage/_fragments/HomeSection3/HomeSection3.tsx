import React from 'react';

// import { PlusIcon } from '@chakra-ui/icon';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import {
  CheckIcon_P,
  CurveIcon,
  VerticalLineIcon,
} from 'generated/icons/MyIcons';

// interface HomeSection3Props extends ChakraProps { }

function HomeSection3() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      bgColor="gray.100"
    >
      <Text textStyle="xl" color="primary.500" fontWeight="700" mt="5rem">
        부풀려지는 가격 이제 그만!
      </Text>
      <Text textAlign="center" mt="1.3rem" mb="3.6rem" textStyle="lg">
        불합리한{' '}
        <Text as="span" fontWeight="700">
          중간 유통 거품을 제거
        </Text>
        한<br />
        인코스런만의 투명한 유통혁신
      </Text>
      <Flex>
        <Flex pos="relative">
          <Flex
            w="100%"
            h="auto"
            pos="absolute"
            top="7.3rem"
            justifyContent="center"
          >
            <VerticalLineIcon />
          </Flex>
          <Flex flexDirection="column" zIndex="9" gap="1.5rem">
            <Image src="/images/home/Group_74.png" />
            <Image src="/images/home/Group_77.png" />
            <Image src="/images/home/Group_75.png" />
            <Image src="/images/home/Group_73.png" />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          gap="7.5rem"
          textAlign="center"
          ml="1.5rem"
        >
          <Box>
            <Flex justifyContent="center">
              <CheckIcon_P />
              <Text fontWeight="700">STEP 1</Text>
            </Flex>
            <Text>
              제조공장의 <br />
              제조 및 개발비용
            </Text>
          </Box>
          <Box textColor="gray.400">
            <Flex justifyContent="center">
              <Text fontWeight="700">STEP 2</Text>
            </Flex>
            <Text>물류 및 운송비용</Text>
          </Box>
          <Box textColor="gray.400">
            <Flex justifyContent="center">
              <Text fontWeight="700">STEP 3</Text>
            </Flex>
            <Text>결제 수수료</Text>
          </Box>
          <Box>
            <Flex justifyContent="center">
              <CheckIcon_P />
              <Text fontWeight="700">STEP 4</Text>
            </Flex>
            <Text>소비자 가격</Text>
          </Box>
        </Flex>
      </Flex>
      <CurveIcon mt="1.5rem" />
      <Text mt="1.3rem" textStyle="md" fontWeight="700" color="primary.500">
        SAVE MONEY
      </Text>
      <Text mt="1.9rem" textStyle="md" fontWeight="700" color="primary.500">
        * 온라인 직접 판매
      </Text>
      <Text textStyle="md" textAlign="center">
        인코스런은 온라인으로만 직접판매하여,
        <br />더 낮은 가격을 만들어냅니다.
      </Text>
      <Text mt="5rem" textStyle="xl">
        이렇게 <strong>비교하세요!</strong>
      </Text>
      <Text mt="1.3rem" textStyle="lg" textAlign="center">
        인코스런은 부담스러운
        <br />
        영유아{' '}
        <Text as="span" fontWeight="700" boxShadow="inset 0 -11px 0 #FF710B">
          화장품의 가격거품을 제거해
          <br />
          투명한
        </Text>
        &nbsp; 가격을 만들어 갑니다.
      </Text>
      <Flex mt="5rem" mb="4rem">
        <Flex direction="column" alignItems="center" justifyContent="flex-end">
          <Box w="10rem" h="24rem" bg="gray.400">
            <Box
              borderRadius="15px"
              p=".4rem 1rem"
              m="1.3rem 1.6rem"
              textStyle="sm"
              w="6rem"
              bg="gray.700"
              color="white"
              textAlign="center"
            >
              2~30,000원
            </Box>
          </Box>
          <Text textStyle="lg" color="gray.700" mt=".8rem">
            시중 주요브랜드
          </Text>
        </Flex>
        <Flex
          direction="column"
          justifyContent="flex-end"
          ml="1.5rem"
          alignItems="center"
        >
          <Flex
            w="10rem"
            bg="#FFF3E0"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              borderRadius="15px"
              p=".4rem 1rem"
              m="1.4rem 2.2rem 0px 2.2rem"
              textStyle="sm"
              w="5rem"
              bg="primary.500"
              color="white"
              textAlign="center"
            >
              9,900원
            </Box>
            <Box mt="1.2rem" pb="2rem" w="70%">
              <Image src="/images/LOGO.png" alt="beauth core logo" />
            </Box>
          </Flex>
          <Text color="primary.500" textStyle="lg" fontWeight="700" mt=".8rem">
            인코스런
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HomeSection3;
