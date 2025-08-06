import { Pressable, SafeAreaView, Text, useColorScheme, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import "./global.css";
import { colorScheme } from 'nativewind';
import './src/i18n'; // import i18n config
import { useTranslation } from 'react-i18next';

function App() {
  const systemColorScheme = useColorScheme();
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

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-blue-500 dark:text-blue-300 font-Satoshi-Variable">
        {t('welcome')}
      </Text>

      <Pressable onPress={toggleTheme} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
        <Text className="text-black dark:text-white font-bold">{t('theme_toggle')}</Text>
      </Pressable>

      <Pressable onPress={toggleLanguage} className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
        <Text className="text-black dark:text-white font-bold">{t('language_toggle')}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;
