import {ImageStyle, StyleSheet, TextStyle} from 'react-native';
import type {ViewStyle} from 'react-native';

import {theme} from '~/theme/theme';

interface Styles {
  backgroundColor: ViewStyle;
  center: ViewStyle;
  expand: ViewStyle;
}

type StylesKeys = keyof Styles;

const commonStyles: Styles = {
  backgroundColor: {backgroundColor: theme.colors.backgroundColor},
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  expand: {flex: 1},
};

export function composeStyle<S extends ImageStyle | TextStyle | ViewStyle>(
  style: S,
  ...modifiers: StylesKeys[]
) {
  const styles = modifiers.map(modifier => commonStyles[modifier]);
  return StyleSheet.flatten([style, ...styles]);
}
