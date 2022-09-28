import Head from 'next/head';

import OrderHistoryPage from '@components/OrderHistoryPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function OrderHistory() {
  return (
    <>
      <Head>
        <title>Beauty Core | order-history</title>
      </Head>
      <CardLayout content={<CommonLayout content={<OrderHistoryPage />} />} />
    </>
  );
}

export default OrderHistory;
