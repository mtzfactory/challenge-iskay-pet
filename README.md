![React Native](https://img.shields.io/badge/react_native_v0.71.4-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Testig-Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

# IskayPet Mobile Challenge

Solution to the [IskayPet Mobile Challenge][ikp-mobile-challenge].

Please, take a look to the application [screenshots](./screenshots/screenshots.md).

## Install dependencies

Install dependencies executing the following command:

```bash
yarn install
```

## Setup

### Google Maps API Key

To use [Google Maps][google-maps], you to obtain an API key for the [Android SDK][sdk-api-key-android]
or the [iOS SDK][sdk-api-key-ios].

The bundleId is `com.iskaypetchallenge`.

To obtain the signing-certificate fingerprint (SHA1) of the Android application,
please, use this command:

```bash
keytool -keystore android/app/debug.keystore -list -v
```

### Env file

Create a `.env` file in the root directory of the project, you can use this command:

```bash
cp .env.example .env

```

Finally, update the file content:

- `GOOGLE_MAPS_ANROID_API_KEY`, the key obtained in #google-maps-api-key for Android.
- `GOOGLE_MAPS_IOS_API_KEY`, the key obtained in #google-maps-api-key for iOS.

## Start

Before continue, please, ensure your [environment is configured properly][environment-setup].

To run the application, just execute the following command:

```bash
yarn android
```

**Disclosure**: The application has been tested only in Android devices, since
my computer is a _Macbook Pro from 2012_, which can not be updated to last OS version,
therefore I can not build and test the iOS version.

## Packages

- [immer][immer-package]: Create the next immutable state by mutating the current
  one.

- [react-native-bottom-sheet][react-native-bottom-sheet-package]: A performant
  interactive bottom sheet with fully configurable options.

- [react-native-config][react-native-config-package]: Module to expose config
  variables to your javascript code in React Native, supporting iOS, Android.

- [react-native-gesture-handler][react-native-gesture-handler-package]: Declarative
  API exposing platform native touch and gesture system to React Native.

- [react-native-maps][react-native-maps-package]: React Native Map components
  for iOS + Android.

- [react-native-permissions][react-native-permissions-package]: An unified
  permissions API for React Native on iOS, Android and Windows.

- [react-native-reanimated][react-native-reanimated-package]: React Native's
  Animated library reimplemented.

- [react-native-vector-icons][react-native-vector-icons-package]: Customizable
  Icons for React Native with support for image source and full styling.

### Dev Dependencies

- [@testing-library/jest-native][testing-library-jest-native-package]: Custom jest
  matchers to test the state of React Native.

- [@testing-library/react-hooks][testing-library-react-hooks-package]: Simple and
  complete React hooks testing utilities that encourage good testing practices.

- [@testing-library/react-native][testing-library-react-native-package]: Simple
  and complete React Native testing utilities that encourage good testing practices.

## Future

1. Group markers: using [react-native-map-clustering][react-native-map-clustering-package]
   or [react-native-clusterer][react-native-clusterer-package]

2. Check if permissions changed when [app get focus again][appstate-listener].

## Troubleshooting

### Android

- _Invariant Violation: requireNativeComponent: "AIRMap" was not found in the
  UI Manager_.

  Solution: [issue #3081][react-native-maps-issues-3081].

  Add to `android/build.gradle`:

  ```gradle
  androidMapsUtilsVersion = "0.5+"
  ```

<!-- Links -->

[appstate-listener]: https://reactnative.dev/docs/appstate/#addeventlistener
[environment-setup]: https://reactnative.dev/docs/environment-setup
[google-maps]: https://developers.google.com/maps/documentation/
[ikp-mobile-challenge]: https://github.com/manuelabarca/ikp-mobile-challenge
[react-native-maps-issues-3081]: https://github.com/react-native-maps/react-native-maps/issues/3081
[sdk-api-key-android]: https://developers.google.com/maps/documentation/android-sdk
[sdk-api-key-ios]: https://developers.google.com/maps/documentation/ios-sdk

<!-- Packages -->

[immer-package]: https://github.com/immerjs/immer
[react-native-bottom-sheet-package]: https://github.com/gorhom/react-native-bottom-sheet
[react-native-clusterer-package]: https://github.com/JiriHoffmann/react-native-clusterer
[react-native-config-package]: https://github.com/luggit/react-native-config
[react-native-gesture-handler-package]: https://github.com/software-mansion/react-native-gesture-handler
[react-native-permissions-package]: https://github.com/zoontek/react-native-permissions
[react-native-reanimated-package]: https://github.com/software-mansion/react-native-reanimated
[react-native-map-clustering-package]: https://github.com/venits/react-native-map-clustering
[react-native-maps-package]: https://github.com/react-native-maps/react-native-maps
[react-native-vector-icons-package]: https://github.com/oblador/react-native-vector-icons
[testing-library-jest-native-package]: https://github.com/testing-library/jest-native
[testing-library-react-hooks-package]: https://github.com/testing-library/react-hooks-testing-library
[testing-library-react-native-package]: https://github.com/callstack/react-native-testing-library
