import type {
  Animated,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {StyleSheet} from 'react-native';

import type {Nullable} from './typescript';

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
