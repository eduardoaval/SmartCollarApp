import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './History/Home'

import ListDescription from './History/ListDescription'
import DogAttack from './History/DogAttack'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="HistoryHome"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="HistoryHome" component={Home}/>
        <Stack.Screen name="ListDescription" component={ListDescription} />
        <Stack.Screen name="DogAttack" component={DogAttack} />
    </Stack.Navigator>
)