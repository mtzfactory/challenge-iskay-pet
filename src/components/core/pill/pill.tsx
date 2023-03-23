import * as React from 'react';
import {View, Text} from 'react-native';

import {enhanceStyle} from '~/toolbox';

import type {PillProps as Props} from './pill.props';
import {pillStyles as styles} from './pill.styles';
import {textVariants, viewVariants} from './pill.variants';

/**
 * Pill component
 *
 * @param props.label - Label to be displayed in the pill
 * @param props.variant - Variant of the pill, default to "default".
 * @param props.labelStyle - Optional style object to override default button's text style.
 */
export function Pill(props: Props) {
  const {
    label,
    variant: pillVariant = 'default',
    style: pillStyleOverride,
    labelStyle: textStyleOverride,
  } = props;
  const pillStyle = enhanceStyle(
    styles.container,
    viewVariants[pillVariant],
    pillStyleOverride,
  );
  const labelStyle = enhanceStyle(
    styles.label,
    textVariants[pillVariant],
    textStyleOverride,
  );

  return (
    <View style={pillStyle}>
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
}
