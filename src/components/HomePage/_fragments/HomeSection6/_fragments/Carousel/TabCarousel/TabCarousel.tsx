import { useState } from 'react';
import Slider from 'react-slick';

import { Box, Button } from '@chakra-ui/react';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface TabCarouselProps {
  seletedHandler: (tabId: number) => void;
}

function TabCarousel({ seletedHandler }: TabCarouselProps) {
  const settings = {
    infinite: false,
    swipeToSlide: true,
    centerMode: false,
    variableWidth: true,
  };
  const tab = ['전체', '크림', '오일', '파우더 로션', '바스&샴푸'];
  const [selectedTab, setSelectedTab] = useState<string>('전체');

  return (
    <Slider {...settings}>
      {tab.map((text, index) => (
        <Box pr=".5rem" key={text}>
          <Button
            borderRadius="15px"
            px="1rem"
            h="30px"
            p="1rem"
            bgColor={text === selectedTab ? 'primary.500' : ''}
            color={text === selectedTab ? 'white' : ''}
            _hover={
              text === selectedTab
                ? { bgColor: 'primary.500', color: 'white' }
                : undefined
            }
            onClick={() => {
              seletedHandler(index);
              setSelectedTab(text);
            }}
          >
            {text}
          </Button>
        </Box>
      ))}
    </Slider>
  );
}
export default TabCarousel;
