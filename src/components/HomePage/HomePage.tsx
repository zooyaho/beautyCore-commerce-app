import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';

interface HomePageProps extends ChakraProps { }

function HomePage({ ...basisProps }: HomePageProps) {
  return (
    <Box {...basisProps}>
      <Text>MainPage</Text>
    </Box>
  );
}

export default HomePage;
