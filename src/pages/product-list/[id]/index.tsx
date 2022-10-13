import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import ProductListDetailByIdPage from '@components/ProductListDetailByIdPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function ProductListDetailById() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Beauty Core | 상세 페이지</title>
      </Head>
      <CardLayout
        content={<CommonLayout content={<ProductListDetailByIdPage />} />}
      />
    </>
  );
}

export default ProductListDetailById;
