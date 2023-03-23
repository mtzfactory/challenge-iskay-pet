import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';
import {theme} from '~/theme';

interface Styles {
  container: ViewStyle;
}

export const storeListStyles = StyleSheet.create<Styles>({
  container: {
    marginHorizontal: theme.spacing.tiny,
  },
});

export const emptyStateIcon = {
  color: theme.colors.primary.green,
  size: 68,
};
