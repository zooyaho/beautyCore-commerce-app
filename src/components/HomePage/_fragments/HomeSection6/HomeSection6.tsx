import React, { useState } from 'react';

import { Box, Button, ChakraProps, Flex, Text } from '@chakra-ui/react';

import { ProductReview, ProductTag } from '@apis/product/ProductAPi.type';

import ReviewCarousel from '@components/HomePage/_fragments/HomeSection6/_fragments/Carousel/ReviewCarousel';
import TabCarousel from '@components/HomePage/_fragments/HomeSection6/_fragments/Carousel/TabCarousel';
import { ChatbotIcon } from '@components/common/@Icons/MyIcons';

interface HomeSection6Props extends ChakraProps {
  productTagData: ProductTag[];
}

function HomeSection6({ productTagData }: HomeSection6Props) {
  const [selectedTagData, setSelectedTagData] = useState<ProductReview[]>(
    productTagData
      .map((tag) => tag.reviewList)
      .filter((_a, i, arr) => arr[i].length !== 0)
      .flat(),
  );
  const seletedHandler = (tabId: number) => {
    setSelectedTagData(() => {
      if (tabId === 0) {
        return productTagData
          .map((tag) => tag.reviewList)
          .filter((_a, i, arr) => arr[i].length !== 0)
          .flat();
      } else
        return productTagData.filter((tag) => tag.id === tabId)[0].reviewList;
    });
  };

  return (
    <>
      <Flex direction="column" alignItems="center">
        <Text mt="10vh" textAlign="center" textStyle="lg">
          BeautyCore를 <strong>직접 사용해본</strong>
          <br />
          고객님의 솔직한 리뷰
        </Text>
        <Box maxW="100%" pr="1.6rem" pl="1rem" my="2rem">
          <TabCarousel seletedHandler={seletedHandler} />
          <ReviewCarousel selectedTagData={selectedTagData} />
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
