import type {Pressable, Text, View} from 'react-native';

/**
 * Type for not defined.
 */
export type None = null | undefined;

/**
 * Convert a type into a nullable type.
 *
 * @example
 *   type T = string;
 *   type NullableT = Nullable<T>;
 *   └─ type NullableT = string | null | undefined
 */
export type Nullable<T> = T | None;

/**
 * Pressable component props without ref.
 */
export type PressablePropsWithoutRef = React.ComponentPropsWithoutRef<
  typeof Pressable
>;

/**
 * Pressable component props without ref that allows omit specific props.
 *
 * @example
 *   PressablePropsWithoutRefAndOmit<"children" | "onPress">
 */
export type PressablePropsWithoutRefAndOmit<
  T extends keyof PressablePropsWithoutRef,
> = Omit<PressablePropsWithoutRef, T>;

/**
 * View component props without ref.
 */
export type ViewPropsWithoutRef = React.ComponentPropsWithoutRef<typeof View>;

/**
 * View component props without ref that allows omit specific props.
 *
 * @example
 *   ViewPropsWithoutRefAndOmit<"children" | "style">
 */
export type ViewPropsWithoutRefAndOmit<T extends keyof ViewPropsWithoutRef> =
  Omit<ViewPropsWithoutRef, T>;

/**
 * Text component props without ref.
 */
export type TextPropsWithoutRef = React.ComponentPropsWithoutRef<typeof Text>;

/**
 * Text component props without ref that allows omit specific props.
 *
 * @example
 *   TextPropsWithoutRefAndOmit<"children" | "style">
 */
export type TextPropsWithoutRefAndOmit<T extends keyof TextPropsWithoutRef> =
  Omit<TextPropsWithoutRef, T>;
