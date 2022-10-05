import Head from 'next/head';

import IntroLoginPage from '@components/LoginPage';
import CardLayout from '@components/common/@Layout/CardLayout';

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
