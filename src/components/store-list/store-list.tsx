import * as React from 'react';
import {FlatList} from 'react-native';
import type {ListRenderItemInfo} from 'react-native';

import {EmptyState, ListItem} from '~/components';
import {Icon, Pill} from '~/components/core';
import {Store} from '~/models';
import {enhanceStyle} from '~/toolbox';

import {
  StoreListProps as Props,
  StoreListHandle as Handle,
} from './store-list.props';
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
const ForwardStoreList: React.ForwardRefRenderFunction<Handle, Props> = (
  props,
  ref,
) => {
  const {stores, style: stylesOverride} = props;
  const containerStyle = enhanceStyle(styles.container, stylesOverride);
  const flatListRef = React.useRef<FlatList>(null);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        scrollToIndex(index: number) {
          flatListRef.current?.scrollToIndex({index});
        },
      };
    },
    [],
  );

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
      ref={flatListRef}
      data={stores}
      keyExtractor={keyExtractor}
      renderItem={renderIkpStoreItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={containerStyle}
    />
  );
};

export const StoreList = React.forwardRef(ForwardStoreList);

export const useStoreListRef = (initialValue = null) =>
  React.useRef<Handle>(initialValue);
