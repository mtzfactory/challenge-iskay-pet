import type {TextStyle, ViewStyle} from 'react-native';

import {theme} from '~/theme';

export type ButtonVariants = 'default' | 'ghost';

export const buttonVariants: Record<ButtonVariants, ViewStyle> = {
  default: {
    backgroundColor: theme.colors.accent,
  },
  ghost: {
    backgroundColor: theme.colors.transparent,
    borderColor: theme.colors.accent,
    borderWidth: 2,
  },
};

export const buttonPressedVariants: Record<ButtonVariants, ViewStyle> = {
  default: {
    backgroundColor: theme.colors.primary.ocean,
  },
  ghost: {
    backgroundColor: theme.colors.monochromes.gray,
  },
};

export const labelVariants: Record<ButtonVariants, TextStyle> = {
  default: {
    color: theme.colors.monochromes.darkGray,
  },
  ghost: {
    color: theme.colors.monochromes.darkGray,
  },
};
