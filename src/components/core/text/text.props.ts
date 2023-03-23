import type {TextProps as RNTextProps} from 'react-native';

import type {Typography} from '~/theme/foundations';

export const DEFAULT_TEXT_VARIANT: Typography = 'body';

export interface TextProps extends RNTextProps {
  bold?: boolean;
  center?: boolean;
  variant?: Typography;
}
