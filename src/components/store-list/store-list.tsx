import * as React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {ListItem} from '~/components/list-item';
import {Store} from '~/models';
import {enhanceStyle} from '~/toolbox';

import {StoreListProps as Props} from './store-list.props';
import {storeListStyles as styles} from './store-list.styles';

const renderIkpStoreItem = ({item}: ListRenderItemInfo<Store>) => (
  <ListItem title={item.name} description={item.address.direction} />
);

/**
 * Store list component.
 *
 * @param {Store} props.store - List of stores.
 */
export const StoreList = (props: Props) => {
  const {stores, style: stylesOverride} = props;
  const containerStyle = enhanceStyle(styles.container, stylesOverride);

  return (
    <FlatList
      data={stores}
      renderItem={renderIkpStoreItem}
      style={containerStyle}
    />
  );
};
