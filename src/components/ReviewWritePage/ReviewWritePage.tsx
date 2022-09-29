import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';

interface ReviewWritePageProps extends ChakraProps {}

function ReviewWritePage({ ...basisProps }: ReviewWritePageProps) {
  return (
    <Box {...basisProps}>
      <Text>ReviewWritePage</Text>
    </Box>
  );
}

export default ReviewWritePage;
