import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

import {theme} from '~/theme';

interface Styles {
  container: ViewStyle;
}

export const listItemStyles = StyleSheet.create<Styles>({
  container: {
    borderBottomColor: theme.colors.monochromes.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: theme.spacing.tiny,
  },
});
