import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ProductTag } from '@apis/product/ProductAPi.type';
import { getProductTag } from '@apis/product/ProductApi';

import HomePage from '@components/HomePage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

interface HomeProps {
  productTagData: ProductTag[];
}

function Home({ productTagData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Beauty Core | home</title>
      </Head>
      <CardLayout
        content={
          <CommonLayout
            content={<HomePage productTagData={productTagData} />}
          />
        }
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const productTagData = await getProductTag();
  return {
    props: { productTagData },
  };
};

export default Home;
