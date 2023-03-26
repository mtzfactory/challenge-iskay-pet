import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

import {theme} from '~/theme';

interface Styles {
  content: ViewStyle;
}

export const modalSheetStyles = StyleSheet.create<Styles>({
  content: {
    paddingBottom: theme.spacing.medium,
  },
});
