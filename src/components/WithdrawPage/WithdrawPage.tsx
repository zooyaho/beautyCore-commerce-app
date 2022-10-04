import React from 'react';

import WithdrawPageView from './WithdrawPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const ReviewWritePage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;

  const onSubmit = handleSubmit(({ reason, requireText, additionalReason }) => {
    console.log(`submitted: ${reason},  ${requireText}, ${additionalReason} `);
  });
  return <WithdrawPageView formData={formData} onSubmit={onSubmit} />;
};

export default ReviewWritePage;
