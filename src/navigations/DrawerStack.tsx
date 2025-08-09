import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import navigationStrings from '@constants/navigationStrings';
import MyProfile from '@screens/Protected/MyProfile';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: { fontSize: 16 },
            }}
        >
            <Drawer.Screen
                name="Tabs"
                component={BottomTabs}
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen
                name={navigationStrings.PROTECTED.MY_PROFILE}
                component={MyProfile}
                options={{ drawerLabel: 'Profile' }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerStack;
