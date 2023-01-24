import React, { useEffect, useState } from 'react';

import { useDisclosure, useToast } from '@chakra-ui/react';

import { postPresigned_url, postReview } from '@apis/reveiw/ReviewListApi';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { UserType, getUser } from '@utils/localStorage/user';

import ReviewWritePageView from './ReviewWritePage.view';
import ReviewWriteDoneModal from './_fragments/ReviewWriteDoneModal';
import useFormValidate from './_hooks/useFormValidate';

interface setFormData {
  starRating?: number;
  content?: string;
}

const ReviewWritePage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const imgNameArr: string[] = [];
  const setFormData: setFormData = {};
  const toast = useToast();
  const [userStatus, setUserStatus] = useState<UserType | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setUserStatus(getUser());
    }
  }, []);

  const setImgName = (name?: string, index?: number) => {
    if (name) imgNameArr.push(name);
    if (index?.toString()) imgNameArr.splice(index, 1);
  };
  const onSubmit = handleSubmit(({ starRating, content }) => {
    setFormData[`starRating`] = starRating;
    setFormData[`content`] = content;
  });
  const onSubmitHandler = async (
    userId: number,
    productId: number,
    orderItemId: number,
  ) => {
    try {
      await onSubmit();
      const imgUrlArr = await Promise.all(
        imgNameArr.map((name) =>
          postPresigned_url({ name }).then(({ url }) => {
            if (url && url.indexOf('?') !== -1)
              return url.slice(0, url.indexOf('?'));
            else return url;
          }),
        ),
      );
      if (imgUrlArr.length > 0) {
        await postReview({
          userId,
          productId,
          orderItemId,
          rate: setFormData.starRating,
          content: setFormData.content,
          reviewimagePath: imgUrlArr as string[],
        });
      } else if (imgUrlArr.length === 0) {
        await postReview({
          userId,
          productId,
          orderItemId,
          rate: setFormData.starRating,
          content: setFormData.content,
        });
      }
      onOpen();
    } catch (err) {
      toast({
        status: 'error',
        description: '정상처리 되지 않았습니다.',
      });
    }
  };

  return (
    <>
      <ReviewWritePageView
        formData={formData}
        onSubmitHandler={onSubmitHandler}
        onSubmit={onSubmit}
        setImgNameHandler={setImgName}
      />
      <ReviewWriteDoneModal isOpen={isOpen} onClose={onClose} />
      {!userStatus && <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />}
    </>
  );
};

export default ReviewWritePage;
