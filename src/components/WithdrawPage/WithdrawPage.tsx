import React from 'react';

import { Box, Button, ChakraProps, Flex, Image, Text } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

interface WithdrawPageProps extends ChakraProps { }

function WithdrawPage({ ...basisProps }: WithdrawPageProps) {
  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem" px="1rem">
        주문내역
      </Text>
    </Box>
  );
}

export default WithdrawPage;
