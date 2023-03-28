module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~/test': ['./test/'],
          '^~/(.+)': './src/\\1',
        },
      },
    ],
    'react-native-reanimated/plugin', // Has to be listed last!
  ],
};
