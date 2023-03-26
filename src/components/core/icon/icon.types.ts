import type {StyleProp, ViewStyle} from 'react-native';
import type {IconProps as RNVIconProps} from 'react-native-vector-icons/Icon';

import type {FeatherIconName} from './icon.font';

export type IconName = FeatherIconName;

export type BaseIconProps = Omit<RNVIconProps, 'name'>;
export type IconColor = NonNullable<RNVIconProps['color']>;

export type IconObject = {
  color?: IconColor;
  size?: number;
  name: IconName;
};

export type IconNameOrObject = IconName | IconObject;

export type OptionalIcon =
  | {
      icon: IconNameOrObject;
      iconStyle?: StyleProp<ViewStyle>;
    }
  | {
      icon?: never;
      iconStyle?: never;
    };
