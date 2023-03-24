import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import type {MarkerPressEvent} from 'react-native-maps';

import type {Store} from '~/models';

import {StoresMapProps as Props} from './stores-map.props';

const INITIAL_REGION = {
  latitude: 40.2369319,
  longitude: -4.031731,
  latitudeDelta: 12,
  longitudeDelta: 11,
};

const StoreMarkers = ({stores}: {stores: Store[]}) => (
  <>
    {stores.map(store => (
      <Marker
        key={store.id}
        identifier={store.id}
        coordinate={{
          latitude: Number(store.address.coordinate.lat),
          longitude: Number(store.address.coordinate.lng),
        }}
        description={store.address.direction}
        title={store.name}
      />
    ))}
  </>
);

export const StoresMap = (props: Props) => {
  const {stores, onStoreSelect, onStoreDeselect, ...rest} = props;
  const mapRef = React.useRef<MapView>(null);

  function handleOnLayoutMapView() {
    setTimeout(function () {
      mapRef?.current?.fitToElements({
        animated: true,
        edgePadding: {top: 140, bottom: 80, left: 80, right: 80},
      });
    }, 1000);
  }

  function handleOnMarkerPress({nativeEvent: {id: storeId}}: MarkerPressEvent) {
    const index = stores.map(({id}) => id).indexOf(storeId);
    const store = stores[index];
    onStoreSelect(store, index);
  }

  function handleOnPressMapview() {
    onStoreDeselect();
  }

  return (
    <MapView
      {...rest}
      ref={mapRef}
      initialRegion={INITIAL_REGION}
      toolbarEnabled={false}
      onLayout={handleOnLayoutMapView}
      onMarkerPress={handleOnMarkerPress}
      onPress={handleOnPressMapview}>
      <StoreMarkers stores={stores} />
    </MapView>
  );
};
