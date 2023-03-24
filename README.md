![React Native](https://img.shields.io/badge/react_native_v0.71.4-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Testig-Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

# IskayPet Mobile Challenge

Soluiton to the [IskayPet Mobile Challenge][ikp-mobile-challenge].

## Install dependencies

Install dependencies executing the following command:

```bash
yarn install
```

## Setup

### Google Maps API Key

On Android, one has to use [Google Maps][google-maps], which in turn requires
you to obtain an [API key for the Android SDK][android-sdk-api-key].

The bundleId is `com.iskaypetchallenge`.

To obtain the signing-certificate fingerprint (SHA1) of the application, please,
use this command:

```bash
keytool -keystore android/app/debug.keystore -list -v
```

### Env file

Create a `.env` file in the root of the project, use this command:

```bash
cp .env.example .env

```

Update the file content:

- `GOOGLE_MAPS_ANROID_API_KEY`, the key obtained in #google-maps-api-key for Android.
- `GOOGLE_MAPS_IOS_API_KEY`, the key obtained in #google-maps-api-key for iOS.

## Start

Just run the following command, selecting the proper platform you want run.

```bash
yarn { android | ios }
```

## Packages

- [react-native-config][react-native-config-package]: Module to expose config
  variables to your javascript code in React Native, supporting iOS, Android.

- [react-native-maps][react-native-maps-package]: React Native Map components
  for iOS + Android

- [react-native-vector-icons][react-native-vector-icons-package]: Customizable
  Icons for React Native with support for image source and full styling.

## Future

1. Group markers: using [react-native-map-clustering][react-native-map-clustering-package]
   or [react-native-clusterer][react-native-clusterer-package]

## Troubleshooting

### Android

- Invariant Violation: requireNativeComponent: "AIRMap" was not found in the UI Manager.

  Soluiton: [issue #3081][react-native-maps-issues-3081]

  Add to `android/build.gradle`:

  ```
  androidMapsUtilsVersion = "0.5+"
  ```

[android-sdk-api-key]: https://developers.google.com/maps/documentation/android-sdk
[google-maps]: https://developers.google.com/maps/documentation/
[ikp-mobile-challenge]: https://github.com/manuelabarca/ikp-mobile-challenge
[react-native-clusterer-package]: https://github.com/JiriHoffmann/react-native-clusterer
[react-native-config-package]: https://github.com/luggit/react-native-config
[react-native-map-clustering-package]: https://github.com/venits/react-native-map-clustering
[react-native-maps-package]: https://github.com/react-native-maps/react-native-maps
[react-native-vector-icons-package]: https://github.com/oblador/react-native-vector-icons
[react-native-maps-issues-3081]: https://github.com/react-native-maps/react-native-maps/issues/3081
