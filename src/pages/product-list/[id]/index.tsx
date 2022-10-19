import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ProductDetail } from '@apis/product/ProductAPi.type';
import { getProduct } from '@apis/product/ProductApi';

import ProductListDetailByIdPage from '@components/ProductListDetailByIdPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

interface ProductListDetailById {
  productListData: ProductDetail;
}

function ProductListDetailById({ productListData }: ProductListDetailById) {
  return (
    <>
      <Head>
        <title>Beauty Core | 상세 페이지</title>
      </Head>
      <CardLayout
        content={
          <CommonLayout
            content={
              <ProductListDetailByIdPage productListData={productListData} />
            }
          />
        }
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const productListData = await getProduct(Number(id));
  return {
    props: { productListData },
  };
};

export default ProductListDetailById;
