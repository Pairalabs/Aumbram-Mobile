import React from 'react';
import { StatusBar, SafeAreaView, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AppStatusBar: React.FC = () => {
    const insets = useSafeAreaInsets();
    const themeMode = useColorScheme();

    const isDark = themeMode === 'dark';

    return (
        <SafeAreaView
            className="bg-transparent"
            style={{ paddingTop: insets.top }}
        >
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={isDark ? 'light-content' : 'dark-content'}
                hidden={false}
            />
        </SafeAreaView>
    );
};

export default AppStatusBar;
