import { useRouter } from 'next/router';
import React, { ChangeEventHandler, useState } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Center,
  CircularProgress,
  Container,
  Divider,
  Flex,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { useGetOrderStatus } from '@apis/order/OrderApi.query';
import { useGetUserMe } from '@apis/user/userApi.query';

import OrderSection from '@components/PaymentHistoryPage/_fragments/OrderSection';
import FormHelper from '@components/common/FormHelper';
import RatingStars from '@components/common/InputRatingStars';

import { LAYOUT } from '@constants/layout';
import { bytesToMB, fileToBase64, isBase64Img, isOverSize } from '@utils/file';
import { formatDateDash } from '@utils/format';

import { FormDataType } from './_hooks/useFormValidate';

import { PlusIcon, PlusItemIcon } from 'generated/icons/MyIcons';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
  setImgNameHandler: (name?: string, index?: number) => void;
}

function RiewviewWritePageView({
  formData: {
    register,
    control,
    formState: { errors },
  },
  onSubmit,
  setImgNameHandler,
  ...basisProps
}: FormPageProps) {
  const router = useRouter();
  const { productId, orderId } = router.query;
  const { data: userData } = useGetUserMe();
  const { data: orderList, isLoading } = useGetOrderStatus(
    userData?.id as number,
    userData,
  );
  const order = orderList?.results.filter(
    (order) =>
      order.productId === Number(productId) && order.orderId === orderId,
  );
  const [fileBase64List, setFileBase64List] = useState<string[]>([]);

  async function addFileBase64List(file: File) {
    if (!file) return;
    const fileToBase64Data = await fileToBase64(file);
    if (typeof fileToBase64Data === 'string')
      setFileBase64List((cur) => [...cur, fileToBase64Data]);
  }

  const onChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (!file || file.size / (1024 * 1024) > 2) return;
    addFileBase64List(file); // base64 변경 후 저장
    if (fileBase64List.length < 3) setImgNameHandler(file.name);
  };

  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
        리뷰작성
      </Text>
      {isLoading || !order ? (
        <Center h="100vh">
          <CircularProgress isIndeterminate color="primary.500" />
        </Center>
      ) : (
        <Box mt="4rem">
          <Divider />
          <Text py="1rem" pl="1rem" textStyle="ss_wb">
            {order[0].created ? `[ ${formatDateDash(order[0].created)} ]` : ''}
          </Text>
          <Divider />
          {order.map((order) => (
            <OrderSection
              key={order.productId}
              productId={order.productId}
              count={order.count}
            />
          ))}
        </Box>
      )}
      <Box h="10px" bg="gray.100" />
      <Container as="form" onSubmit={onSubmit} {...basisProps}>
        <Text mt="1.3rem">별점</Text>
        <Controller
          control={control}
          name="starRating"
          render={({ field: { value, onChange } }) => {
            return (
              <FormHelper mb="1.3rem" errorText={errors.starRating?.message}>
                <Center h="10vh">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <RatingStars
                      rate={item}
                      key={item}
                      value={value}
                      onChange={onChange}
                    />
                  ))}
                </Center>
              </FormHelper>
            );
          }}
        />
        <Divider />
        <Text my="1.3rem">내용</Text>
        <Controller
          control={control}
          name="content"
          render={({ field: { value, onChange } }) => {
            return (
              <FormHelper
                mb="1.3rem"
                textStyle="md"
                errorText={errors.content?.message}
              >
                <Center>
                  <Textarea
                    value={value}
                    {...register('content')}
                    placeholder="내용을 작성하세요."
                    onChange={onChange}
                    border="none"
                    size="md"
                    h="30vh"
                    _valid={{ borderColor: 'red.400' }}
                  />
                </Center>
              </FormHelper>
            );
          }}
        />
        <Divider />
        <Text my="1.3rem">
          사진첨부&nbsp;<Text as="span">({fileBase64List.length}/3)</Text>
        </Text>
        <Flex gap="10px" pt=".7rem">
          {/* 사진 추가 버튼 */}
          {fileBase64List.length === 3 ? null : (
            <Button
              as="label"
              variant="transparentButton"
              pt=".7rem"
              mr=".6rem"
              cursor="pointer"
            >
              <Center p="2rem" border="1px dashed #CBCED6" borderRadius="5px">
                <input
                  style={{ display: 'none' }}
                  type="file"
                  onChange={onChangeFile}
                />
                <PlusIcon color="gray.400" boxSize="18px" />
              </Center>
            </Button>
          )}
          {/* s: 이미지 */}
          {fileBase64List &&
            fileBase64List.reverse().map((src, i) => {
              return (
                <Flex key={i} pos="relative" pt="10px" pr="10px">
                  <Image src={src} alt="상품 이미지" w="5.3rem" h="5.3rem" />
                  <Button
                    variant="transparentButton"
                    pos="absolute"
                    top="0"
                    right="0"
                    onClick={() => {
                      setFileBase64List(() =>
                        fileBase64List.filter(
                          (_printSrc, printI) => i !== printI,
                        ),
                      );
                      setImgNameHandler(undefined, i);
                    }}
                  >
                    <PlusItemIcon color="gray.400" boxSize="20px" />
                  </Button>
                </Flex>
              );
            })}
          {/* e: 이미지 */}
        </Flex>
        {/* Submit Button */}
        <Button
          variant="primaryButton"
          size="lg"
          mt="6rem"
          mb="2rem"
          type="submit"
        >
          작성하기
        </Button>
      </Container>
    </Box>
  );
}

export default RiewviewWritePageView;
