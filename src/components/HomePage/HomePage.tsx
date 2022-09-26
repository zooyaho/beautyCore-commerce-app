import React from 'react';

import HomeSection1 from './_fragments/HomeSection1';
import HomeSection2 from './_fragments/HomeSection2';
import HomeSection3 from './_fragments/HomeSection3';
import HomeSection4 from './_fragments/HomeSection4';
import HomeSection5 from './_fragments/HomeSection5';
import HomeSection6 from './_fragments/HomeSection6';
import HomeSection7 from './_fragments/HomeSection7';

// interface HomePageProps extends ChakraProps { }

function HomePage() {
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      {/* <HomeSection3 /> */}
      {/* <HomeSection4 /> */}
      {/* <HomeSection5 /> */}
      {/* <HomeSection6 /> */}
      {/* <HomeSection7 /> */}
      {/* <Box as="main">
      <Img
        src="images/mainBg.png"
        alt="home image"
        position="absolute"
        top="0"
        left="0"
        right="0"
      />
    </Box> */}
    </>
  );
}

export default HomePage;
