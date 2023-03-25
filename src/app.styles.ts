import {StyleSheet, TextStyle} from 'react-native';
import type {ViewStyle} from 'react-native';

import {composeStyle} from '~/theme/common-styles';
import {theme} from '~/theme/theme';

interface Styles {
  container: ViewStyle;
  hero: TextStyle;
  indent: ViewStyle;
  map: ViewStyle;
  modal: ViewStyle;
  storeList: ViewStyle;
  storeDetail: ViewStyle;
  storeSubDetail: ViewStyle;
  storeHeader: TextStyle;
  storeLabel: TextStyle;
  task: ViewStyle;
  taskAssign: TextStyle;
  taskAssigned: TextStyle;
  taskDescription: TextStyle;
}

export const appStyles = StyleSheet.create<Styles>({
  container: composeStyle({}, 'backgroundColor', 'expand'),
  hero: {marginVertical: theme.spacing.medium},
  indent: {marginLeft: theme.spacing.large},
  map: {flex: 2},
  modal: {paddingHorizontal: theme.spacing.medium},
  storeList: composeStyle({}, 'expand'),
  storeDetail: composeStyle(
    {
      alignItems: 'center',
      marginBottom: theme.spacing.small,
    },
    'row',
  ),
  storeSubDetail: composeStyle(
    {
      marginBottom: theme.spacing.small,
    },
    'row',
  ),
  storeHeader: {marginBottom: theme.spacing.medium},
  storeLabel: {marginLeft: theme.spacing.small},
  task: composeStyle({}, 'expand', 'row', 'alignCenter'),
  taskAssign: composeStyle({}, 'expand'),
  taskAssigned: {color: theme.colors.primary.blue},
  taskDescription: {flex: 2},
});
