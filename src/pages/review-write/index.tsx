import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import ReviewWritePage from '@components/ReviewWritePage';

function ReviewWrite() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>인코스런 커머스트랙 | review-write</title>
      </Head>
      <HomeLayout content={<ReviewWritePage />} />
    </>
  );
}

export default ReviewWrite;
