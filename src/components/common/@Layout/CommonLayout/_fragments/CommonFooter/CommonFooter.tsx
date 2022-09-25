import { Box, Container, Text } from '@chakra-ui/react';

const CommonFooter = () => {
  return (
    <Container
      as="footer"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      bg="gray.800"
      color="white"
      textStyle="sm"
      pt="2rem"
      pb="2.5rem"
    >
      <Box as="header">
        <Text textStyle="md" fontWeight="bold">
          INCOURSE.RUN
        </Text>
      </Box>
      <Box mt="1.5rem">
        <Text as="p">팀명 | 쥬야호</Text>
        <Text as="p" mt=".3rem">
          구성원 | 박지우
        </Text>
        <Text as="p" mt=".3rem">
          이메일 | jiwoo1268@naver.com
        </Text>
      </Box>
      <Box as="footer" mt="2rem">
        <Text as="span">ⓒINCOURSE.RUN All Right Reserved.</Text>
      </Box>
    </Container>
  );
};
export default CommonFooter;
