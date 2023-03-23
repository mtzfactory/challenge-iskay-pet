import type {TextStyle} from 'react-native';
import {Platform} from 'react-native';

export type FontWeight = TextStyle['fontWeight'];

/**
 * The available font styles
 *
 */
const fontStyle = (fontName: string, fontWeight: FontWeight = 'normal') => {
  if (Platform.OS === 'ios') {
    return {fontFamily: fontName, fontWeight};
  }

  switch (fontWeight) {
    case 'normal':
      return {fontFamily: `${fontName}-Regular`, fontWeight: undefined};
    case 'bold':
      return {fontFamily: `${fontName}-Bold`, fontWeight: undefined};
    case '100':
      return {fontFamily: `${fontName}-Thin`, fontWeight: undefined};
    case '200':
      return {fontFamily: `${fontName}-ExtraLight`, fontWeight: undefined};
    case '300':
      return {fontFamily: `${fontName}-Light`, fontWeight: undefined};
    case '400':
      return {fontFamily: `${fontName}-Regular`, fontWeight: undefined};
    case '500':
      return {fontFamily: `${fontName}-Medium`, fontWeight: undefined};
    case '600':
      return {fontFamily: `${fontName}-SemiBold`, fontWeight: undefined};
    case '700':
      return {fontFamily: `${fontName}-Bold`, fontWeight: undefined};
    case '800':
      return {fontFamily: `${fontName}-ExtraBold`, fontWeight: undefined};
    case '900':
      return {fontFamily: `${fontName}-Black`, fontWeight: undefined};
    default: {
      return fontName
        ? {fontFamily: `${fontName}-Regular`, fontWeight: undefined}
        : {};
    }
  }
};

/**
 * The available font sizes
 */
const fontSize = {
  s: 10,
  m: 14,
  l: 18,
  xl: 22,
} as const;

/**
 * The available line heights
 */
const lineHeight = {
  m: 14,
  l: 18,
  xl: 22,
  xxl: 26,
} as const;

/**
 * The font object
 */
export const font = {
  fontSize,
  fontStyle,
  lineHeight,
} as const;
