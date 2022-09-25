import Head from 'next/head';

import HomePage from '@components/HomePage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function Home() {
  return (
    <>
      <Head>
        <title>Beauty Core | home</title>
      </Head>
      <CardLayout content={<CommonLayout content={<HomePage />} />} />
    </>
  );
}

export default Home;
