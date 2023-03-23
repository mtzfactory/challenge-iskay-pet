import type {StyleProp, ViewStyle} from 'react-native';

import type {FeatherIconName} from './icon.font';
import type {IconNameOrObject, BaseIconProps} from './icon.types';

export type IconProps =
  | BaseIconProps & {
      name: FeatherIconName;
      style?: StyleProp<ViewStyle>;
    };

export interface NullableIconProps {
  icon: IconNameOrObject | undefined;
  style?: StyleProp<ViewStyle>;
}
