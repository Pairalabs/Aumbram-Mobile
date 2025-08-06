import React, { FC } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationUtils';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Splash"
            >
                <Stack.Screen name="Splash" component={<></>} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}