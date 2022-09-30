import React from 'react';

import ReviewWritePageView from './ReviewWritePage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const ReviewWritePage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;

  const onSubmit = handleSubmit(({ starRating, content }) => {
    console.log(`submitted: ${starRating},  ${content} `);
  });
  return <ReviewWritePageView formData={formData} onSubmit={onSubmit} />;
};

export default ReviewWritePage;
