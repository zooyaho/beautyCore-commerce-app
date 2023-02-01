import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { mode } from '@theme/foundations/colors';

import withAppProvider from 'contexts/app/app.provider';

function MyApp({ Component, pageProps }: any) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
    >
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default withAppProvider(MyApp);
