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
  const tab = {
    전체: 0,
    크림: 18,
    핸드크림: 15,
    '파우더 로션': 17,
    '바스&샴푸': 16,
  };
  type TabKeyType = keyof typeof tab;
  const [selectedTab, setSelectedTab] = useState<TabKeyType>('전체');

  return (
    <Slider {...settings}>
      {Object.keys(tab).map((text, index) => (
        <Box pr=".5rem" key={index}>
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
              seletedHandler(tab[text as TabKeyType]);
              setSelectedTab(text as TabKeyType);
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
