export const productImgSrc = (tagName: string) => {
  switch (tagName) {
    case '오일':
      return '/images/product_detail/오일-상세이미지.png';
    case '바스앤샴푸':
    case '올인원':
    case '클렌저':
      return '/images/product_detail/바스&샴푸-상세이미지.png';
    case '파우더로션':
    case '로션':
      return '/images/product_detail/파우더로션-상세이미지.png';
    case '크림':
    case '마일드':
      return '/images/product_detail/크림-상세이미지.png';
  }
};
