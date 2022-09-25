import { ChakraProps } from '@chakra-ui/react';

export type CommonHeaderVariantType = 'dark' | 'light' | 'transparent';
export const HOME_HEADER_VARIANTS: Record<
  CommonHeaderVariantType,
  {
    header: ChakraProps;
    drawer: ChakraProps;
    pointColor: ChakraProps['color'];
    subColor: ChakraProps['color'];
  }
> = {
  dark: {
    header: { bg: 'black' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'primary.500',
  },
  light: {
    header: { bg: 'transparent' },
    drawer: { bg: 'white' },
    pointColor: 'black',
    subColor: 'secondary.500',
  },
  transparent: {
    header: { bg: 'transparent' },
    drawer: { bg: 'white' },
    pointColor: 'black',
    subColor: 'gray.400',
  },
};
