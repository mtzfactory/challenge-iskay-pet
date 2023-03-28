import * as React from 'react';
import {FlatList} from 'react-native';
import type {ListRenderItemInfo} from 'react-native';

import {ListItem} from '~/components';
import {Pill} from '~/components/core';
import {enhanceStyle} from '~/toolbox';
import type {Store} from '~/types';

import {EmptyList, ErrorState, LoadingState} from './store-list.empty-states';
import {
  StoreListProps as Props,
  StoreListHandle as Handle,
} from './store-list.props';
import {storeListStyles as styles} from './store-list.styles';

const keyExtractor = (item: Store) => item.id;

/**
 * Store list component.
 *
 * @param {Store} props.store - List of stores.
 */
const ForwardStoreList: React.ForwardRefRenderFunction<Handle, Props> = (
  props,
  ref,
) => {
  const {
    error = null,
    stores = [],
    loading = false,
    onPress,
    onRefresh,
    style: stylesOverride,
  } = props;
  const containerStyle = enhanceStyle(styles.container, stylesOverride);
  const flatListRef = React.useRef<FlatList>(null);

  React.useImperativeHandle(
    ref,
    () => ({
      scrollToIndex(index: number) {
        flatListRef.current?.scrollToIndex({index, animated: true});
      },
    }),
    [],
  );

  if (error) {
    return <ErrorState label={error} onPress={onRefresh} />;
  }

  if (loading) {
    return <LoadingState />;
  }

  if (!stores.length) {
    return <EmptyList onPress={onRefresh} />;
  }

  const renderIkpStoreItem = ({item, index}: ListRenderItemInfo<Store>) => (
    <ListItem
      description={item.address.direction}
      title={item.name}
      onPress={() => onPress(item, index)}>
      <Pill
        label={`${item.tasks.filter(task => !task.assigned).length} TASK`}
      />
    </ListItem>
  );

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
