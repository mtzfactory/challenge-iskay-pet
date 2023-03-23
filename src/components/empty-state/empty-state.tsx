import * as React from 'react';
import {View} from 'react-native';

import {Text} from '~/components/core';
import {enhanceStyle} from '~/toolbox';

import {EmptyStateProps as Props} from './empty-state.props';
import {emptyStateStyles as styles} from './empty-state.styles';

export const EmptyState = (props: Props) => {
  const {children, style: stylesOverride, text, ...rest} = props;
  const containerStyle = enhanceStyle(styles.container, stylesOverride);

  return (
    <View {...rest} style={containerStyle}>
      {children && <View style={styles.iconContainer}>{children}</View>}
      <View style={styles.textContainer}>
        <Text bold center style={styles.text}>
          {text}
        </Text>
      </View>
    </View>
  );
};
