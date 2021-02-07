import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from '../QuizProject/Login';
import Signup from '../QuizProject/Signup';
import Home from '../QuizProject/Home';

const Stack = createStackNavigator();
const MyStack =()=>{
    return(
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
    );
};
export default MyStack;