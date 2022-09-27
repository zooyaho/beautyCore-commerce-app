import Slider from 'react-slick';

import { Box, Button } from '@chakra-ui/react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function TabCarousel() {
  const settings = {
    infinite: false,
    swipeToSlide: true,
    centerMode: false,
    variableWidth: true,
  };
  const tabTexts = ['전체', '바스&샴푸', '오일', '로션', '크림', '파우더 로션'];
  return (
    <Slider {...settings}>
      {tabTexts.map((text) => (
        <Box mr=".7rem" key={text}>
          <Button borderRadius="15px" px="1rem" h="30px">
            {text}
          </Button>
        </Box>
      ))}
    </Slider>
  );
}
export default TabCarousel;
