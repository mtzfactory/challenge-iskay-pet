import {StyleSheet, ViewStyle} from 'react-native';
import type {TextStyle} from 'react-native';

import {composeStyle, theme} from '~/theme';

interface Styles {
  header: TextStyle;
  indent: ViewStyle;
  item: ViewStyle;
  itemDetail: ViewStyle;
  itemLabel: TextStyle;
  task: ViewStyle;
  taskAssign: TextStyle;
  taskAssigned: TextStyle;
  taskDescription: TextStyle;
}

export const storeDetailStyles = StyleSheet.create<Styles>({
  header: {marginBottom: theme.spacing.medium},
  indent: {marginLeft: theme.spacing.large},
  item: composeStyle(
    {
      alignItems: 'center',
      marginBottom: theme.spacing.small,
    },
    'row',
  ),
  itemDetail: composeStyle(
    {
      marginBottom: theme.spacing.small,
    },
    'row',
  ),
  itemLabel: {marginLeft: theme.spacing.small},
  task: composeStyle({}, 'expand', 'row', 'alignCenter'),
  taskAssign: composeStyle({}, 'expand'),
  taskAssigned: {color: theme.colors.primary.blue},
  taskDescription: {flex: 2},
});
