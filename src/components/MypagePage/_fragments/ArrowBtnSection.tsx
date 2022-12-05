import { useRouter } from 'next/router';

import { ChakraStyledOptions, Flex, Text } from '@chakra-ui/react';

import { RightArrowIcon } from 'generated/icons/MyIcons';

interface ArrowBtnSectionProps extends ChakraStyledOptions {
  text: string;
  modalOpen?: () => void;
  routerPath?: string;
}

function ArrowBtnSection({
  routerPath,
  text,
  modalOpen,
}: ArrowBtnSectionProps) {
  const route = useRouter();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
      cursor="pointer"
      onClick={() => {
        return routerPath ? route.push(routerPath) : modalOpen;
      }}
    >
      <Text>{text}</Text>
      <RightArrowIcon />
    </Flex>
  );
}

export default ArrowBtnSection;
