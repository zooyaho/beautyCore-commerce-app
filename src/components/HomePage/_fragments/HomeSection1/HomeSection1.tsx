import React from 'react';

import { Box, Container, Text } from '@chakra-ui/react';

// interface HomeSection1Props extends ChakraProps { }
function HomeSection1() {
  return (
    <Container
      position="relative"
      w="100%"
      bgImage="url(./images/Home/Group_298.png)"
      bgSize="cover"
      pos="absolute"
      top="0"
      right="0"
      left="0"
      h="782px"
    >
      <Box position="absolute" top="20%">
        <Text as="h2" textStyle="xl" fontWeight="bold">
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
