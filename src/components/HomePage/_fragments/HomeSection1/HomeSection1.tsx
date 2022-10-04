import React from 'react';

import { Box, Container, Text } from '@chakra-ui/react';

// interface HomeSection1Props extends ChakraProps { }
function HomeSection1() {
  return (
    <Container
      w="100%"
      bgImage="url(./images/home/Group_298.png)"
      bgSize="cover"
      top="0"
      right="0"
      left="0"
      h="100vh"
    >
      <Box position="absolute" top="22vh">
        <Text as="h2" textStyle="sxl_wb">
          지속 가능한
          <br />
          클린 &amp; 비건뷰티, 인코스런
        </Text>
        <Text textStyle="lg" mt="1rem">
          자연과 사람에게
          <br />
          책임질 수 있는 지속가능한
          <br />
          제품을 만듭니다.
        </Text>
      </Box>
    </Container>
  );
}

export default HomeSection1;
