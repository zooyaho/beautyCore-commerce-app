import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { Address } from 'react-daum-postcode';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { LAYOUT } from '@constants/layout';
import { getLocalStorage } from '@utils/localStorage/helper';

import OrderProductItem from './_fragments/OrderProductItem';
import SearchAddressModal from './_fragments/SearchAddressModal';
import { FormDataType } from './_hooks/useFormValidate';

import { CardPayIcon } from 'generated/icons/MyIcons';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}
interface localOrderListType {
  productId: number;
  name: string;
  photo: string;
  capacity: number;
  price: number;
  count: number;
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
  const [checkedOrderInfo, setCheckedOrderInfo] = useState(false);
  const [orderList, setOrderList] = useState<localOrderListType[]>();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: orderIsOpen,
    onOpen: orderOnOpen,
    onClose: orderOnClose,
  } = useDisclosure();

  useEffect(() => {
    const localData = getLocalStorage<localOrderListType[]>('order', []);
    if (localData.length) {
      setOrderList(getLocalStorage<localOrderListType[]>('order', []));
    } else {
      router.back();
    }
  }, [orderList?.length, router]);

  const totalPrice = useMemo(
    () => orderList?.reduce((prev, cur) => prev + cur.price * cur.count, 0),
    [orderList],
  );
  const sameOrderInfoHandler = () => {
    setCheckedOrderInfo((checked) => !checked);
    const { username, phone, address, addressDetail } = getValues();
    if (!checkedOrderInfo) {
      setValue('orderUsername', username);
      setValue('orderPhone', phone);
      setValue('orderAddress', address);
      setValue('orderAddressDetail', addressDetail);
    }
  };

  const searchCompleteHandler = (data: Address, type: string) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    if (type === 'ordererInfo') {
      setValue('address', fullAddress);
      setValue('zonecode', data.zonecode); // 우편번호
    } else if (type === 'shippingInfo') {
      setValue('orderAddress', fullAddress);
      setValue('orderZonecode', data.zonecode); // 우편번호
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
          {orderList && (
            <>
              {orderList.map((v) => {
                return (
                  <React.Fragment key={v.productId}>
                    <OrderProductItem productId={v.productId} count={v.count} />
                    <Divider />
                  </React.Fragment>
                );
              })}
            </>
          )}
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
                  placeholder="01012341234"
                />
              </FormHelper>
              <FormHelper
                mb="3.125rem"
                label="주소"
                errorText={errors.address?.message}
              >
                <Flex gap=".7rem" mb=".7rem">
                  <Input
                    borderRadius="100px"
                    w="50%"
                    size="md"
                    borderColor="black"
                    {...register('zonecode')}
                    autoComplete="off"
                    placeholder="우편번호"
                    onClick={onOpen}
                    disabled={getValues('zonecode') ? true : false}
                  />
                  <Button
                    variant="primaryButton"
                    w="30%"
                    h="40px"
                    borderRadius="5px"
                    onClick={onOpen}
                  >
                    <Text as="span" fontSize="12px">
                      우편번호 검색
                    </Text>
                  </Button>
                  <SearchAddressModal
                    type="ordererInfo"
                    onClose={onClose}
                    isOpen={isOpen}
                    searchCompleteHandler={searchCompleteHandler}
                  />
                </Flex>
                <Input
                  borderRadius="100px"
                  mb=".7rem"
                  size="md"
                  borderColor="black"
                  {...register('address')}
                  autoComplete="off"
                  placeholder="주소"
                  onClick={onOpen}
                  disabled={getValues('address') ? true : false}
                />
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('addressDetail')}
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
                  placeholder="01012341234"
                />
              </FormHelper>
              <FormHelper
                mb="3.125rem"
                label="주소"
                errorText={errors.orderAddress?.message}
              >
                <Flex gap=".7rem" mb=".7rem">
                  <Input
                    w="50%"
                    borderRadius="100px"
                    size="md"
                    borderColor="black"
                    {...register('orderZonecode')}
                    autoComplete="off"
                    placeholder="우편번호"
                    onClick={onOpen}
                    disabled={getValues('orderZonecode') ? true : false}
                  />
                  <Button
                    variant="primaryButton"
                    w="30%"
                    h="40px"
                    borderRadius="5px"
                    onClick={orderOnOpen}
                  >
                    <Text as="span" fontSize="12px">
                      우편번호 검색
                    </Text>
                  </Button>
                  <SearchAddressModal
                    type="shippingInfo"
                    onClose={orderOnClose}
                    isOpen={orderIsOpen}
                    searchCompleteHandler={searchCompleteHandler}
                  />
                </Flex>
                <Input
                  borderRadius="100px"
                  mb=".7rem"
                  size="md"
                  borderColor="black"
                  {...register('orderAddress')}
                  autoComplete="off"
                  placeholder="주소"
                  onClick={orderOnOpen}
                  disabled={getValues('orderAddress') ? true : false}
                />
                <Input
                  borderRadius="100px"
                  size="md"
                  borderColor="black"
                  {...register('orderAddressDetail')}
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
              <Text>{totalPrice} 원</Text>
            </Flex>
            <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
              <Text>총 배송비</Text>
              <Spacer />
              <Text>{totalPrice && totalPrice > 30000 ? 0 : 3000} 원</Text>
            </Flex>
            <Divider />
            <Flex my="1.3rem">
              <Text>결제금액</Text>
              <Spacer />
              <Text textStyle="sm_wb_cp">
                {totalPrice && totalPrice > 30000
                  ? totalPrice
                  : totalPrice && 3000 + totalPrice}{' '}
                원
              </Text>
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
