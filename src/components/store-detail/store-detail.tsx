import * as React from 'react';
import {View} from 'react-native';

import {Text} from '~/components/core';

import {StoreDetailItem} from './store-detail.item';
import {StoreDetailShipingMetods} from './store-detail.shipping-methods';
import {StoreDetailProps as Props} from './store-detail.props';
import {storeDetailStyles as styles} from './store-detail.styles';
import {StoreDetailTasks} from './store-detail.tasks';

export const StoreDetail = ({children, name, ...rest}: Props) => (
  <View {...rest}>
    <Text bold style={styles.header}>
      {name}
    </Text>
    {children}
  </View>
);

StoreDetail.Item = StoreDetailItem;
StoreDetail.ShippingMethods = StoreDetailShipingMetods;
StoreDetail.Tasks = StoreDetailTasks;
