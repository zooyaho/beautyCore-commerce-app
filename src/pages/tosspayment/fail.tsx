import Head from 'next/head';

import FailPage from '@components/FailPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

const Fail = () => {
  return (
    <>
      <Head>
        <title>Beauty Core | tosspayment-fail</title>
      </Head>
      <CardLayout content={<CommonLayout content={<FailPage />} />} />
    </>
  );
};

export default Fail;
