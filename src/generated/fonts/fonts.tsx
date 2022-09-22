import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'NotoSansKR';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url('/fonts/NotoSansKR-Black.otf') format('otf');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/NotoSansKR-Bold.otf') format('otf');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('/fonts/NotoSansKR-Light.otf') format('otf');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/NotoSansKR-Medium.otf') format('otf');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('/fonts/NotoSansKR-Regular.otf') format('otf');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'NotoSansKR';
      font-style: normal;
      font-weight: 100;
      font-display: swap;
      src: url('/fonts/NotoSansKR-Thin.otf') format('otf');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    
  `}
  />
);

export default Fonts;
