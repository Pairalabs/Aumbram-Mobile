import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '@navigations/NavigationUtils'
import navigationStrings from '@constants/navigationStrings'
import InputText from '@components/InputText'

const SplashScreen = () => {
    const navigateTo = () => {
        navigate(navigationStrings.PUBLIC.ONBOARDING);
    }
    return (
        <View>
            <Text>SplashScreen</Text>
            <Pressable onPress={navigateTo} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
                <Text className="text-black dark:text-white font-bold">On Boarding</Text>
            </Pressable>
            <TouchableOpacity>

            </TouchableOpacity>
            <InputText label="Enter your name" />
            <Text className='font-'>Hello</Text>
        </View>
    )
}

export default SplashScreen