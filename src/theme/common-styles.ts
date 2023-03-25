import {StyleSheet} from 'react-native';
import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

import {theme} from '~/theme/theme';

interface Styles {
  absoluteFill: ViewStyle;
  alignCenter: ViewStyle;
  backgroundColor: ViewStyle;
  center: ViewStyle;
  expand: ViewStyle;
  justifyCenter: ViewStyle;
  row: ViewStyle;
}

type StylesKeys = keyof Styles;

const absoluteFill = Object.assign({} as ViewStyle, StyleSheet.absoluteFill);

const commonStyles: Styles = {
  absoluteFill,
  alignCenter: {alignItems: 'center'},
  backgroundColor: {backgroundColor: theme.colors.backgroundColor},
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  expand: {flex: 1},
  justifyCenter: {justifyContent: 'center'},
  row: {flexDirection: 'row'},
};

export function composeStyle<S extends ImageStyle | TextStyle | ViewStyle>(
  style: S,
  ...modifiers: StylesKeys[]
) {
  const styles = modifiers.map(modifier => commonStyles[modifier]);
  return StyleSheet.flatten([style, ...styles]);
}
