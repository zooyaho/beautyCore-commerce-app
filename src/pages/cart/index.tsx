import Head from 'next/head';

import CartPage from '@components/CartPage';
import CardLayout from '@components/common/@Layout/CardLayout';
import CommonLayout from '@components/common/@Layout/CommonLayout';

function Cart() {
  return (
    <>
      <Head>
        <title>Beauty Core | cart</title>
      </Head>
      <CardLayout content={<CommonLayout content={<CartPage />} />} />
    </>
  );
}

export default Cart;
