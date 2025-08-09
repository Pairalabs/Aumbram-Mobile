import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const CustomBottomTabs = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    return (
        <View className="flex-row bg-white px-5 py-2 rounded-t-2xl shadow-md">
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        className="flex-1 items-center justify-center"
                    >
                        <Text
                            className={`text-xs mt-1 ${isFocused ? "text-blue-500 font-semibold" : "text-gray-500"
                                }`}
                        >
                            {label as string}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomBottomTabs;
