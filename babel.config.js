module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:@react-native/babel-preset',
      'nativewind/babel'
    ],
    plugins: [
      'react-native-worklets/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@constants': './src/constants',
            '@components': './src/components',
            '@utils': './src/utils',
            '@states': './src/states',
            '@services': './src/services',
            '@theme': './src/theme',
            '@helper': './src/helper',
            '@navigations': './src/navigations',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
