import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import { AUTH_STATUS } from '@constants/authStatus';
import { ROUTES } from '@constants/routes';
import { setUser } from '@utils/localStorage/user';

function Home() {
  const router = useRouter();

  // For: Redirect To Starter Docs Page (나중에 꼭 지워주세요)
  // 자동 로그인 기능이 없으므로 바로 intro login page로 이동
  React.useEffect(() => {
    setUser({ user_id: undefined, auth_status: AUTH_STATUS.LOGOUT });
    router.push(ROUTES.LOGIN);
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
