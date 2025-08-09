import navigationStrings from '@constants/navigationStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Public/Login';
import OnBoarding from '@screens/Public/OnBoarding';
import OtpVerify from '@screens/Public/OtpVerify';
import SplashScreen from '@screens/Public/SplashScreen';
import React, { FC } from 'react';

const Stack = createNativeStackNavigator();

const PublicStack: FC = () => (
  <Stack.Navigator
    initialRouteName={navigationStrings.PUBLIC.SPLASH}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={navigationStrings.PUBLIC.SPLASH}
      component={SplashScreen}
      options={{
        animation: 'fade',
      }}
    />
    <Stack.Screen
      name={navigationStrings.PUBLIC.ONBOARDING}
      component={OnBoarding}
      options={{
        animation: 'simple_push',
      }}
    />
    <Stack.Screen
      name={navigationStrings.PUBLIC.LOGIN}
      component={Login}
      options={{
        animation: 'slide_from_right',
      }}
    />
    <Stack.Screen
      name={navigationStrings.PUBLIC.OTP_VERIFY}
      component={OtpVerify}
      options={{
        animation: 'fade',
      }}
    />
  </Stack.Navigator>
);

export default PublicStack;
