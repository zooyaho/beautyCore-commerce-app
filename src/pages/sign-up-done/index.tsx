import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import SignUpDonePage from '@components/SignUpDonePage';

function SignUpDone() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>인코스런 커머스트랙 | sign-up-done</title>
      </Head>
      <HomeLayout content={<SignUpDonePage />} />
    </>
  );
}

export default SignUpDone;
