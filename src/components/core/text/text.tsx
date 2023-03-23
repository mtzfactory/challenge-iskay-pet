import * as React from 'react';
import {Text as RNText} from 'react-native';

import {theme} from '~/theme';
import {enhanceStyle} from '~/toolbox';

import type {TextProps as Props} from './text.props';
import {DEFAULT_TEXT_VARIANT} from './text.props';
import {textStyles as styles} from './text.styles';

/**
 * Text component.
 *
 * @param props.variant - Optional typography variant, default to paragraph.
 **/
export const Text = (props: Props) => {
  const {
    bold = false,
    center = false,
    variant = DEFAULT_TEXT_VARIANT,
    style: styleOverride,
    ...rest
  } = props;
  const style = enhanceStyle([
    theme.typography[variant],
    styles.default,
    bold && styles.bold,
    center && styles.centered,
    styleOverride,
  ]);

  return <RNText {...rest} style={style} />;
};
