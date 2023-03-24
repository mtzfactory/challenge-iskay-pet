import type {
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import type {OptionalIcon} from '~/components/core/icon';
import type {PressablePropsWithoutRefAndOmit} from '~/toolbox';

import type {ButtonVariants} from './button.variant';

type PressableBaseProps = PressablePropsWithoutRefAndOmit<'children' | 'style'>;
type Children = PressableProps['children'];

type ButtonBaseProps = {
  variant?: ButtonVariants;
  style?: StyleProp<ViewStyle>;
};

export type ButtonProps = PressableBaseProps &
  ButtonBaseProps &
  (
    | (
        | {
            children?: never;
            icon?: never;
            label: string;
            iconStyle?: never;
            labelStyle?: StyleProp<TextStyle>;
          }
        | {
            children?: never;
            icon: OptionalIcon['icon'];
            label: string;
            iconStyle?: StyleProp<ViewStyle>;
            labelStyle?: StyleProp<TextStyle>;
          }
      )
    | {
        children: Children;
        icon?: never;
        label?: never;
        iconStyle?: never;
        labelStyle?: never;
      }
  );
