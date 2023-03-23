import type {TextStyle, ViewStyle} from 'react-native';

import {theme} from '~/theme';

export type PillVariants = 'default' | 'highlight' | 'alert';

export const viewVariants: Record<PillVariants, ViewStyle> = {
  alert: {
    backgroundColor: theme.colors.primary.red,
  },
  default: {
    backgroundColor: theme.colors.primary.blue,
  },
  highlight: {
    backgroundColor: theme.colors.primary.green,
  },
};

export const textVariants: Record<PillVariants, TextStyle> = {
  alert: {
    color: theme.colors.monochromes.darkWhite,
  },
  default: {
    color: theme.colors.monochromes.darkWhite,
  },
  highlight: {
    color: theme.colors.text,
  },
};
