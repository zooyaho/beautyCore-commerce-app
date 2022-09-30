import React from 'react';

import WithdrawPageView from './WithdrawPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const ReviewWritePage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;

  const onSubmit = handleSubmit(({ reason, requireText, etcContent }) => {
    console.log(`submitted: ${reason},  ${requireText}, ${etcContent} `);
  });
  return <WithdrawPageView formData={formData} onSubmit={onSubmit} />;
};

export default ReviewWritePage;
