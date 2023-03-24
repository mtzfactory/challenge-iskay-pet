import type {
  Animated,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {StyleSheet} from 'react-native';

import type {Nullable} from './typescript';

const DEFAULT_OPACITY = 0.7;

/**
 * Flattens a list of style objects, into one aggregated style object.
 *
 * @param List of style objects to be merged.
 */
export const enhanceStyle = <
  T extends
    | Nullable<StyleProp<ImageStyle>>[]
    | Nullable<StyleProp<TextStyle>>[]
    | Nullable<StyleProp<ViewStyle>>[]
    | Nullable<Animated.AnimatedProps<StyleProp<ViewStyle>>>[],
>(
  ...styles: T
) => StyleSheet.flatten(styles);

/**
 * Get opacity style.
 *
 * @param flag - True to set the opacity.
 * @param opacity - Optional value for the opacity. Default to 0.7.
 */
export const getOpacityStyle = (
  flag: boolean | null,
  opacity = DEFAULT_OPACITY,
): ViewStyle => ({
  opacity: flag ? opacity : 1,
});
