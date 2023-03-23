import type {IconColor, IconNameOrObject} from './icon.types';

type IconDefaults = {
  color: IconColor;
  size: number;
};

const ICON_DEFAULTS: IconDefaults = {
  color: '#000000',
  size: 16,
};

export function getIconProps(
  icon: IconNameOrObject,
  iconDefault = ICON_DEFAULTS,
) {
  const color =
    typeof icon === 'object' && icon.color ? icon.color : iconDefault.color;
  const name = typeof icon === 'object' ? icon.name : icon;
  const size =
    typeof icon === 'object' && icon.size ? icon.size : iconDefault.size;

  return {color, name, size};
}
