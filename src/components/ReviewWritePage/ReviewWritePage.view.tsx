import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Img,
  Spacer,
  Text,
  Textarea,
} from '@chakra-ui/react';

import {
  useUploadFileToS3Mutation,
  useUploadFilesToS3Mutation,
} from '@apis/S3FileUploader/S3FileUploaderApi.mutation';

import FormHelper from '@components/common/FormHelper';
import RatingStars from '@components/common/InputRatingStars';

import { LAYOUT } from '@constants/layout';
import { bytesToMB, fileToBase64, isBase64Img, isOverSize } from '@utils/file';

import { FormDataType } from './_hooks/useFormValidate';

import { PlusIcon, PlusItemIcon } from 'generated/icons/MyIcons';

// interface RiewviewWritePageViewProps extends ChakraProps { }

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

function RiewviewWritePageView({
  formData: {
    register,
    control,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: FormPageProps) {
  const [files, setFiles] = React.useState<File[]>([]); // 파일 상태
  const [currentFile, setCurrentFile] = React.useState<File | null>(null);
  const [currentFileBase64, setCurrentFileBase64] = React.useState<
    string | ArrayBuffer | null
  >();
  const [printImgsSrc, setPrintImgsSrc] = React.useState<string[]>([]);

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setCurrentFile(file); // 최근 파일 저장
    setFiles((cur) => [...cur, file]); // 파일 목록에 저장
  };

  // For: Convert Current File To Base64
  React.useEffect(() => {
    async function setter() {
      if (!currentFile) return;
      setCurrentFileBase64(await fileToBase64(currentFile));
    }
    setter();
  }, [currentFile]);

  React.useEffect(() => {
    if (!currentFileBase64) return;
    if (printImgsSrc.length >= 3) return;
    if (typeof currentFileBase64 === 'string')
      setPrintImgsSrc((src) => [...src, currentFileBase64]);
  }, [currentFileBase64]);

  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
        리뷰작성
      </Text>
      <Box mt="5rem">
        <Divider />
        <Text py="1rem" pl="1rem" textStyle="ss_wb">
          [2021 - 04 - 01]
        </Text>
        <Divider />
      </Box>
      <Flex p=".7rem 1rem" borderBottom="10px solid #F9F9F9">
        <Img
          mr=".7rem"
          w="3.75rem"
          h="3.75rem"
          src="/images/dummyImg/상품이미지.png"
        />
        <Box>
          <Text textStyle="ss_wb">바스 &amp; 샴푸</Text>
          <Text textStyle="ss_wn_cg600" textColor="gray.600">
            바스 &amp; 샴푸 | 120ml
          </Text>
          <Text textStyle="ss_wb_cp">27,000원&nbsp;/&nbsp;1개</Text>
        </Box>
        <Spacer />
      </Flex>
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
          사진첨부&nbsp;<Text as="span">({printImgsSrc.length}/3)</Text>
        </Text>
        <Flex gap="10px" pt=".7rem">
          {/* 사진 추가 버튼 */}
          {printImgsSrc.length === 3 ? null : (
            <Button
              as="label"
              variant="transparentButton"
              pt=".7rem"
              mr=".6rem"
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
          {printImgsSrc.reverse().map((src, i) => {
            return (
              <Flex key={i} pos="relative" pt="10px" pr="10px">
                <Image src={src} alt="상품 이미지" w="5.3rem" h="5.3rem" />
                <Button
                  variant="transparentButton"
                  pos="absolute"
                  top="0"
                  right="0"
                  onClick={() => {
                    setPrintImgsSrc(() =>
                      printImgsSrc.filter((printSrc, printI) => i !== printI),
                    );
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
          결제하기
        </Button>
      </Container>
    </Box>
  );
}

export default RiewviewWritePageView;
