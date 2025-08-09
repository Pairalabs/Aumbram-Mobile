import navigationStrings from "@constants/navigationStrings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Protected/Home";
import React, { FC } from "react";
import DrawerStack from "./DrawerStack";

const Stack = createNativeStackNavigator();

const ProtectedStack: FC = () => (
    <Stack.Navigator
        initialRouteName={navigationStrings.PROTECTED.DRAWER_MAIN}
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name={navigationStrings.PROTECTED.DRAWER_MAIN} component={DrawerStack} />
    </Stack.Navigator>
)

export default ProtectedStack;