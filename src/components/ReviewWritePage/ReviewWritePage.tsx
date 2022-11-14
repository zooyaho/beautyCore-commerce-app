import React from 'react';

import { useDisclosure } from '@chakra-ui/react';

import ReviewWritePageView from './ReviewWritePage.view';
import ReviewWriteDoneModal from './_fragments/ReviewWriteDoneModal';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const ReviewWritePage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = handleSubmit(({ starRating, content }) => {
    console.log(`submitted: ${starRating},  ${content} `);
    onOpen();
  });
  return (
    <>
      <ReviewWritePageView formData={formData} onSubmit={onSubmit} />
      <ReviewWriteDoneModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ReviewWritePage;
