import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

import {composeStyle, theme} from '~/theme';

interface Styles {
  content: ViewStyle;
  overlay: ViewStyle;
}

export const modalSheetStyles = StyleSheet.create<Styles>({
  content: {
    paddingBottom: theme.spacing.medium,
  },
  overlay: composeStyle(
    {
      backgroundColor: theme.colors.translucent(0.35),
    },
    'absoluteFill',
  ),
});
