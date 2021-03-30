import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home/History/Home'
import Preload from '../screens/Preload/Preload'
import SignIn from '../screens/SignIn/SignIn'
import SignUp from '../screens/SignUp/SignUp'
import HomeStack from '../screens/Home/HomeStack';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
)