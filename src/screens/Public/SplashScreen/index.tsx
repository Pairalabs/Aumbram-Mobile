import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { resetAndNavigate } from '@navigations/NavigationUtils'
import navigationStrings from '@constants/navigationStrings'
import ImagePaths from '@constants/ImagePaths'
import AppStatusBar from '@components/AppStatusBar'

const SplashScreen = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            resetAndNavigate(navigationStrings.PUBLIC.ONBOARDING);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <ImageBackground
            source={ImagePaths.spalashBackground}
            resizeMode="cover"
            className="flex-1 w-full h-full justify-center items-center"
        >
            
            <View className="items-center">
                {/* Logo */}
                <Image
                    source={ImagePaths.logo}
                    className="w-16 h-16 mb-5"
                />

                {/* App Name */}
                {/* <Text className="text-2xl font-bold text-white tracking-widest mb-1">
                    AUMBRAM
                </Text> */}
                 <Image
                    source={ImagePaths.tittle}
                    
                />

                {/* Tagline */}
                <Text className="text-white text-base font-normal tracking-[0.5px] font-Satoshi-Variable">
                    Empowering India’s Entrepreneurs
                </Text>
            </View>
        </ImageBackground>
    );
};

export default SplashScreen;
