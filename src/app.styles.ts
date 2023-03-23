import {StyleSheet, TextStyle} from 'react-native';
import type {ViewStyle} from 'react-native';

import {composeStyle} from '~/theme/common-styles';
import {theme} from '~/theme/theme';

interface Styles {
  container: ViewStyle;
  hero: TextStyle;
}

export const appStyles = StyleSheet.create<Styles>({
  container: composeStyle({}, 'backgroundColor', 'expand'),
  hero: {color: theme.colors.text},
});
