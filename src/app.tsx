import * as React from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';

import {
  Hero,
  ModalSheet,
  StoreDetail,
  StoreList,
  StoresMap,
  useStoreListRef,
  useStoresMapRef,
  withModalProvider,
} from '~/components';
import {useStoresContext, withStoresProvider} from '~/context';
import {withGestureHandlerProvider} from '~/providers';
import {ikpClient} from '~/services/ikp-client';
import type {Store} from '~/types';

import {appStyles as styles} from './app.styles';

function App() {
  const {
    assignStoreTask,
    clearSelectedStore,
    selectStore,
    selectedStore,
    stores: ikpStores,
    setStores,
  } = useStoresContext();
  const storeListRef = useStoreListRef();
  const storesMapRef = useStoresMapRef();

  async function getStores() {
    const {data: stores, error} = await ikpClient.getStores();
    if (stores) {
      setStores(stores);
    }
  }

  React.useEffect(function () {
    getStores();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  React.useEffect(
    function () {
      selectedStore
        ? storeListRef.current?.scrollToIndex(selectedStore.index)
        : storeListRef.current?.scrollToIndex(0);
    },
    [selectedStore, storeListRef],
  );

  function handleOnStoreSelect(store: Store, index: number) {
    selectStore(store, index);
  }

  function handleOnStoreDeselect() {
    clearSelectedStore();
  }

  function handleOnDismissModal() {
    clearSelectedStore();
  }

  async function handleOnPressAssignTask(storeId: string, taskId: string) {
    const {error} = await ikpClient.checkin(storeId, taskId);

    if (error) {
      return Alert.alert(
        'Error',
        `Error assigning ${taskId} from store ${storeId}\n\n${error}`,
      );
    }

    // TODO: If success, update the local store.
  }

  function handleOnPressStoreListItem(store: Store, index: number) {
    storesMapRef.current?.selectStore(store);
    handleOnStoreSelect(store, index);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={styles.container.backgroundColor}
        />
        <StoresMap
          ref={storesMapRef}
          stores={ikpStores}
          onStoreSelect={handleOnStoreSelect}
          onStoreDeselect={handleOnStoreDeselect}
          style={styles.map}
        />
        <Hero text="IskayPet Challenge" style={styles.hero} />
        <StoreList
          ref={storeListRef}
          stores={ikpStores}
          onPress={handleOnPressStoreListItem}
          style={styles.storeList}
        />
      </SafeAreaView>
      <ModalSheet
        visible={!!selectedStore}
        onDismiss={handleOnDismissModal}
        contentStyle={styles.modal}>
        <StoreDetail name={selectedStore?.store.name}>
          <StoreDetail.Item
            icon="map-pin"
            label={selectedStore?.store.address.direction}
          />
          <StoreDetail.Item
            icon="clock"
            label={`Open from ${selectedStore?.store.schedule.from} to ${selectedStore?.store.schedule.end} ${selectedStore?.store.schedule.timezone}`}
          />
          <StoreDetail.Item
            icon="key"
            label={`Currently is ${
              selectedStore?.store.open ? 'OPEN' : 'CLOSED'
            }`}
          />
          <StoreDetail.Item icon="truck" label="Shipping methods" />
          <StoreDetail.ShippingMethods
            methods={selectedStore?.store.shipping_methods}
          />
          <StoreDetail.Item icon="package" label="Tasks" />
          <StoreDetail.Tasks
            storeId={selectedStore?.store.id}
            tasks={selectedStore?.store.tasks}
            onPress={handleOnPressAssignTask}
          />
        </StoreDetail>
      </ModalSheet>
    </>
  );
}

export default withGestureHandlerProvider(
  withModalProvider(withStoresProvider(App)),
);
