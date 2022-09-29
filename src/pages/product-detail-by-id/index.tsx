import Head from 'next/head';

import ProductDetailByIdPage from '@components/ProductDetailByIdPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function ProductList() {
  return (
    <>
      <Head>
        <title>Beauty Core | product-list</title>
      </Head>
      <CardLayout
        content={<CommonLayout content={<ProductDetailByIdPage />} />}
      />
    </>
  );
}

export default ProductList;
