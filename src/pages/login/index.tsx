import Head from 'next/head';

import LoginPage from '@components/LoginPage';
import CardLayout from '@components/common/@Layout/CardLayout';

function Login() {
  return (
    <>
      <Head>
        <title>Beauty Core | login</title>
      </Head>
      <CardLayout content={<LoginPage />} />
    </>
  );
}

export default Login;
