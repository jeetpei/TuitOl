import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../components/Login';
import SignIn from '../components/SignIn';
import Welcome from '../components/Welcome';
import Jitsi from '../components/Jitsi';
import GoToButton from '../components/GoToButton';
import JitsiLogin from '../components/JitsiLogin';
import Sessions from '../components/Sessions';
import JoinWithoutLogin from '../components/JoinWithoutLogin';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return(
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen
    name='Login'
    component={Login}
    options={{title: 'SignIn', headerShown: false}}
  //  options={({ route }) => ({
  //          title: route.params.item.room
  //        })}
    />
    <Stack.Screen
    name='Sessions'
    component={Sessions}
    options={{title: 'SignIn', headerShown: false}}
    //  options={({ route }) => ({
    //          title: route.params.item.room
    //        })}
    />
    <Stack.Screen
    name='SignIn'
    component={SignIn}
    options={{title: 'SignIn', headerShown: false}}
    />
    <Stack.Screen
    name='Welcome'
    component={Welcome}
    options={{title: 'SignIn', headerShown: false}}
    />
    <Stack.Screen
    name='JitsiLogin'
    component={JitsiLogin}
    options={({ route }) => ({
              title: route.params.item.sessId
            })}
    />
    <Stack.Screen
    name='JoinWithoutLogin'
    component={JoinWithoutLogin}
    options={{title: 'SignIn', headerShown: false}}
    />
    <Stack.Screen
    name='Jitsi'
    component={Jitsi}
    options={({ route }) => ({
              title: route.params.item.name
            })}
    />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainStackNavigator
