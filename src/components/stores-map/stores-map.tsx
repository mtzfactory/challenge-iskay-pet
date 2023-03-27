import * as React from 'react';
import MapView, {MapMarker} from 'react-native-maps';
import type {MarkerPressEvent} from 'react-native-maps';

import type {Store} from '~/types';

import {
  StoresMapProps as Props,
  StoresMapHandle as Handle,
} from './stores-map.props';
import {LocationPermission} from '~/components/location-permision';

const INITIAL_REGION = {
  latitude: 40.2369319,
  longitude: -4.031731,
  latitudeDelta: 12,
  longitudeDelta: 11,
};

const createStoreMarkers = (stores: Store[]) => {
  const refs = stores.reduce<{[key: string]: React.RefObject<MapMarker>}>(
    (acc, store) => {
      acc[store.id] = React.createRef<MapMarker>();
      return acc;
    },
    {},
  );
  const elements = stores.map(store => (
    <MapMarker
      ref={refs[store.id]}
      key={store.id}
      identifier={store.id}
      coordinate={{
        latitude: Number(store.address.coordinate.lat),
        longitude: Number(store.address.coordinate.lng),
      }}
      description={store.address.direction}
      title={store.name}
    />
  ));

  return {refs, elements};
};

const ForwardStoresMap: React.ForwardRefRenderFunction<Handle, Props> = (
  props,
  ref,
) => {
  const {stores, onStoreSelect, onStoreDeselect, ...rest} = props;
  const mapRef = React.useRef<MapView>(null);
  const storeMarkers = React.useMemo(
    () => createStoreMarkers(stores),
    [stores],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      selectStore(store: Store) {
        storeMarkers.refs[store.id].current?.showCallout();
        mapRef.current?.animateCamera({
          center: {
            latitude: Number(store.address.coordinate.lat),
            longitude: Number(store.address.coordinate.lng),
          },
        });
      },
    }),
    [storeMarkers],
  );

  function handleOnLayoutMapView() {
    setTimeout(function () {
      mapRef?.current?.fitToElements({animated: true});
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
    <LocationPermission>
      <MapView
        {...rest}
        ref={mapRef}
        initialRegion={INITIAL_REGION}
        showsUserLocation={true}
        toolbarEnabled={false}
        onLayout={handleOnLayoutMapView}
        onMarkerPress={handleOnMarkerPress}
        onPress={handleOnPressMapview}>
        {storeMarkers.elements}
      </MapView>
    </LocationPermission>
  );
};

export const StoresMap = React.forwardRef(ForwardStoresMap);

export const useStoresMapRef = (initialValue = null) =>
  React.useRef<Handle>(initialValue);
