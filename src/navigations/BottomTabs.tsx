import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "@constants/navigationStrings";
import Home from "@screens/Protected/Home";
import Category from "@screens/Protected/Category";
import Cart from "@screens/Protected/Cart";
import CustomBottomTabs from "./CustomBottomTabs";

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomBottomTabs {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={navigationStrings.PROTECTED.HOME}
                component={Home}
                options={{ tabBarLabel: "Home" }}
            />
            <Tab.Screen
                name={navigationStrings.PROTECTED.CATEGORY}
                component={Category}
                options={{ tabBarLabel: "Category" }}
            />
            <Tab.Screen
                name={navigationStrings.PROTECTED.CART}
                component={Cart}
                options={{ tabBarLabel: "Cart" }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;


