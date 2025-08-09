import { Alert, Pressable, SafeAreaView, StatusBar, Text, useColorScheme, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import { resetAndNavigate } from '@navigations/NavigationUtils';
import navigationStrings from '@constants/navigationStrings';
import LocalStorage from '@states/storage';
import { AuthStore } from '@states/store';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';


type DrawerParamList = {
    Home: undefined;
    Category: undefined;
    Cart: undefined;
};


const Home = () => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
    const systemColorScheme = useColorScheme();
    const AuthState = AuthStore(state => state);

    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(
        systemColorScheme === 'dark' ? 'dark' : 'light'
    );

    const [language, setLanguage] = useState<'en' | 'hi'>('en');
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setCurrentTheme(systemColorScheme === 'dark' ? 'dark' : 'light');
        colorScheme.set(systemColorScheme === 'dark' ? 'dark' : 'light');
    }, [systemColorScheme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        colorScheme.set(newTheme);
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'hi' : 'en';
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    const onLogoutPress = () => {
        Alert.alert("Are you sure ?", "You want to logout.", [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'YES', onPress: () => {
                    LocalStorage.clearAll();
                    AuthState.setUser(false);
                    resetAndNavigate(navigationStrings.PUBLIC.LOGIN);
                }
            }
        ]);
    }

    const onToggleDrawer = () => {
        navigation.toggleDrawer();
    };


    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">
            <StatusBar barStyle={currentTheme == "dark" ? 'light-content' : 'dark-content'} />
            <Text className="text-xl font-bold text-blue-500 dark:text-blue-300 font-Satoshi-Variable">
                {t('welcome')}
            </Text>

            <Pressable onPress={toggleTheme} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
                <Text className="text-black dark:text-white font-bold">{t('theme_toggle')}</Text>
            </Pressable>

            <Pressable onPress={toggleLanguage} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
                <Text className="text-black dark:text-white font-bold">{t('language_toggle')}</Text>
            </Pressable>

            <Pressable onPress={onToggleDrawer} className="mt-4 px-4 py-2 bg-green-500 rounded">
                <Text className="text-white font-bold">Toggle Drawer</Text>
            </Pressable>

            <Pressable onPress={onLogoutPress} className="mt-4 px-4 py-2 bg-red-600 dark:bg-gray-700 rounded">
                <Text className="text-white dark:text-white font-bold">Logout</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Home