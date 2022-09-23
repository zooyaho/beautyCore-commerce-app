import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';

interface SignUpDonePageProps extends ChakraProps {}

function SignUpDonePage({ ...basisProps }: SignUpDonePageProps) {
  return (
    <Box {...basisProps}>
      <Text>SignUpDonePage</Text>
    </Box>
  );
}

export default SignUpDonePage;
