import * as React from 'react';
import {View} from 'react-native';

import {Text} from '~/components/core';
import {enhanceStyle} from '~/toolbox';

import {ListItemProps as Props} from './list-item.props';
import {listItemStyles as styles} from './list-item.styles';

/**
 * List item component.
 *
 * @component
 * @param {string} props.description  - Description text.
 * @param {string} props.title - Title text.
 */
export const ListItem = (props: Props) => {
  const {description, title, style: styleOverride} = props;
  const containerStyle = enhanceStyle(styles.container, styleOverride);

  return (
    <View accessible={true} accessibilityLabel={title} style={containerStyle}>
      <View style={styles.content}>
        <Text>{title}</Text>
        <Text variant="label">{description}</Text>
      </View>
    </View>
  );
};
