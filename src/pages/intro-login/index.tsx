import Head from 'next/head';
import CardLayout from '@components/common/@Layout/CardLayout';
import IntroLoginPage from '@components/IntroLoginPage';

function IntroLogin() {

  return (
    <>
      <Head>
        <title>Beauty Core | intro-login</title>
      </Head>
      <CardLayout content={<IntroLoginPage />} />
    </>

  );
}

export default IntroLogin;
