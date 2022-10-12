import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import { ROUTES } from '@constants/routes';

function Home() {
  const router = useRouter();

  // For: Redirect To Starter Docs Page (나중에 꼭 지워주세요)
  // 자동 로그인 기능이 없으므로 바로 intro login page로 이동
  React.useEffect(() => {
    router.push(ROUTES.Login);
  }, [router]);

  return (
    <>
      {/* <Head> */}
      {/* ex) Your App Name | Page Name */}
      {/* <title>Beauty Core | login</title>
      </Head>
      <HomeLayout content={<HomePage />} /> */}
    </>
  );
}

export default Home;
