import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {appStyles as styles} from '~/app.styles';
import {Store} from '~/models/store';
import {Hero, StoreList} from '~/components';
import {getIkpStores} from '~/services/ikp-client';

function App() {
  const [ikpStores, setIkpStores] = React.useState<Store[]>([]);

  React.useEffect(function () {
    async function getStores() {
      const {data: stores, error} = await getIkpStores();
      if (stores) {
        setIkpStores(stores);
      }
    }

    getStores();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={styles.container.backgroundColor}
      />
      <Hero text="IskayPet Challenge" />
      <StoreList stores={ikpStores} />
    </SafeAreaView>
  );
}

export default App;
