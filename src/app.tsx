import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Store} from '~/models/store';
import {Hero, StoreList, StoresMap, useStoreListRef} from '~/components';
import {getIkpStores} from '~/services/ikp-client';

import {appStyles as styles} from './app.styles';

function App() {
  const [ikpStores, setIkpStores] = React.useState<Store[]>([]);
  const [selectedStoreIndex, setSelectedStoreIndex] = React.useState<
    number | null
  >(null);
  const storeListRef = useStoreListRef();

  React.useEffect(function () {
    async function getStores() {
      const {data: stores, error} = await getIkpStores();
      if (stores) {
        setIkpStores(stores);
      }
    }

    getStores();
  }, []);

  React.useEffect(
    function () {
      selectedStoreIndex
        ? storeListRef.current?.scrollToIndex(selectedStoreIndex)
        : storeListRef.current?.scrollToIndex(0);
    },
    [ikpStores, selectedStoreIndex, storeListRef],
  );

  function handleOnStoreSelect(_store: Store, index: number) {
    setSelectedStoreIndex(index);
  }

  function handleOnStoreDeselect() {
    setSelectedStoreIndex(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container.backgroundColor}
      />
      <StoresMap
        stores={ikpStores}
        onStoreSelect={handleOnStoreSelect}
        onStoreDeselect={handleOnStoreDeselect}
        style={styles.map}
      />
      <Hero text="IskayPet Challenge" style={styles.hero} />
      <StoreList
        ref={storeListRef}
        stores={ikpStores}
        style={styles.storeList}
      />
    </SafeAreaView>
  );
}

export default App;
