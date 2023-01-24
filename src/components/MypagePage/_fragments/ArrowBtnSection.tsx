import { useRouter } from 'next/router';

import { ChakraStyledOptions, Flex, Text } from '@chakra-ui/react';

import { RightArrowIcon } from '@components/common/@Icons/MyIcons';

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

  const activeHandler = () => {
    if (routerPath) route.push(routerPath);
    else if (modalOpen) modalOpen();
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
      cursor="pointer"
      onClick={activeHandler}
    >
      <Text>{text}</Text>
      <RightArrowIcon />
    </Flex>
  );
}

export default ArrowBtnSection;
