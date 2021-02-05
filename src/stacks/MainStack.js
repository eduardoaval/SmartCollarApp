import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home/Home'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
)