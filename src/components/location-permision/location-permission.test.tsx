import * as React from 'react';
import {Text, Platform} from 'react-native';
import * as RNPermissions from 'react-native-permissions';
import type {PermissionStatus} from 'react-native-permissions';

import {LocationPermission} from './location-permission';

import {act, fireEvent, render, screen, waitFor} from '~/test/utils';

const {PERMISSIONS, RESULTS} = RNPermissions;

const DummyComponent = () => (
  <LocationPermission>
    <Text>Lorem ipsum</Text>
  </LocationPermission>
);

const grantPermissions: Record<string, PermissionStatus> = {
  [PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]: RESULTS.GRANTED,
  [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]: RESULTS.GRANTED,
  [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]: RESULTS.GRANTED,
};

const overlayTestCases: [string, 'android' | 'ios'][] = [
  ['Android', 'android'],
  ['iOS', 'ios'],
];

const withoutPermissionsTestCases: [
  string,
  'android' | 'ios',
  Record<string, PermissionStatus>,
][] = [
  [
    'Android',
    'android',
    {
      [PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION]: RESULTS.BLOCKED,
      [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]: RESULTS.BLOCKED,
    },
  ],
  ['iOS', 'ios', {[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]: RESULTS.BLOCKED}],
];

describe('LocationPermission', function () {
  const checkMultipleSpy = jest.spyOn(RNPermissions, 'checkMultiple');
  const requestMultipleSpy = jest.spyOn(RNPermissions, 'requestMultiple');

  beforeEach(function () {
    checkMultipleSpy.mockRestore();
    checkMultipleSpy.mockResolvedValue(grantPermissions);
    requestMultipleSpy.mockRestore();
    requestMultipleSpy.mockResolvedValue(grantPermissions);
  });

  it.each(overlayTestCases)(
    'Should render the overlay while checks permissions (%s)',
    async function (_, platform) {
      Platform.OS = platform;

      render(<DummyComponent />);

      await waitFor(() => {
        expect(screen.getByText('Lorem ipsum')).toBeDefined();
        expect(screen.getByTestId('location-permission-overlay')).toBeDefined();
      });
    },
  );

  describe('With permissions blocked', function () {
    it.each(withoutPermissionsTestCases)(
      'should ask the user for permissions (%s)',
      async function (_, platform, permissions) {
        Platform.OS = platform;
        checkMultipleSpy.mockResolvedValue(permissions);

        render(<DummyComponent />);

        await waitFor(() => {
          expect(
            screen.getByText("Let's set things up.\nWe need access to"),
          ).toBeDefined();
        });

        expect(screen.getByText('OK, Continue')).toBeDefined();
      },
    );

    it.each(withoutPermissionsTestCases)(
      'should let the user to request permissions (%s)',
      async function (_, platform, permissions) {
        Platform.OS = platform;

        checkMultipleSpy.mockResolvedValue(permissions);

        render(<DummyComponent />);

        await waitFor(() =>
          expect(screen.getByText('OK, Continue')).toBeDefined(),
        );

        const okContinueButton = screen.getByRole('button');

        await act(() => fireEvent.press(okContinueButton));

        expect(requestMultipleSpy).toHaveBeenCalledWith(
          Object.keys(permissions),
        );

        requestMultipleSpy.mockRestore();
      },
    );
  });
});
