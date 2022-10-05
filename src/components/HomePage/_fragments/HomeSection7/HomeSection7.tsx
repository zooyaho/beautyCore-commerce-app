import { Flex, Text } from '@chakra-ui/react';

import { InstagramIcon } from 'generated/icons/MyIcons';

// interface HomeSection7Props extends ChakraProps { }

function HomeSection7() {
  return (
    <Flex
      bg="linear-gradient(90deg, #FF710B 0%, #FFAB2E 100%)"
      direction="column"
      alignItems="center"
      justifyContent="center"
      py="5.2rem"
      color="white"
    >
      <Text textStyle="sl_wb_cw">인코스런에 대해 더 궁금하신가요?</Text>
      <Text mt=".7rem" textStyle="md" textAlign="center">
        인스타그램을 방문하시면 더욱 다양한
        <br />
        인코스런의 이야기를 확인하실 수 있어요!
      </Text>
      <Flex mt=".8rem">
        <InstagramIcon mr=".3rem" />
        <Text textStyle="sm_wb_cw">INCOURSE.RUN</Text>
      </Flex>
    </Flex>
  );
}

export default HomeSection7;
