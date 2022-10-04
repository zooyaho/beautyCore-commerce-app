import React from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { PlusIcon } from 'generated/icons/MyIcons';

// interface HomeSection2Props extends ChakraProps { }
function HomeSection2() {
  return (
    <Flex w="100%" direction="column" bg="#FFFCEF" position="relative">
      <Box>
        <Image
          src="./images/home/과도한_패키징.png"
          alt="과도한 패키징 이미지"
          position="absolute"
          top="20px"
          left="10%"
        />
        <Image
          src="./images/home/불합리한_유통구조.png"
          alt="불합리한 유통구조 이미지"
          position="absolute"
          top="160px"
          right="0%"
        />
        <Image
          src="./images/home/과장된광고.png"
          alt="과장된광고 이미지"
          position="absolute"
          top="307px"
        />
      </Box>
      <Box position="absolute" top="481px" left="20%">
        <Flex alignItems="end">
          <Box p="15px">
            <PlusIcon boxSize="18px" color="primary.500" />
          </Box>
          <Text as="p" textStyle="sxl_wb">
            불합리한 유통구조
            <br />
            과도한 패키징
            <br />
            과장된 광고
          </Text>
        </Flex>
        <Text textStyle="lg" mt="40px">
          부풀려지는 가격은 이제 그만!
          <br />
          <Text as="span" textStyle="sl_wb_cp">
            인코스런
          </Text>
          은 가격거품을 제거한
          <br />
          착한소비를 위해 태어났습니다.
        </Text>
      </Box>
      <Box mt="807px">
        <Image
          src="/images/home/Group_341.png"
          alt="이제 합리적으로 
지갑을 지키세요!"
          w="100%"
          h="auto"
        />
      </Box>
    </Flex>
  );
}

export default HomeSection2;
