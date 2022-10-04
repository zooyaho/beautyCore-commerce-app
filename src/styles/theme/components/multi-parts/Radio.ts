import { ChakraMultiPartComponentType } from '../type';

const parts = ['container', 'control', 'label', 'colorScheme'] as const;

export const Radio: ChakraMultiPartComponentType<typeof parts> = {
  parts,
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {},
};
