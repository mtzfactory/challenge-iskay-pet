import {StyleSheet} from 'react-native';
import type {TextStyle, ViewStyle} from 'react-native';

import {composeStyle, theme} from '~/theme';

interface Styles {
  button: ViewStyle;
  container: ViewStyle;
  description: ViewStyle;
  hero: ViewStyle;
  overlay: ViewStyle;
  service: ViewStyle;
  serviceText: TextStyle;
}

export const locationPermissionStyles = StyleSheet.create<Styles>({
  button: {
    marginBottom: theme.spacing.large,
    marginHorizontal: theme.spacing.large,
  },
  container: composeStyle(
    {...StyleSheet.absoluteFillObject, zIndex: 999},
    'backgroundColor',
  ),
  description: {flex: 3},
  hero: composeStyle({paddingTop: '20%'}, 'expand'),
  overlay: {backgroundColor: theme.colors.translucent()},
  service: composeStyle(
    {
      paddingBottom: theme.spacing.medium,
    },
    'justifyCenter',
    'row',
  ),
  serviceText: {marginLeft: theme.spacing.small},
});

export const locationIcon = {
  color: theme.colors.primary.green,
  size: 22,
};
