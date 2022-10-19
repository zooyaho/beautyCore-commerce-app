import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ProductTag } from '@apis/product/ProductAPi.type';
import { getProductTag } from '@apis/product/ProductApi';
import useAppStore from '@features/useAppStore';

import HomePage from '@components/HomePage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

interface HomeProps {
  productTagData: ProductTag[];
}

function Home({ productTagData }: HomeProps) {
  const router = useRouter();
  const isLogin = useAppStore((store) => store.USER.isLogin);
  console.log(isLogin);
  useEffect(() => {
    if (!isLogin) router.push('/login');
  }, [isLogin, router]);

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
  // const userData = await getUserMe();
  // if (!userData) {
  //   ctx.res.setHeader('Location', '/login');
  //   ctx.res.statusCode = 302;
  //   ctx.res.end();
  // }
  return {
    props: { productTagData },
  };
};

export default Home;
