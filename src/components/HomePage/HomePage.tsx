import React from 'react';

import { ChakraProps } from '@chakra-ui/react';

import { ProductTag } from '@apis/product/ProductAPi.type';

import ScrollToTop from '@components/common/ScrollToTop';

import HomeSection1 from './_fragments/HomeSection1';
import HomeSection2 from './_fragments/HomeSection2';
import HomeSection3 from './_fragments/HomeSection3';
import HomeSection4 from './_fragments/HomeSection4';
import HomeSection5 from './_fragments/HomeSection5';
import HomeSection6 from './_fragments/HomeSection6';
import HomeSection7 from './_fragments/HomeSection7';

interface HomePageProps extends ChakraProps {
  productTagData: ProductTag[];
}

function HomePage({ productTagData }: HomePageProps) {
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 productTagData={productTagData} />
      <HomeSection7 />
      <ScrollToTop />
    </>
  );
}

export default HomePage;
