import * as React from 'react';
import {View} from 'react-native';

import {Text} from '~/components/core';
import {ShippingMethod} from '~/models';

import {storeDetailStyles as styles} from './store-detail.styles';

interface Props {
  methods: ShippingMethod[] | undefined;
}

export const StoreDetailShipingMetods = ({methods}: Props) =>
  methods?.length ? (
    <>
      {methods.map((method, index) => (
        <View key={method.id} style={[styles.itemDetail, styles.indent]}>
          <Text>{`${index + 1}.`}</Text>
          <View style={styles.itemLabel}>
            <Text>{method.name}</Text>
            <Text variant="label">{method.description}</Text>
          </View>
        </View>
      ))}
    </>
  ) : null;
