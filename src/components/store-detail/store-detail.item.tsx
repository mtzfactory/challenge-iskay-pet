import * as React from 'react';
import {View} from 'react-native';

import {Icon, Text} from '~/components/core';
import type {IconName} from '~/components/core';
import {theme} from '~/theme';

import {storeDetailStyles as styles} from './store-detail.styles';

const itemIcon = {
  color: theme.colors.primary.blue,
  zise: 16,
};

interface Props {
  icon: IconName;
  label: string | undefined;
}

export const StoreDetailItem = ({icon, label}: Props) => (
  <View style={styles.item}>
    <Icon color={itemIcon.color} name={icon} size={itemIcon.zise} />
    <Text style={styles.itemLabel}>{label}</Text>
  </View>
);
