import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Img,
  Progress,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ProductReview } from '@apis/product/ProductAPi.type';

import { RightArrowIcon } from '@components/common/@Icons/MyIcons';
import PrintRatingStars from '@components/common/PrintRatingStars/PrintRatingStars';

import { countProgress, formatDate } from '@utils/format';

interface IReviewSectionProps {
  reviewList: ProductReview[];
  avgRate: number;
  focusTarget: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function ReviewSection({
  reviewList,
  avgRate,
  focusTarget,
}: IReviewSectionProps) {
  const [ratingfilter, setRatingfilter] = useState('최신순');
  const [photofilter, setPhotofilter] = useState('전체보기');

  const ratings = reviewList.map((review) => review.rate);
  const countNums = countProgress(ratings);

  const [printReviewList, setPrintReviewList] = useState<ProductReview[]>(); // 5개 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageNum, setTotalPageNum] = useState(
    Math.ceil(reviewList.length / 5),
  );

  const ratingFillteredReview = useCallback(
    (filteredReview: ProductReview[]) => {
      if (ratingfilter === '최신순') {
        return filteredReview.sort(
          (a, b) => +new Date(b.created) - +new Date(a.created),
        );
      } else if (ratingfilter === '평점높은순') {
        return filteredReview.sort((a, b) => b.rate - a.rate);
      } else if (ratingfilter === '평점낮은순') {
        return filteredReview.sort((a, b) => a.rate - b.rate);
      }
      return filteredReview;
    },
    [ratingfilter],
  );

  const photoFillteredReview = useCallback(
    (filteredReview: ProductReview[]) => {
      if (photofilter === '포토리뷰') {
        if (currentPage > 1) setCurrentPage(1);
        return ratingFillteredReview(
          filteredReview.filter((review) => review.reviewimageSet.length > 0),
        );
      } else if (photofilter === '전체보기') {
        return ratingFillteredReview(reviewList);
      }
      return filteredReview;
    },
    [photofilter, ratingFillteredReview, reviewList, currentPage],
  );

  useEffect(() => {
    // 초기값
    let filteredReview: ProductReview[] = [];
    if (ratingfilter === '최신순' && photofilter === '전체보기') {
      filteredReview = reviewList.sort(
        (a, b) => +new Date(b.created) - +new Date(a.created),
      );
    } else if (photofilter === '포토리뷰') {
      console.log('포토리뷰');
      filteredReview = reviewList;
    }
    filteredReview = photoFillteredReview(filteredReview);

    setTotalPageNum(Math.ceil(filteredReview.length / 5));
    const pageArray = Array(Math.ceil(filteredReview.length / 5)).fill(0);
    pageArray.forEach((_, pIndex) => {
      pageArray[pIndex] = filteredReview.filter((_, rIndex) => {
        return rIndex < (pIndex + 1) * 5 && rIndex >= pIndex * 5;
      });
    });
    setPrintReviewList(pageArray[currentPage - 1]);
  }, [
    currentPage,
    photoFillteredReview,
    photofilter,
    ratingfilter,
    reviewList,
  ]);

  const printPageGroup: Array<number[]> = useMemo(() => {
    const pageGroup = Array(totalPageNum)
      .fill(0)
      .map((_, i) => i + 1);
    const temp = [];
    for (let i = 0; i < totalPageNum / 5; i++) {
      temp.push(pageGroup.splice(0, 5));
    }
    return temp;
  }, [totalPageNum]);

  const [selectedAllPage, setSelectedAllPage] = useState<number>(0);

  useEffect(() => {
    if (currentPage === 1 && reviewList.length !== 0)
      setCurrentPage(printPageGroup[selectedAllPage][0]);
  }, [currentPage, printPageGroup, reviewList.length, selectedAllPage]);

