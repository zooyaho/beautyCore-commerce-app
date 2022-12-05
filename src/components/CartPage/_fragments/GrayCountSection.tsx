/* eslint-disable prettier/prettier */
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';

import { SelectedProductType } from '@components/ProductListDetailByIdPage/_fragment/CartDrawer';

import {
  MinusCartButtonIcon,
  PlusCartButtonIcon,
} from 'generated/icons/MyIcons';

interface GrayCountSectionProps {
  name: string;
  count: number;
  price: number;
  product?: SelectedProductType;
  decreQuantityServerHandler?: () => void;
  increQuantityServerHandler?: () => void;
  decreQuantityStoreHandler?: (
    selectedProduct: SelectedProductType,
  ) => () => void;
  increQuantityStoreHandler?: (
    selectedProduct: SelectedProductType,
  ) => () => void;
}

function GrayCountSection({
  name,
  count,
  price,
  product,
  decreQuantityServerHandler,
  increQuantityServerHandler,
  decreQuantityStoreHandler,
  increQuantityStoreHandler,
}: GrayCountSectionProps) {
  const decreQuantityHandler = () => {
    if (decreQuantityServerHandler) decreQuantityServerHandler();
    else if (decreQuantityStoreHandler && product) decreQuantityStoreHandler(product)();
  };
  const increQuantityHandler = () => {
    if (increQuantityServerHandler) increQuantityServerHandler();
    else if (increQuantityStoreHandler && product) increQuantityStoreHandler(product)();
  }

  return (
    <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
      <Text textStyle="sm_wn_cg600">{name}</Text>
      <Flex mt=".3rem">
        <Flex bg="white" border="1px solid #EAECF0" borderRadius="5px" h="25px">
          <Button
            variant="transparentButton"
            w="1.5rem"
            h="1.5rem"
            onClick={() => { decreQuantityHandler() }}
          >
            <MinusCartButtonIcon boxSize="25px" />
          </Button>
          <Text
            w="25px"
            textAlign="center"
            textStyle="sm"
            lineHeight="25px"
            borderLeft="1px solid #EAECF0"
            borderRight="1px solid #EAECF0"
          >
            {count}
          </Text>
          <Button
            variant="transparentButton"
            w="1.5rem"
            h="1.5rem"
            onClick={() => { increQuantityHandler() }}
          >
            <PlusCartButtonIcon boxSize="25px" />
          </Button>
        </Flex>
        <Spacer />
        <Text textStyle="sm_wb_cg600">{count * price}원</Text>
      </Flex>
    </Box>
  );
}
export default GrayCountSection;
