import Head from 'next/head';

import WithdrawPage from '@components/WithdrawPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function Withdraw() {
  return (
    <>
      <Head>
        <title>Beauty Core | withdraw</title>
      </Head>
      <CardLayout content={<CommonLayout content={<WithdrawPage />} />} />
    </>
  );
}

export default Withdraw;
