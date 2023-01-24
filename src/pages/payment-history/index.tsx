import Head from 'next/head';

import PaymentHistoryPage from '@components/PaymentHistoryPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function PaymentHistory() {
  return (
    <>
      <Head>
        <title>Beauty Core | payment-history</title>
      </Head>
      <CardLayout content={<CommonLayout content={<PaymentHistoryPage />} />} />
    </>
  );
}

export default PaymentHistory;
