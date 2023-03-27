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
import {ErrorObject} from '~/context/stores/stores.types';
import {withGestureHandlerProvider} from '~/providers';
import {ikpClient} from '~/services/ikp-client';
import type {Store} from '~/types';

import {appStyles as styles} from './app.styles';

function getRequestingStoresErrorMessage(error: ErrorObject | null) {
  return error ? `${error.message} (${error.code})` : undefined;
}

function App() {
  const {
    assignStoreTask,
    clearSelectedStore,
    requestingStores,
    selectStore,
    setError,
    setStores,
    ...state
  } = useStoresContext();
  const storeListRef = useStoreListRef();
  const storesMapRef = useStoresMapRef();
  const requestingStoresErrorMessage = getRequestingStoresErrorMessage(
    state.error,
  );
  const {loading: loadingStores, selectedStore, stores} = state;

  async function getStores() {
    requestingStores();
    const {data: stores, error} = await ikpClient.getStores();
    stores ? setStores(stores) : setError(error);
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

  function handleOnRefresStroeList() {
    getStores();
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
          stores={stores}
          onStoreSelect={handleOnStoreSelect}
          onStoreDeselect={handleOnStoreDeselect}
          style={styles.map}
        />
        <Hero text="IskayPet Challenge" style={styles.hero} />
        <StoreList
          ref={storeListRef}
          error={requestingStoresErrorMessage}
          stores={stores}
          loading={loadingStores}
          onPress={handleOnPressStoreListItem}
          onRefresh={handleOnRefresStroeList}
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
