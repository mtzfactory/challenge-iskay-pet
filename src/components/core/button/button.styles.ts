import {StyleSheet} from 'react-native';
import type {ViewStyle, ColorValue} from 'react-native';

import {theme} from '~/theme';

import type {ButtonVariants} from './button.variant';

interface Styles {
  button: ViewStyle;
  content: ViewStyle;
  icon: ViewStyle;
}

export const buttonStyles = StyleSheet.create<Styles>({
  button: {
    alignItems: 'center',
    borderRadius: theme.spacing.large,
    height: 40,
    justifyContent: 'center',
    maxHeight: 40,
    paddingHorizontal: theme.spacing.large,
  },
  content: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  icon: {marginRight: theme.spacing.small},
});

export const DEFAULT_ICON_COLOR: Record<ButtonVariants, ColorValue> = {
  default: theme.colors.monochromes.darkGray,
  ghost: theme.colors.monochromes.darkGray,
};
export const DEFAULT_ICON_SIZE = 20;
