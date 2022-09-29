import Head from 'next/head';
import MyProductReviewPage from '@components/MyProductReviewPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function MyProductReview() {
  return (
    <>
      <Head>
        <title>Beauty Core | my-product-review</title>
      </Head>
      <CardLayout content={<CommonLayout content={<MyProductReviewPage />} />} />
    </>
  );
}

export default MyProductReview;
