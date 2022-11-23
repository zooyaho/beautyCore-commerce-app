import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getProductList } from '@apis/product/ProductApi';

import ProductListPage from '@components/ProductListPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

import { ProductList as ProductListType } from '../../apis/product/ProductAPi.type';

interface ProductListProps {
  productListData: ProductListType;
}

function ProductList({ productListData }: ProductListProps) {
  return (
    <>
      <Head>
        <title>Beauty Core | product-list</title>
      </Head>
      <CardLayout
        content={
          <CommonLayout
            content={<ProductListPage productListData={productListData} />}
          />
        }
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const productListData = await getProductList();

  return {
    props: { productListData },
  };
};

export default ProductList;
