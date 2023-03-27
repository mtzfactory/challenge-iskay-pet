import * as React from 'react';
import {View} from 'react-native';

import {Button, Text} from '~/components/core';
import {enhanceStyle} from '~/toolbox';

import {EmptyStateProps as Props} from './empty-state.props';
import {emptyStateStyles as styles} from './empty-state.styles';

export const EmptyState = (props: Props) => {
  const {
    children,
    label,
    onPress,
    style: stylesOverride,
    text,
    ...rest
  } = props;
  const containerStyle = enhanceStyle(styles.container, stylesOverride);

  return (
    <View {...rest} style={containerStyle}>
      <View style={styles.content}>
        {children && <View style={styles.iconContainer}>{children}</View>}
        <Text bold center>
          {text}
        </Text>
      </View>
      {label && (
        <Button label={label} onPress={onPress} style={styles.button} />
      )}
    </View>
  );
};
