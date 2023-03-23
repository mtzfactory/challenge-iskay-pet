import * as React from 'react';

import {Text} from '~/components/core';
import {enhanceStyle} from '~/toolbox';

import {HeroProps as Props} from './hero.props';
import {heroStyles as styles} from './hero.styles';

export const Hero = (props: Props) => {
  const {text, style: styleOverride, ...rest} = props;
  const heroStyle = enhanceStyle(styles.hero, styleOverride);

  return (
    <Text
      {...rest}
      accessibilityRole="header"
      center
      variant="h1"
      style={heroStyle}>
      {text}
    </Text>
  );
};
