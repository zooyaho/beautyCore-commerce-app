import Head from 'next/head';
import HomePage from '@components/HomePage';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function Home() {
  return (
    <>
      <Head>
        <title>Beauty Core | home</title>
      </Head>
      <CommonLayout content={<HomePage />} />
    </>
  );
}

export default Home;
