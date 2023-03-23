import * as React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import type {IconProps, NullableIconProps} from './icon.props';
import {getIconProps} from './icon.utils';

/**
 * Basic icon component.
 *
 * @param name - Icon name.
 * @param [color="black"] - Icon color, optional.
 * @param [size=16] - Icon size, optional.
 * @param [style] - Icon style, optional.
 */
export const Icon = (props: IconProps) => {
  const {style, ...rest} = props;
  const {name, color, size} = getIconProps({
    color: props.color,
    name: props.name,
    size: props.size,
  });

  return (
    <View style={style}>
      <FeatherIcon {...rest} color={color} name={name} size={size} />
    </View>
  );
};

/**
 * Nullable icon component.
 *
 * @param icon - Icon object.
 * @param [style] - Icon style, optional.
 */
export const NullableIcon = (props: NullableIconProps) => {
  const {icon, style, ...rest} = props;

  if (!icon) {
    return null;
  }

  const {name, color, size} = getIconProps(icon);

  return <Icon {...rest} color={color} name={name} size={size} style={style} />;
};
