import React from 'react';

import { Center, Flex } from '@chakra-ui/react';

interface CardLayoutProps {
  content?: JSX.Element;
}

const CardLayout = ({
  content,
}: CardLayoutProps) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Center w="375px" h="100vh">
          {content}
        </Center>
      </Flex>
    </>
  );
};

export default CardLayout;
