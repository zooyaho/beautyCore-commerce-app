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
      adress,
      adressDetail,
      orderUsername,
      orderPhone,
      orderAdress,
      orderAdressDetail,
      orderRequest,
    }) => {
      console.log(
        `submitted: ${username},  ${phone}, ${adress}, ${adressDetail}, ${orderUsername},  ${orderPhone}, ${orderAdress}, ${orderAdressDetail},${orderRequest}`,
      );
    },
  );
  return <OrderPageView formData={formData} onSubmit={onSubmit} />;
};

export default OrderPage;
