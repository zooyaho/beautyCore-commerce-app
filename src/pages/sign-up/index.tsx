import Head from 'next/head';
import SignUpPage from '@components/SignUpPage';
import CardLayout from '@components/common/@Layout/CardLayout';

function SignUp() {
  return (
    <>
      <Head>
        <title>Beauty Core | sign-up</title>
      </Head>
      <CardLayout content={<SignUpPage />} />
    </>
  );
}

export default SignUp;
