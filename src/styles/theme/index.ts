import { extendTheme } from '@chakra-ui/react';

// Foundational style overrides
import foundations from './foundations';
// Global style overrides
import styles from './styles';
// TextStyles
import textStyles from './textStyles';

const overrides = {
  ...foundations,
  styles,
  textStyles,
};

export default extendTheme(overrides);
