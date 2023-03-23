import type {TextStyle, ViewStyle} from 'react-native';
import {StyleSheet} from 'react-native';

import {theme} from '~/theme';

interface Styles {
  container: ViewStyle;
  label: TextStyle;
}

export const pillStyles = StyleSheet.create<Styles>({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.tiny,
  },
  label: theme.typography.label,
});
