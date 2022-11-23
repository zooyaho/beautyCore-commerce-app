import Head from 'next/head';

import MyProductReviewPage from '@components/MyProductReviewPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';
import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { getUser } from '@utils/localStorage/user';

function MyProductReview() {
  const userInfo = getUser();
  if (!userInfo || (userInfo && userInfo.auth_status === AUTH_STATUS.LOGOUT))
    return <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />;

  return (
    <>
      <Head>
        <title>Beauty Core | my-product-review</title>
      </Head>
      <CardLayout
        content={<CommonLayout content={<MyProductReviewPage />} />}
      />
    </>
  );
}

export default MyProductReview;
