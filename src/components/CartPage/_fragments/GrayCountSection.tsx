import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';

import {
  MinusCartButtonIcon,
  PlusCartButtonIcon,
} from 'generated/icons/MyIcons';

interface GrayCountSectionProps {
  name: string;
  count: number;
  price: number;
  decrementQuantityHandler: () => void;
  incrementeQuantityHandler: () => void;
}

function GrayCountSection({
  name,
  count,
  price,
  decrementQuantityHandler,
  incrementeQuantityHandler,
}: GrayCountSectionProps) {
  return (
    <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
      <Text textStyle="sm_wn_cg600">{name}</Text>
      <Flex mt=".3rem">
        <Flex bg="white" border="1px solid #EAECF0" borderRadius="5px" h="25px">
          <Button
            variant="transparentButton"
            w="1.5rem"
            h="1.5rem"
            onClick={decrementQuantityHandler}
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
            onClick={incrementeQuantityHandler}
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
