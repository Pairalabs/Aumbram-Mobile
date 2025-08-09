import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStatusBar from '@components/AppStatusBar';
import { ImagePaths } from '@constants/ImagePaths';
import Button from '@components/Button';
import { combineClass } from '@utility/combineClasss';
import OtpInput from '@components/OtpInput';

const OtpVerify = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { phoneNumber } = (route.params as { phoneNumber?: string }) || {};

  const handleBackToLogin = () => {
    // Navigate back to the Login screen
    // @ts-ignore
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <AppStatusBar />
      <View className="flex-1 items-center justify-center">
        <ImageBackground
          source={ImagePaths.blurBackgroundImage}
          resizeMode="cover"
          className="flex-1 w-full"
        >
          <View className="flex-1 items-center w-full">
            <View className="flex-1 items-center flex mt-10">
              <Text className="text-white text-4xl mb-4 font-bold">Enter Code</Text>
              <View>
                <Text className="text-center text-gray-300">
                  We’ve sent an SMS with an activation code
                </Text>
                <Text className="text-center text-gray-300 mb-4">
                  <Text>to your phone</Text>
                  <Text className="text-white font-semibold"> +91 {phoneNumber}</Text>
                </Text>
              </View>
            </View>

            <View className="flex-1 gap-5">
              <OtpInput />
              <View className="">
                <Text className="text-white text-center mb-4">
                  Didn’t receive the code?{' '}
                  <Text className="text-blue-300 font-semibold">Resend Code</Text>
                </Text>
              </View>

              <Button
                className="bg-[#0032A0] disabled:bg-gray-500/70 "
                // onPress={onLoginPress}
                // disabled={phoneNumber.length < 10}
              >
                <Text className={combineClass('text-center text-lg font-semibold text-white')}>
                  Continue
                </Text>
              </Button>
            </View>

            <View className="flex-1 items-center justify-center">
              <TouchableOpacity onPress={handleBackToLogin}>
                <Text className="text-white/70">Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerify;
