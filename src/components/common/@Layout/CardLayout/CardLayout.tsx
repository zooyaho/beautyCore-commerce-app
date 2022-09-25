import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

interface CardLayoutProps {
  content?: JSX.Element;
}

const CardLayout = ({ content }: CardLayoutProps) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Box w="375px" h="100vh">
          {content}
        </Box>
      </Flex>
    </>
  );
};

export default CardLayout;
