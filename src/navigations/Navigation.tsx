import React, { FC } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationUtils';
import SplashScreen from '@screens/Public/SplashScreen';
import OnBoarding from '@screens/Public/OnBoarding';
import navigationStrings from '@constants/navigationStrings';
import Login from '@screens/Public/Login';
import OtpVerify from '@screens/Public/OtpVerify';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={navigationStrings.PUBLIC.SPLASH}
            >
                <Stack.Screen name={navigationStrings.PUBLIC.SPLASH} component={SplashScreen} />
                <Stack.Screen name={navigationStrings.PUBLIC.ONBOARDING} component={OnBoarding} />
                <Stack.Screen name={navigationStrings.PUBLIC.LOGIN} component={Login} />
                <Stack.Screen name={navigationStrings.PUBLIC.OTP_VERIFY} component={OtpVerify} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;