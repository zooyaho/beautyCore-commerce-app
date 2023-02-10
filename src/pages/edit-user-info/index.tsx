import Head from 'next/head';

import EditUserInfoPage from '@components/EditUserInfoPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function EditUserInfo() {
  return (
    <>
      <Head>
        <title>Beauty Core | edit-user-info</title>
      </Head>
      <CardLayout content={<CommonLayout content={<EditUserInfoPage />} />} />
    </>
  );
}

export default EditUserInfo;
