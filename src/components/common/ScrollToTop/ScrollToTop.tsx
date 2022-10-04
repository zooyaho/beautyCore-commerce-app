import { useEffect, useState } from 'react';

import { Button } from '@chakra-ui/react';

import { UpwardArrowIcon } from 'generated/icons/MyIcons';

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          bg="transparent"
          _hover={{ background: 'tranparent', opacity: '.7' }}
          sx={{
            'svg:hover path': { stroke: '#EBEBEB', fill: 'black' },
          }}
          pos="fixed"
          w="fit-content"
          bottom="2rem"
          right="1rem"
          zIndex="999"
          onClick={goToTopHandler}
        >
          <UpwardArrowIcon />
        </Button>
      )}
    </>
  );
}
export default ScrollToTop;
