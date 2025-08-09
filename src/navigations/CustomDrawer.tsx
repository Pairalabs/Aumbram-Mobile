import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props: any) => {

    return (
        <View className="flex-1">
            {/* User Info */}
            <View className="p-5 bg-blue-500 items-center">
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                    className="w-[70px] h-[70px] rounded-full mb-2 border-2 border-white"
                />
                <Text className="text-lg font-semibold text-white">John Doe</Text>
                <Text className="text-sm text-blue-100">johndoe@example.com</Text>
            </View>

            {/* Drawer Items */}
            <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 pt-2">
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            {/* Logout Button */}
            <View className="p-5 border-t border-gray-200">
                <TouchableOpacity
                    // onPress={() => setUser(false)}
                    className="py-2"
                >
                    <Text className="text-base text-red-500 font-semibold">🚪 Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
