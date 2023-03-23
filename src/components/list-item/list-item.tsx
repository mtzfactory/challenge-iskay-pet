import * as React from 'react';
import {View} from 'react-native';

import {Text} from '~/components/core';
import {enhanceStyle} from '~/toolbox';

import {ListItemProps as Props} from './list-item.props';
import {listItemStyles as styles} from './list-item.styles';

export const ListItem = (props: Props) => {
  const {description, title, style: styleOverride} = props;
  const containerStyle = enhanceStyle(styles.container, styleOverride);

  return (
    <View style={containerStyle}>
      <Text>{title}</Text>
      <Text variant="label">{description}</Text>
    </View>
  );
};
