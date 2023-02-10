import Head from 'next/head';

import CallbackPage from '@components/SocialLoginPage/CallbackPage';
import CardLayout from '@components/common/@Layout/CardLayout';

function Callback() {
  return (
    <>
      <Head>
        <title>Beauty Core | socail login</title>
      </Head>
      <CardLayout content={<CallbackPage />} />
    </>
  );
}

export default Callback;
