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
  return (
    <Slider {...settings}>
      <Box mr=".7rem">
        <Button borderRadius="15px" px="1rem" h="30px">
          전체
        </Button>
      </Box>
      <Box mr=".7rem">
        <Button borderRadius="15px" px="1rem" h="30px">
          바스&amp;샴푸
        </Button>
      </Box>
      <Box mr=".7rem">
        <Button borderRadius="15px" px="1rem" h="30px">
          오일
        </Button>
      </Box>
      <Box mr=".7rem">
        <Button borderRadius="15px" px="1rem" h="30px">
          로션
        </Button>
      </Box>
      <Box mr=".7rem">
        <Button borderRadius="15px" px="1rem" h="30px">
          크림
        </Button>
      </Box>
      <Box mr=".7rem">
        <Button borderRadius="15px" px="1rem" h="30px">
          파우더 로션
        </Button>
      </Box>
    </Slider>
  );
}
export default TabCarousel;

/* interface TabCarouselProps {
  content: string[];
}

function TabCarousel({ content }: TabCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };
  return <Slider>{content.map((text)=>())}</Slider>;
}
export default TabCarousel;*/
