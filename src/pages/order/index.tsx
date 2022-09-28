import Head from 'next/head';

import OrderPage from '@components/OrderPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function Order() {
  return (
    <>
      <Head>
        <title>Beauty Core | order</title>
      </Head>
      <CardLayout content={<CommonLayout content={<OrderPage />} />} />
    </>
  );
}

export default Order;
