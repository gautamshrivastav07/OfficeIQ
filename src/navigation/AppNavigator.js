import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../userInterface/screens/homeScreen/HomeScreen';

import { ScreenNames } from './constant';
import ChatScreen from '../userInterface/screens/chatScreen/ChatScreen';
import WelcomeScreen from '../userInterface/screens/welcomeScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.WELCOME_SCREEN} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.WELCOME_SCREEN} component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name={ScreenNames.CHAT_SCREEN} component={ChatScreen} options={{ headerShown: false }} />
            <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
