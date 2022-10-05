import React from 'react';

import OrderPageView from './OrderPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const OrderPage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  // console.log('formData: ', formData);

  const onSubmit = handleSubmit(
    ({
      username,
      phone,
      address,
      addressDetail,
      orderUsername,
      orderPhone,
      orderAddress,
      orderAddressDetail,
      orderRequest,
    }) => {
      console.log(
        `submitted: ${username},  ${phone}, ${address}, ${addressDetail}, ${orderUsername},  ${orderPhone}, ${orderAddress}, ${orderAddressDetail},${orderRequest}`,
      );
    },
  );
  return <OrderPageView formData={formData} onSubmit={onSubmit} />;
};

export default OrderPage;
