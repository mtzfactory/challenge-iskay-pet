import {StyleSheet, TextStyle} from 'react-native';
import type {ViewStyle} from 'react-native';

import {composeStyle} from '~/theme/common-styles';
import {theme} from '~/theme/theme';

interface Styles {
  container: ViewStyle;
  hero: TextStyle;
  map: ViewStyle;
  storeList: ViewStyle;
}

export const appStyles = StyleSheet.create<Styles>({
  container: composeStyle({flex: 1}, 'backgroundColor', 'expand'),
  hero: {marginVertical: theme.spacing.medium},
  map: {flex: 2},
  storeList: {flex: 1},
});
