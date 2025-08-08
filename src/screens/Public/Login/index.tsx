import { View, Text, Pressable, SafeAreaView } from 'react-native';
import React from 'react';
import { AuthStore } from '@states/store';
import AppStatusBar from '@components/AppStatusBar';
import LocalStorage from '@states/storage';

const Login = () => {
  const AuthState = AuthStore(state => state);

  const onLoginPress = () => {
    LocalStorage.setItem('user', JSON.stringify({ id: 1, name: 'john' }));
    LocalStorage.setItem('token', '123456789');
    AuthState.setUser(true);
  };
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <AppStatusBar />
      <View className="flex-1 items-center pt-20 justify-center">
        <Text className="text-xl font-semibold text-black dark:text-white mb-6">Login screen</Text>

        <Pressable onPress={onLoginPress} className="bg-blue-600 px-6 py-3 rounded-full">
          <Text className="text-white font-medium text-base">Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
