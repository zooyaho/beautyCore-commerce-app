import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Img,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Text,
} from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { LAYOUT } from '@constants/layout';

import { FormDataType } from './_hooks/useFormValidate';

import { CardPayIcon } from 'generated/icons/MyIcons';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const OrderPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
    getValues,
  },
  onSubmit,
  ...basisProps
}: FormPageProps) => {
  const [checkedOrderInfo, setCheckedOrderInfo] = React.useState(false);
  const sameOrderInfoHandler = () => {
    setCheckedOrderInfo((checked) => !checked);
    const { username, phone, adress, adressDetail } = getValues();
    if (!checkedOrderInfo) {
      setValue('orderUsername', username);
      setValue('orderPhone', phone);
      setValue('orderAdress', adress);
      setValue('orderAdressDetail', adressDetail);
    }
  };

  return (
    <>
      <Box pt={LAYOUT.HEADER.HEIGHT}>
        <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
          주문결제
        </Text>
        <Box>
          <Text as="h3" textStyle="sm_wb" mt="3.75rem" px="1rem">
            주문 상품
          </Text>
          <Divider />
          <Flex p=".7rem 1rem">
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
          </Flex>
          <Divider />
        </Box>
        {/* s: Form */}
        <Box as="form" onSubmit={onSubmit} {...basisProps}>
          <Container>
            {/* s: 주문자 정보 */}
            <Box mb="3.125rem">
              <Text as="h3" textStyle="sm_wb" mt="3.75rem">
                주문자 정보
              </Text>
              <FormHelper
                mt="2.5rem"
                mb="3.125rem"
                label="이름"
                errorText={errors.username?.message}
              >
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('username')}
                  autoComplete="off"
                  placeholder="홍길동"
                />
              </FormHelper>
              <FormHelper
                mb="3.125rem"
                label="핸드폰 번호"
                errorText={errors.phone?.message}
              >
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('phone')}
                  autoComplete="off"
                  placeholder="010-1234-1234"
                />
              </FormHelper>
              <FormHelper
                mb="3.125rem"
                label="주소"
                errorText={errors.adress?.message}
              >
                <Flex gap=".7rem" mb=".7rem">
                  <Input
                    borderRadius="100px"
                    size="md"
                    borderColor="black"
                    {...register('adress')}
                    autoComplete="off"
                    placeholder="주소"
                  />
                  <Button
                    variant="primaryButton"
                    w="40%"
                    h="40px"
                    textStyle="sm"
                    borderRadius="5px"
                  >
                    우편번호 검색
                  </Button>
                </Flex>
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('adressDetail')}
                  autoComplete="off"
                  placeholder="주소 상세"
                />
              </FormHelper>
            </Box>
            {/* e: 주문자 정보 */}
            <Divider />
            {/* s: 베송지 정보 */}
            <Box mb="3.125rem">
              <Flex justifyContent="space-between" mt="3.125rem">
                <Text as="h3" textStyle="sm_wb">
                  배송지 정보
                </Text>
                <Checkbox
                  onChange={sameOrderInfoHandler}
                  colorScheme="primary"
                  size="lg"
                  isChecked={checkedOrderInfo}
                >
                  <Text textStyle="sm_wn_cg600">주문자 정보와 동일</Text>
                </Checkbox>
              </Flex>

              <FormHelper
                mt="2.5rem"
                mb="3.125rem"
                label="이름"
                errorText={errors.orderUsername?.message}
              >
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('orderUsername')}
                  autoComplete="off"
                  placeholder="홍길동"
                />
              </FormHelper>
              <FormHelper
                mb="3.125rem"
                label="핸드폰 번호"
                errorText={errors.orderPhone?.message}
              >
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('orderPhone')}
                  autoComplete="off"
                  placeholder="010-1234-1234"
                />
              </FormHelper>
              <FormHelper
                mb="3.125rem"
                label="주소"
                errorText={errors.orderAdress?.message}
              >
                <Flex gap=".7rem" mb=".7rem">
                  <Input
                    borderRadius="100px"
                    size="md"
                    borderColor="black"
                    {...register('orderAdress')}
                    autoComplete="off"
                    placeholder="주소"
                  />
                  <Button
                    variant="primaryButton"
                    w="40%"
                    h="40px"
                    textStyle="sm"
                    borderRadius="5px"
                  >
                    우편번호 검색
                  </Button>
                </Flex>
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('orderAdressDetail')}
                  autoComplete="off"
                  placeholder="주소 상세"
                />
              </FormHelper>
              <FormHelper mb="3.125rem" label="배송요청사항">
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('orderRequest')}
                  autoComplete="off"
                />
              </FormHelper>
            </Box>
            {/* s: 베송지 정보 */}
            <Divider />
          </Container>

          {/* s: 결제 수단 */}
          <Text as="h3" textStyle="sm_wb" mt="2.5rem" mb=".7rem" px="1rem">
            결제수단
          </Text>
          <Divider />
          <Flex px="1rem">
            <Controller
              control={control}
              name="paymentMethod"
              render={({ field: { onChange } }) => (
                <FormHelper
                  my="1.8rem"
                  errorText={errors.paymentMethod?.message}
                >
                  <RadioGroup onChange={onChange}>
                    <Radio value="card" colorScheme="primary">
                      <Flex alignItems="center" ml=".7rem" gap=".7rem">
                        <CardPayIcon boxSize="50px" />
                        <Text>신용카드 결제</Text>
                      </Flex>
                    </Radio>
                  </RadioGroup>
                </FormHelper>
              )}
            />
          </Flex>
          <Divider />
          {/* e: 결제 수단 */}

          {/* s: 최종 결제 금액 */}
          <Container>
            <Text as="h3" textStyle="sm_wb" mt="2.5rem" mb=".7rem">
              최종 결제금액
            </Text>
            <Flex textColor="gray.600" mt="2.5rem">
              <Text>총 상품금액</Text>
              <Spacer />
              <Text>108,000 원</Text>
            </Flex>
            <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
              <Text>총 배송비</Text>
              <Spacer />
              <Text>0 원</Text>
            </Flex>
            <Divider />
            <Flex my="1.3rem">
              <Text>결제금액</Text>
              <Spacer />
              <Text textStyle="sm_wb_cp">108,000 원</Text>
            </Flex>
            <Divider />
            <Controller
              control={control}
              name="personalConsent"
              render={({ field: { onChange } }) => (
                <FormHelper errorText={errors.personalConsent?.message}>
                  <Checkbox
                    onChange={onChange}
                    colorScheme="primary"
                    size="lg"
                    my="1.25rem"
                  >
                    <Text as="span" textStyle="sm_wn_cg600" ml=".7rem">
                      개인정보 수집 이용 동의(필수)
                    </Text>
                  </Checkbox>
                </FormHelper>
              )}
            />
            {/* Submit Button */}
            <Button
              variant="primaryButton"
              size="lg"
              mt="1.25rem"
              mb="5rem"
              type="submit"
            >
              결제하기
            </Button>
          </Container>
          {/* e: 최종 결제 금액 */}
        </Box>
        {/* e: Form */}
      </Box>
    </>
  );
};

export default OrderPageView;
