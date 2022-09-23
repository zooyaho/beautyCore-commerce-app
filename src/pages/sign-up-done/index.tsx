import Head from 'next/head';
import SignUpDonePage from '@components/SignUpDonePage';
import CardLayout from '@components/common/@Layout/CardLayout';

function SignUpDone() {
  return (
    <>
      <Head>
        <title>Beauty Core | sign-up-done</title>
      </Head>
      <CardLayout content={<SignUpDonePage />} />
    </>
  );
}

export default SignUpDone;
