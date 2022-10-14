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
  VisuallyHidden,
} from '@chakra-ui/react';

import PrintRatingStars from '@components/common/PrintRatingStars/PrintRatingStars';

import { countProgress, formatDate } from '@utils/format';

import { Review } from '../../../apis/reveiw/ReviewListApi.type';

import { RightArrowIcon } from 'generated/icons/MyIcons';

interface IReviewSectionProps {
  reviewList: Review[];
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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>();
  // const [pageGroup, setPageGroup] = useState<Review[][]>([]);
  // const [pageButton, setPageButton] = useState<JSX.Element[]>([]);
  const [printReview, setPrintReview] = useState<Review[]>([]);

  // const addData = useCallback((pageArray: Array<Review[]>, index: number) => {
  const addData = useCallback(() => {
    // setPageGroup((cur) => [...cur, pageArray[index]]);
    const pageArray = Array(Math.ceil(reviewList.length / 5)).fill(0);
    pageArray.forEach((_, pIndex) => {
      pageArray[pIndex] = reviewList.filter((_, rIndex) => {
        return rIndex < (pIndex + 1) * 5 && rIndex >= pIndex * 5;
      });
      // setPageGroup((cur) => [...cur, pageArray[pIndex]]);
    });
    return pageArray[currentPage - 1];
  }, [reviewList, currentPage]);

  /* const addPageBtn = useCallback(() => {
    if (totalPage)
      Array(totalPage)
        .fill(0)
        .map((_, i) => {
          setPageButton((cur) => {
            return [
              ...cur,
              <Button
                variant="pageButton"
                key={i}
                p="0"
                onClick={() => {
                  setCurrentPage(i + 1);
                }}
              >
                {i + 1}
              </Button>,
            ];
          });
        });
  }, [totalPage]); */

  useEffect(() => {
    setTotalPage(Math.ceil(reviewList.length / 5));
    // addPageBtn();
    // setPrintReview(() => addData());
  }, [reviewList.length]);
  // console.log('printReview: ', printReview);
  console.log('렌더링');

  /*  useMemo(() => {
     const pageArray = Array(Math.ceil(reviewList.length / 5)).fill(0);
     pageArray.forEach((_, pIndex) => {
       pageArray[pIndex] = reviewList.filter((_, rIndex) => {
         return rIndex < (pIndex + 1) * 5 && rIndex >= pIndex * 5;
       });
       // addData(pageArray, pIndex);
     });
     setPrintReview(pageArray[currentPage - 1]);
   }, [addData, reviewList, currentPage]); */

  // console.log(currentPage - 1, pageGroup[currentPage - 1]);

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
            {
              // pageGroup.indexOf(pageGroup[currentPage]) === currentPage &&
              addData().map((review: Review, i: number) => (
                <Box key={review.id + i} mb="1.5rem">
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
              ))
            }
          </Box>
          {/* e: 리뷰 리스트 */}
          {/* s: 페이지 버튼 */}
          <Flex justifyContent="center" h="5vh" mb="1rem">
            {!(currentPage <= 1) && (
              <Button colorScheme="transparent" border="none" w="fit-content">
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
              {totalPage &&
                Array(totalPage)
                  .fill(0)
                  .map((_, i) => (
                    <Button
                      variant={
                        currentPage === i + 1
                          ? 'activePageButton'
                          : 'pageButton'
                      }
                      key={i}
                      p="0"
                      onClick={() => {
                        console.log('rederring');
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </Button>
                  ))}
            </Flex>
            {!(currentPage === totalPage) && (
              <Button colorScheme="transparent" border="none" w="fit-content">
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
