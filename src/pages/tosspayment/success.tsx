import Head from 'next/head';

import SuccessPage from '@components/SuccessPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

const Success = () => {
  return (
    <>
      <Head>
        <title>Beauty Core | tosspayment-success</title>
      </Head>
      <CardLayout content={<CommonLayout content={<SuccessPage />} />} />
    </>
  );
};

export default Success;
