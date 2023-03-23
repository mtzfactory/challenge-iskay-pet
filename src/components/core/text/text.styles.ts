import type {TextStyle} from 'react-native';
import {StyleSheet} from 'react-native';

import {theme} from '~/theme';

import {getFontStyle} from '~/theme/foundations';

interface Styles {
  bold: TextStyle;
  centered: TextStyle;
  default: TextStyle;
}

export const textStyles = StyleSheet.create<Styles>({
  bold: getFontStyle('bold'),
  centered: {
    textAlign: 'center',
  },
  default: {
    color: theme.colors.text,
  },
});
