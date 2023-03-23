import {palette} from './palette';

const DEFAULT_BACKGROUND_COLOR = palette.antiFlashWhite;
const DEFAULT_TEXT_COLOR = palette.eerieBlack;

export const colors = Object.freeze({
  accent: palette.goldenTainoi,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  monochromes: {
    darkBlack: palette.black,
    black: palette.eerieBlack,
    darkGray: palette.outerSpace,
    gray: palette.frenchGray,
    lightGray: palette.platinum,
    lighterGray: palette.antiFlashWhite,
    darkWhite: palette.seasalt,
    white: palette.white,
  },
  primary: {
    red: palette.frenchRose,
    blue: palette.blueChill,
    ocean: palette.tarawera,
    yellow: palette.goldenTainoi,
    green: palette.caribbeanGreen,
  },
  text: DEFAULT_TEXT_COLOR,
  transparent: 'rgba(0, 0, 0, 0)',
} as const);
