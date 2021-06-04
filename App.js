import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { Products, Home } from './screens';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    < NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}>

        {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App;
