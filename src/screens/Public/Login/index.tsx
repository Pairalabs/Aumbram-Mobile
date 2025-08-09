import { View, Text, SafeAreaView, ImageBackground, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import AppStatusBar from '@components/AppStatusBar';
import { ImagePaths } from '@constants/ImagePaths';
import Button from '@components/Button';
import { combineClass } from '@utility/combineClasss';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  // const AuthState = AuthStore(state => state);
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const onLoginPress = () => {
    // LocalStorage.setItem('user', JSON.stringify({ id: 1, name: 'john' }));
    // LocalStorage.setItem('token', '123456789');
    // AuthState.setUser(true);
    console.log('Login pressed');

    // @ts-ignore
    navigation.navigate('OtpVerify', { phoneNumber });
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
            <Text className="text-2xl font-bold mb-4 mt-10 text-white">Aumbram</Text>
            <View className="flex-1 items-center flex mt-10">
              <Text className="text-white text-4xl mb-4 font-bold">Welcome!</Text>
              <View>
                <Text className="text-center text-gray-300">Enter your phone number below</Text>
                <Text className="text-center text-gray-300 mb-4">to access your account!</Text>
              </View>
            </View>

            <View className="flex-1 gap-5">
              <View className="flex-row items-center border pl-2 bg-white border-blue-300 rounded-lg">
                <Image
                  source={ImagePaths.IndiaFlag}
                  className="w-6 h-4 mr-2"
                  resizeMode="contain"
                />
                <TextInput
                  className="bg-white text-black rounded-lg px-4 py-5 w-80"
                  placeholder="Enter your phone number"
                  placeholderTextColor={'#64748B'}
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>

              <Button
                className="bg-[#0032A0] disabled:bg-gray-500/70 "
                onPress={onLoginPress}
                disabled={phoneNumber.length < 10}
              >
                <Text
                  className={combineClass(
                    'text-center text-lg font-semibold text-white',
                    phoneNumber.length < 10 && 'text-black/70',
                  )}
                >
                  Get Otp
                </Text>
              </Button>
            </View>

            <View className="flex-1 items-center justify-center">
              <Text className="text-white/70">I agree to the Aumbram&apos;s </Text>
              <Text className="text-white/70">Terms of Service and Privacy Policy.</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Login;
