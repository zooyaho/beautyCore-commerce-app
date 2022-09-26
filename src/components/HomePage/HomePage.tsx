import React from 'react';

import { Box, ChakraProps, Img, Text } from '@chakra-ui/react';

// interface HomePageProps extends ChakraProps { }

function HomePage() {
  return (
    <Box as="main">
      <Img
        src="images/mainBg.png"
        alt="home image"
        position="absolute"
        top="0"
        left="0"
        right="0"
      />
    </Box>
  );
}

export default HomePage;
