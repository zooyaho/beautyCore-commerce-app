import Head from 'next/head';

import ReviewWritePage from '@components/ReviewWritePage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function ReviewWrite() {
  return (
    <>
      <Head>
        <title>Beauty Core | review-write</title>
      </Head>
      <CardLayout content={<CommonLayout content={<ReviewWritePage />} />} />
    </>
  );
}

export default ReviewWrite;
