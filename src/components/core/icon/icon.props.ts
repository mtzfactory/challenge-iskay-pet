import type {StyleProp, ViewStyle} from 'react-native';

import type {IconName, IconNameOrObject, BaseIconProps} from './icon.types';

export type IconProps =
  | BaseIconProps & {
      name: IconName;
      style?: StyleProp<ViewStyle>;
    };

export interface NullableIconProps {
  icon: IconNameOrObject | undefined;
  style?: StyleProp<ViewStyle>;
}
