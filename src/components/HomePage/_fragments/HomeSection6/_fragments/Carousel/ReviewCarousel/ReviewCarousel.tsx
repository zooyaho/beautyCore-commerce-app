import Slider from 'react-slick';

import { Box, ChakraProps, Divider, Flex, Image, Text } from '@chakra-ui/react';

import { ProductTagReview } from '@apis/product/ProductAPi.type';

import PrintRatingStars from '@components/common/PrintRatingStars/PrintRatingStars';

import { formatDate } from '@utils/format';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ReviewCarouselProps extends ChakraProps {
  selectedTagData: ProductTagReview[];
}

function ReviewCarousel({ selectedTagData: reviewList }: ReviewCarouselProps) {
  const settings = {
    infinite: false,
    swipeToSlide: true,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {reviewList &&
        reviewList.map((review, i) => (
          <Box p="4rem .5rem 1rem" key={review.created}>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              p="1.3rem"
              borderRadius="20px"
              minH="350px"
              boxShadow="lg"
              py="1.5rem"
            >
              <Box as="header" mb="1.5rem">
                <Flex justifyContent="space-between">
                  <Text textStyle="ss_wb">{review.nickname}</Text>
                  <PrintRatingStars
                    rate={review.rate}
                    alignItems="center"
                    starBoxSize="12px"
                  />
                </Flex>
                <Text textStyle="ss_wn_cg700" mb="1rem">
                  {formatDate(review.created)}
                </Text>
                <Divider />
              </Box>
              <Text mb="1.3rem">{review.content}</Text>
              <Box>
                {!review.reviewimageSet && <Divider />}
                <Flex mt="1.3rem" gap=".6rem">
                  {review.reviewimageSet.map((img, i) => (
                    <Image
                      key={img.reviewId + i}
                      src={img.url}
                      borderRadius="10px"
                      w="80px"
                      h="80px"
                      alt="화장품 이미지"
                    />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
    </Slider>
  );
}
export default ReviewCarousel;
