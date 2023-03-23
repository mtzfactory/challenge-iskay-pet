import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

import {theme} from '~/theme';

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
}

export const listItemStyles = StyleSheet.create<Styles>({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: theme.spacing.small,
    borderBottomColor: theme.colors.monochromes.gray,
  },
  content: {
    paddingHorizontal: theme.spacing.small,
  },
});
