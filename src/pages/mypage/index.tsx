import Head from 'next/head';

import MypagePage from '@components/MypagePage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function Mypage() {
  return (
    <>
      <Head>
        <title>Beauty Core | mypage</title>
      </Head>
      <CardLayout content={<CommonLayout content={<MypagePage />} />} />
    </>
  );
}

export default Mypage;
