import {StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';
import {composeStyle, theme} from '~/theme';

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  button: ViewStyle;
  iconContainer: ViewStyle;
}

export const emptyStateStyles = StyleSheet.create<Styles>({
  container: composeStyle(
    {justifyContent: 'space-evenly'},
    'expand',
    'alignCenter',
  ),
  content: composeStyle({}, 'alignCenter'),
  button: {marginBottom: -theme.spacing.medium},
  iconContainer: {marginBottom: theme.spacing.medium},
});
