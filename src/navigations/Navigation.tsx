import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationUtils';
import PublicStack from './PublicStack';
import { AuthStore } from '@states/store';
import ProtectedStack from './ProtectedStack';

const Navigation: FC = () => {
  const AuthState = AuthStore(state => state);
  return (
    <NavigationContainer ref={navigationRef}>
      {AuthState.isLoggedin ? <ProtectedStack /> : <PublicStack />}
    </NavigationContainer>
  );
};

export default Navigation;
