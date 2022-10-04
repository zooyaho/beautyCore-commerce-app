import React from 'react';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Img,
  Progress,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

import PrintRatingStars from '@components/common/PrintRatingStars/PrintRatingStars';

import { countProgress, formatDate } from '@utils/format';

import { RightArrowIcon } from 'generated/icons/MyIcons';

interface Review {
  id: string; // 나중에 number로
  user: string; // 나중에 number로
  rate: number;
  content: string;
  reviewimageSet: Array<{
    reviewId?: number;
    url?: string;
  }>;
  created: string;
}

interface IReviewSectionProps {
  reviewList: Array<Review>;
  avgRate: number;
  focusTarget: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function ReviewSection({
  reviewList,
  avgRate,
  focusTarget,
}: IReviewSectionProps) {
  const ratings = reviewList.map((review) => review.rate);
  const countNums = countProgress(ratings);

  return (
    <Container bg="white" pt="2rem" ref={(el) => (focusTarget.current[2] = el)}>
      <Flex direction="column" w="100%" my="1rem">
        <HStack justify="space-between">
          <Text as="span" fontWeight="bold">
            리뷰
            <Box as="span" color="commerse.500">
              {reviewList.length}
            </Box>
            건
          </Text>
          <HStack w="193px">
            <Select
              placeholder="최신순"
              size="xs"
              bg="gray.200"
              rounded="5px"
              fontWeight="bold"
            >
              <option value="option2">평점 높은순</option>
              <option value="option3">평점 높은순</option>
            </Select>
            <Select
              placeholder="전체보기"
              size="xs"
              bg="gray.200"
              rounded="5px"
              fontWeight="bold"
            >
              <option value="option2">포토리뷰</option>
            </Select>
          </HStack>
        </HStack>
        <Flex justify="space-between" align="center" mt="3rem">
          <HStack>
            <Text
              w="40px"
              h="20px"
              bg="primary.500"
              rounded="15px"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              {avgRate}
            </Text>
            <Flex>
              {
                <PrintRatingStars
                  rate={avgRate}
                  alignItems="center"
                  starBoxSize="16px"
                />
              }
            </Flex>
          </HStack>
          <Divider orientation="vertical" h="80px" />
          <HStack spacing="-6">
            {countNums.reverse().map((num, i) => {
              return (
                <VStack key={i}>
                  <Flex>
                    <Progress
                      bg="#fff6d5"
                      colorScheme="primary"
                      pos="relative"
                      value={(num / reviewList.length) * 100}
                      w="3rem"
                      h=".7rem"
                      mb=".7rem"
                      roundedRight="3rem"
                      transform="rotateZ(-90deg)"
                    />
                  </Flex>
                  <Divider transform={'translateY(1px)'} />
                  <Text color="gray.600" textStyle="sm">
                    {5 - i}점
                  </Text>
                </VStack>
              );
            })}
          </HStack>
        </Flex>
      </Flex>
      {/* s: 리뷰 리스트 */}
      <Box pt="1.5rem">
        {reviewList.map((review) => (
          <Box key={review.id} mb="1.5rem" textStyle="sm">
            <Flex justifyContent="space-between">
              <Text fontWeight="bold">{review.user}</Text>
              <PrintRatingStars
                rate={review.rate}
                starBoxSize="12px"
                alignItems="center"
              />
            </Flex>
            <Text textColor="gray.700">{formatDate(review.created)}</Text>
            <Flex flexDirection="column" mt="1rem" mb="1.5rem">
              <Text
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                textStyle="md"
              >
                {review.content}
              </Text>
              <Flex mt="1.3rem" gap=".6rem">
                {review.reviewimageSet.map((img) => {
                  console.log(img);
                  return (
                    <Img
                      key={img.reviewId}
                      src={`${img.url}`}
                      alt="리뷰 이미지"
                    />
                  );
                })}
              </Flex>
            </Flex>
            <Divider />
          </Box>
        ))}
      </Box>
      {/* e: 리뷰 리스트 */}
      <Flex justifyContent="center" alignItems="center" my="3rem">
        <Button variant="pageButton">1</Button>
        <Button variant="pageButton">2</Button>
        <Button variant="pageButton">3</Button>
        <Button variant="pageButton">4</Button>
        <Button variant="pageButton">5</Button>
        <Button colorScheme="transparent" ml="1rem" border="none">
          <RightArrowIcon boxSize="10px" />
        </Button>
      </Flex>
    </Container>
  );
}

export default ReviewSection;
