import * as React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {EmptyState, ListItem} from '~/components';
import {Icon, Pill} from '~/components/core';
import {Store} from '~/models';
import {enhanceStyle} from '~/toolbox';

import {StoreListProps as Props} from './store-list.props';
import {emptyStateIcon, storeListStyles as styles} from './store-list.styles';

const keyExtractor = (item: Store) => item.id;

const renderIkpStoreItem = ({item}: ListRenderItemInfo<Store>) => (
  <ListItem title={item.name} description={item.address.direction}>
    <Pill label={`${item.tasks.filter(task => !task.assigned).length} TASK`} />
  </ListItem>
);

/**
 * Store list component.
 *
 * @param {Store} props.store - List of stores.
 */
export const StoreList = (props: Props) => {
  const {stores, style: stylesOverride} = props;
  const containerStyle = enhanceStyle(styles.container, stylesOverride);

  if (!stores.length) {
    return (
      <EmptyState text="You are all done!">
        <Icon
          name="coffee"
          size={emptyStateIcon.size}
          color={emptyStateIcon.color}
        />
      </EmptyState>
    );
  }

  return (
    <FlatList
      data={stores}
      keyExtractor={keyExtractor}
      renderItem={renderIkpStoreItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={containerStyle}
    />
  );
};
