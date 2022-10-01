import React from 'react';

import { Box, Button, Container, Img } from '@chakra-ui/react';

import { DownArrowIcon, UpArrowIcon } from 'generated/icons/MyIcons';

function DetailSection() {
  const [isShowDetail, setIsShowDetail] = React.useState(false);
  const detailShowToggleHandler = () => setIsShowDetail((isShow) => !isShow);

  return <></>;
}

export default DetailSection;
