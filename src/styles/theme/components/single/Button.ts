import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { StyleObjectOrFn } from '@chakra-ui/styled-system';

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
  border?: string;
};

const accessibleColorMap: { [key: string]: AccessibleColor } = {
  kakao: {
    bg: 'kakao.500',
    color: '#1A1A1A',
    hoverBg: 'kakao.600',
    activeBg: 'kakao.700',
  },
  naver: {
    bg: 'naver.500',
    color: '#FFFFFF',
    hoverBg: 'naver.600',
    activeBg: 'naver.700',
  },
  facebook: {
    bg: 'facebook.500',
    color: '#FFFFFF',
    hoverBg: 'facebook.600',
    activeBg: 'facebook.700',
  },
  apple: {
    bg: 'apple.500',
    color: '#FFFFFF',
    hoverBg: 'apple.600',
    activeBg: 'apple.700',
  },
  google: {
    bg: 'google.500',
    color: '#808080',
    hoverBg: 'google.600',
    activeBg: 'google.700',
    border: '#DDDDDD',
  },
};

const variantSolid: StyleObjectOrFn = (props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    const bg = 'gray.100';
    return {
      bg,
      _hover: {
        bg: 'gray.100',
        _disabled: {
          bg,
        },
      },
      _active: { bg: 'gray.300' },
    };
  }

  const {
    bg = `${c}.500`,
    color = 'white',
    hoverBg = `${c}.300`,
    activeBg = `${c}.700`,
    border = `${c}.500`,
  } = accessibleColorMap[c] ?? {};

  const background = bg;
  const borderColor = border;

  return {
    bg: background,
    color: color,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: '100px',
    _hover: {
      bg: hoverBg,
      borderColor: hoverBg,
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: activeBg, borderColor: activeBg },
  };
};

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    w: 'fit-content',
    h: 'fit-content',
    _focus: { boxShadow: 'none' },
  },
  variants: {
    solid: variantSolid,
    whiteButton: {
      colorScheme: 'primary',
      bg: 'white',
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: 'primary.500',
      _active: { bg: 'primary.100', color: 'white' },
      _hover: { bg: 'primary.100', color: 'white' },
    },
    pageButton: {
      color: 'gray.400',
      bg: 'transparent',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '24px',
      _active: { borderColor: 'black', color: 'black' },
      _hover: { borderColor: 'black', color: 'black' },
    },
    transparentButton: {
      bg: 'transparent',
      minW: '1rem',
      padding: '0px',
      _active: { borderColor: 'black', color: 'black' },
      _hover: { borderColor: 'black', color: 'black' },
    },
  },
  sizes: {
    lg: {
      h: '50px',
      fontSize: ['18px', '16px', '17px'],
      px: '15px',
    },
    md: {
      h: '40px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    sm: {
      h: '30px',
      fontSize: ['12px', '10px', '12px'],
      px: '15px',
    },
    xs: {
      h: '26px',
      fontSize: ['12px', '10px', '12px'],
      px: '8px',
    },
  },
};
