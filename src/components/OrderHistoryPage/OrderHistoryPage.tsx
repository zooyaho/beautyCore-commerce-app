import Link from 'next/link';
import React from 'react';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

function OrderHistoryPage() {
  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem" px="1rem">
        주문내역
      </Text>
    </Box>
  );
}

export default OrderHistoryPage;
