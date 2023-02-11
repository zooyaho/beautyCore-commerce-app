import { Box, Flex, Text } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

const CommonFooter = () => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      justifyContent="center"
      minH={LAYOUT.FOOTER.HEIGHT}
      bg="gray.800"
      color="white"
      textStyle="sm"
      p="2rem 1rem 2.5rem"
    >
      <Box as="header">
        <Text textStyle="sm_wb_cw">BEAUTY.CORE</Text>
      </Box>
      <Box mt="1.5rem">
        <Text>팀명 | 쥬야호</Text>
        <Text mt=".3rem">구성원 | 박지우</Text>
        <Text mt=".3rem">이메일 | jiwoo1268@naver.com</Text>
      </Box>
      <Box as="footer" mt="2rem">
        <Text as="span">ⓒBEAUTY.CORE All Right Reserved.</Text>
      </Box>
    </Flex>
  );
};
export default CommonFooter;
