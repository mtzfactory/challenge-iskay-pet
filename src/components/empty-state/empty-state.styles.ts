import {StyleSheet} from 'react-native';
import type {TextStyle, ViewStyle} from 'react-native';
import {composeStyle, theme} from '~/theme';

interface Styles {
  container: ViewStyle;
  iconContainer: ViewStyle;
  text: TextStyle;
  textContainer: ViewStyle;
}

export const emptyStateStyles = StyleSheet.create<Styles>({
  container: composeStyle({marginTop: '-50%'}, 'center', 'expand'),
  iconContainer: {marginBottom: theme.spacing.medium},
  text: {
    color: theme.colors.primary.green,
  },
  textContainer: {
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.primary.blue,
    paddingBottom: theme.spacing.tiny,
    paddingHorizontal: theme.spacing.small,
  },
});
