declare module 'react-native-config' {
  interface NativeConfig {
    BASE_URL: `https://${string}`;
    [name: string]: string | undefined;
  }

  export const Config: NativeConfig;
  export default Config;
}
