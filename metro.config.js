const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [
      ...assetExts.filter(ext => ext !== 'svg'),
      'obj',
      'mtl',
      'mp3',
      'JPG',
      'vrx',
      'hdr',
      'gltf',
      'glb',
      'bin',
      'arobject',
      'gif',
    ],
    sourceExts: [...sourceExts, 'svg'],
  },
};

const mergedConfig = mergeConfig(defaultConfig, customConfig);
module.exports = withNativeWind(mergedConfig, { input: './global.css' });
