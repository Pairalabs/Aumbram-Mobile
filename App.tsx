import React, { useEffect } from 'react';
import "./global.css";
import Navigation from '@navigations/Navigation';
import '@i18n';
import { SafeAreaView } from 'react-native';
import { AuthStore } from '@states/store';
import LocalStorage from '@states/storage';

function App() {
  const AuthState = AuthStore(state => state);

  const checkUserSession = async () => {
    const token = await LocalStorage.getItem("token");
    const user = await LocalStorage.getItem("user");

    if(token && user) {
      const userData = typeof user === "string" ? JSON.parse(user) : user;
      AuthState.setUser(true);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      checkUserSession();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  return (
    <SafeAreaView className='flex-1'>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
