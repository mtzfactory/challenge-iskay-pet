import * as React from 'react';
import {Pressable, View} from 'react-native';

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
  const {
    children,
    disabled = false,
    description,
    title,
    onPress,
    style: styleOverride,
  } = props;
  const containerStyle = enhanceStyle(styles.container, styleOverride);
  const content = (
    <>
      <View style={styles.content}>
        <Text ellipsizeMode="middle" numberOfLines={1}>
          {title}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={2} variant="label">
          {description}
        </Text>
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </>
  );

  function handleOnPress() {
    onPress?.();
  }

  return onPress ? (
    <Pressable
      disabled={disabled}
      onPress={handleOnPress}
      style={containerStyle}>
      {content}
    </Pressable>
  ) : (
    <View accessible={true} accessibilityLabel={title} style={containerStyle}>
      {content}
    </View>
  );
};
