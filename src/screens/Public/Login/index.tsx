import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { AuthStore } from '@states/store'

const Login = () => {
    const AuthState = AuthStore((state) => state);
    const onLoginPress = () => {
        AuthState.setUser(true);
    }
    console.log(AuthState.isLoggedin)
    return (
        <View>
            <Text>Login - {AuthState.isLoggedin}</Text>
            <Pressable onPress={onLoginPress}>
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}

export default Login