  return (
    <Flex
      flexDirection="column"
      bg="white"
      pt="2rem"
      px="1rem"
      ref={(el) => (focusTarget.current[2] = el)}
    >
      {reviewList.length === 0 ? (
        <Center pt="2rem" pb="3rem">
          <Text as="span" fontWeight="bold">
            리뷰&nbsp;
            <Box as="span" color="gray.700">
              {reviewList.length}
            </Box>
            건
          </Text>
        </Center>
      ) : (
        <>
          <Flex direction="column" w="100%" my="1rem">
            <HStack justify="space-between">
              <Text as="span" fontWeight="bold">
                리뷰&nbsp;
                <Box as="span" color="primary.500">
                  {reviewList.length}
                </Box>
                건
              </Text>
              <HStack w="193px">
                <Select
                  size="xs"
                  bg="gray.200"
                  rounded="5px"
                  fontWeight="bold"
                  onChange={(e) => setRatingfilter(e.target.value)}
                >
                  <option value="최신순">최신순</option>
                  <option value="평점높은순">평점 높은순</option>
                  <option value="평점낮은순">평점 낮은순</option>
                </Select>
                <Select
                  size="xs"
                  bg="gray.200"
                  rounded="5px"
                  fontWeight="bold"
                  onChange={(e) => setPhotofilter(e.target.value)}
                >
                  <option value="전체보기">전체보기</option>
                  <option value="포토리뷰">포토리뷰</option>
                </Select>
              </HStack>
            </HStack>
          </Flex>
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
                    <Text textStyle="ss_wn_cg600">{5 - i}점</Text>
                  </VStack>
                );
              })}
            </HStack>
          </Flex>
          {/* s: 리뷰 리스트 */}
          <Box pt="1.5rem">
            {printReviewList &&
              printReviewList.map((review) => {
                return (
                  <Box key={review.id} mb="1.5rem">
                    <Flex justifyContent="space-between">
                      <Text textStyle="ss_wb">{review.nickname}</Text>
                      <PrintRatingStars
                        rate={review.rate}
                        starBoxSize="12px"
                        alignItems="center"
                      />
                    </Flex>
                    <Text textStyle="ss_wn_cg700">
                      {formatDate(review.created)}
                    </Text>
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
                        {review.reviewimageSet.map((img, i) => {
                          return (
                            <Img
                              key={i}
                              src={`${img.url}`}
                              alt="리뷰 이미지"
                              w="80px"
                              h="80px"
                              borderRadius="5px"
                            />
                          );
                        })}
                      </Flex>
                    </Flex>
                    <Divider />
                  </Box>
                );
              })}
          </Box>
          {/* e: 리뷰 리스트 */}
          {/* s: 페이지 버튼 */}
          <Flex justifyContent="center" h="5vh" mb="1rem">
            {selectedAllPage !== 0 && (
              <Button
                colorScheme="transparent"
                border="none"
                w="fit-content"
                onClick={() => {
                  setSelectedAllPage((cur) => cur - 1);
                }}
              >
                <RightArrowIcon boxSize="10px" transform="scaleX(-1)" />
              </Button>
            )}
            <Flex
              justifyContent="center"
              alignItems="center"
              alignSelf="center"
              my="3rem"
              w="60%"
            >
              {/* pageButton */}
              {printPageGroup[selectedAllPage].map((pageNum, i) => {
                return (
                  <Button
                    variant={
                      currentPage === pageNum
                        ? 'activePageButton'
                        : 'pageButton'
                    }
                    key={i}
                    p="0"
                    onClick={() => {
                      setCurrentPage(pageNum);
                    }}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </Flex>
            {selectedAllPage !== printPageGroup.length - 1 && (
              <Button
                colorScheme="transparent"
                border="none"
                w="fit-content"
                onClick={() => {
                  setSelectedAllPage((cur) => cur + 1);
                }}
              >
                <RightArrowIcon boxSize="10px" />
              </Button>
            )}
          </Flex>
          {/* e: 페이지 버튼 */}
        </>
      )}
    </Flex>
  );
}

export default ReviewSection;
