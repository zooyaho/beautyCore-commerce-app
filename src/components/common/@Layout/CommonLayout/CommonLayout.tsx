import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import CommonFooter from './_fragments/CommonFooter';
import CommonHeader from './_fragments/CommonHeader';

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const CommonLayout = ({
  //
  header = <CommonHeader />,
  footer = <CommonFooter />,
  containerProps,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      <Container pt={LAYOUT.HEADER.HEIGHT} {...containerProps}>
        {content}
      </Container>
      {footer}
    </>
  );
};

export default CommonLayout;
