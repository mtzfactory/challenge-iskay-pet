import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {appStyles as styles} from '~/app.styles';
import {BASE_URL, STORES_ENDPOINT} from '~/config';
import {get} from '~/infra/http';
import {Store} from '~/models/store';
import {Hero, StoreList} from '~/components';

function App() {
  const [ikpStores, setIkpStores] = React.useState<Store[]>([]);

  React.useEffect(function () {
    async function getStores() {
      const stores = await get<Store[]>(`${BASE_URL}${STORES_ENDPOINT}`);
      setIkpStores(stores);
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
