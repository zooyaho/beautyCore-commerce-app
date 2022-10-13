import React from 'react';

import { Box, Button, Flex, Text } from '@chakra-ui/react';

import ReviewCarousel from '@components/HomePage/_fragments/HomeSection6/_fragments/Carousel/ReviewCarousel';
import TabCarousel from '@components/HomePage/_fragments/HomeSection6/_fragments/Carousel/TabCarousel';

import { ChatbotIcon } from 'generated/icons/MyIcons';

// interface HomeSection6Props extends ChakraProps { }

function HomeSection6() {
  return (
    <>
      <Flex direction="column" alignItems="center">
        <Text mt="10vh" textAlign="center" textStyle="lg">
          인코스런을 <strong>직접 사용해본</strong>
          <br />
          고객님의 솔직한 리뷰
        </Text>
        <Box maxW="100%" pr="1.6rem" pl="1rem">
          {/* <TabCarousel /> */}
          <ReviewCarousel />
        </Box>
        <Button
          bg="transparent"
          w="fit-content"
          _hover={{ background: 'transparent' }}
          my="3vh"
          alignSelf="flex-end"
        >
          <ChatbotIcon />
        </Button>
      </Flex>
    </>
  );
}

export default HomeSection6;
