import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

import {theme} from '~/theme';

interface Styles {
  children: ViewStyle;
  container: ViewStyle;
  content: ViewStyle;
}

export const listItemStyles = StyleSheet.create<Styles>({
  children: {
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    borderBottomColor: theme.colors.monochromes.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingVertical: theme.spacing.small,
  },
  content: {
    flex: 3,
    paddingHorizontal: theme.spacing.small,
  },
});
