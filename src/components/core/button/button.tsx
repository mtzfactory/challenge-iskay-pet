import * as React from 'react';
import {Pressable, View} from 'react-native';

import {getIconProps, NullableIcon} from '~/components/core/icon';
import {Text} from '~/components/core/text';
import {enhanceStyle, getOpacityStyle} from '~/toolbox';

import type {ButtonProps as Props} from './button.props';
import {
  buttonStyles as styles,
  DEFAULT_ICON_COLOR,
  DEFAULT_ICON_SIZE,
} from './button.styles';
import {buttonVariants, labelVariants} from './button.variant';

/**
 * Basic button component.
 *
 * @param icon - Icon located in the left, optional.
 * @param iconStyle - Style of the icon, optional.
 * @param label - Label to display in the button, optional.
 * @param labelStyle - Style of the label, optional.
 * @param small - True for a small button.
 * @param variant - Type of button.
 */
export const Button = (props: Props) => {
  const {
    children,
    disabled = false,
    icon,
    iconStyle: iconStyleOverride,
    style: buttonStyleOverride,
    label,
    labelStyle: labelStyleOverride,
    small = false,
    variant = 'default',
    ...rest
  } = props;
  const disabledStyle = getOpacityStyle(disabled);
  const buttonStyle = enhanceStyle([
    styles.button,
    small && styles.smallButton,
    buttonVariants[variant],
    buttonStyleOverride,
    disabledStyle,
  ]);
  const labelStyle = enhanceStyle([
    labelVariants[variant],
    small && styles.smallButtonLabel,
    labelStyleOverride,
    disabledStyle,
  ]);
  const iconStyle = enhanceStyle([styles.icon, iconStyleOverride]);
  const theIcon = icon
    ? getIconProps(icon, {
        color: DEFAULT_ICON_COLOR[variant],
        size: DEFAULT_ICON_SIZE,
      })
    : undefined;
  const content =
    'children' in props ? (
      children
    ) : (
      <View style={styles.content}>
        <NullableIcon icon={theIcon} style={iconStyle} />
        <Text bold style={labelStyle}>
          {label}
        </Text>
      </View>
    );

  return (
    <Pressable
      {...rest}
      accessibilityRole="button"
      disabled={disabled}
      style={buttonStyle}>
      {content}
    </Pressable>
  );
};
