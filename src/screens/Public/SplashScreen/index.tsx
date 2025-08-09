import { View, Text, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import { resetAndNavigate } from '@navigations/NavigationUtils';
import navigationStrings from '@constants/navigationStrings';
import { ImagePaths } from '@constants/ImagePaths';
import AppStatusBar from '@components/AppStatusBar';

const SplashScreen = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate(navigationStrings.PUBLIC.LOGIN);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <AppStatusBar />
      <ImageBackground
        source={ImagePaths.blurBackgroundImage}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <View className="flex-1 items-center justify-cente">
          <Text className="text-white text-[16px] font-normal tracking-[0.5px] font-Satoshi-Variable">
            Empowering India’s Entrepreneurs
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
