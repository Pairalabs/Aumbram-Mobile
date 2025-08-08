import navigationStrings from "@constants/navigationStrings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Protected/Home";
import React, { FC } from "react";

const Stack = createNativeStackNavigator();

const ProtectedStack: FC = () => (
    <Stack.Navigator
        initialRouteName={navigationStrings.PROTECTED.HOME}
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name={navigationStrings.PROTECTED.HOME}
            component={Home}
            options={{
                animation: 'fade'
            }}
        />
    </Stack.Navigator>
)

export default ProtectedStack;