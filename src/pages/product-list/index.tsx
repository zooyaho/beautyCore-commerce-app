import Head from 'next/head';

import ProductListPage from '@components/ProductListPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function ProductList() {
  return (
    <>
      <Head>
        <title>Beauty Core | product-list</title>
      </Head>
      <CardLayout content={<CommonLayout content={<ProductListPage />} />} />
    </>
  );
}

export default ProductList;
