import * as React from 'react';
import {View} from 'react-native';

import {Text} from '~/components/core';
import {enhanceStyle} from '~/toolbox';

import {ListItemProps as Props} from './list-item.props';
import {listItemStyles as styles} from './list-item.styles';

/**
 * List item component.
 *
 * @param {string} props.description  - Description text.
 * @param {string} props.title - Title text.
 */
export const ListItem = (props: Props) => {
  const {children, description, title, style: styleOverride} = props;
  const containerStyle = enhanceStyle(styles.container, styleOverride);

  return (
    <View accessible={true} accessibilityLabel={title} style={containerStyle}>
      <View style={styles.content}>
        <Text ellipsizeMode="middle" numberOfLines={1}>
          {title}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={2} variant="label">
          {description}
        </Text>
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </View>
  );
};
