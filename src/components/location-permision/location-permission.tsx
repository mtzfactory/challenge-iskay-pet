import * as React from 'react';
import {Platform, View} from 'react-native';
import {
  checkMultiple,
  requestMultiple,
  PERMISSIONS,
} from 'react-native-permissions';
import type {Permission, PermissionStatus} from 'react-native-permissions';

import {Button, Icon, Text} from '~/components/core';
import {Hero} from '~/components/hero';

import {LocationPermissionProps as Props} from './location-permission.props';
import {
  locationIcon,
  locationPermissionStyles as styles,
} from './location-permission.styles';

enum Location {
  Granted = 'Granted',
  NotGranted = 'NotGranted',
  Checking = 'Checking',
}

const locationPermissions: Permission[] =
  Platform.OS === 'ios'
    ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
    : [
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ];

export const LocationPermission = (props: Props) => {
  const {children} = props;
  const [locationGranted, setLocationGranted] = React.useState(
    Location.Checking,
  );

  function checkResult(
    permissions: Permission[],
    result: Record<Permission, PermissionStatus>,
  ) {
    const granted = permissions.every(
      permission => result[permission] === 'granted',
    );
    setLocationGranted(granted ? Location.Granted : Location.NotGranted);
  }

  React.useEffect(function () {
    async function checkLocationPermission() {
      const result = await checkMultiple(locationPermissions);
      checkResult(locationPermissions, result);
    }

    checkLocationPermission();
  }, []);

  if (locationGranted === Location.Checking) {
    if (children && React.isValidElement(children)) {
      const overlayStyle = Object.assign(
        {
          ...styles.container,
          ...styles.overlay,
        },
        children.props.style,
      );

      return (
        <>
          {children}
          <View style={overlayStyle} />
        </>
      );
    }
  }

  if (locationGranted === Location.Granted) {
    return <>{children}</>;
  }

  async function handleOnPressOkContinue() {
    const result = await requestMultiple(locationPermissions);
    checkResult(locationPermissions, result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Hero text={'Lets set things up.\nWe need access to'} />
      </View>
      <View style={styles.description}>
        <View style={styles.service}>
          <Icon
            name="map-pin"
            color={locationIcon.color}
            size={locationIcon.size}
          />
          <Text bold center style={styles.serviceText}>
            Location Services
          </Text>
        </View>
        <Text center>To explore the IskayPet stores</Text>
      </View>
      <Button
        label="OK, Continue"
        onPress={handleOnPressOkContinue}
        style={styles.button}
      />
    </View>
  );
};
