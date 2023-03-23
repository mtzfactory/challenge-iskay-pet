import type {TextStyle} from 'react-native';
import {Platform} from 'react-native';

import type {FontWeight} from './font';
import {font} from './font';

export const typographyKeys = ['body', 'h1', 'label'] as const;
export type Typography = (typeof typographyKeys)[number];

export const fontName = 'Montserrat';

export const getFontStyle = (fontWeight: FontWeight = 'normal') =>
  font.fontStyle(fontName, fontWeight);

const SIZE_CORRECTION_FOR_OS = Platform.OS === 'ios' ? 0 : 2;

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  ...getFontStyle('normal'),
};

export const typography: Record<Typography, TextStyle> = Object.freeze({
  h1: {
    ...BASE,
    ...getFontStyle('800'),
    fontSize: font.fontSize.xl + SIZE_CORRECTION_FOR_OS,
    lineHeight: font.lineHeight.xxl,
  },
  body: {
    ...BASE,
    fontSize: font.fontSize.m + SIZE_CORRECTION_FOR_OS,
    lineHeight: font.lineHeight.l,
  },
  label: {
    ...BASE,
    fontSize: font.fontSize.s + SIZE_CORRECTION_FOR_OS,
    lineHeight: font.lineHeight.m,
  },
} as const);
