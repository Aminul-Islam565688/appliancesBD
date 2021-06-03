import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home, Shop,OrderDelivery} from './screens'

 

const Stack = createStackNavigator();
export default function App() {
 return (
   <NavigationContainer>  
     <Stack.Navigator
     screenOptions={{ 
       headerShown:false
     }} initialRouteName={"Home"}>

      
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Shop" component={Shop}/>
       <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
  
       


     </Stack.Navigator>
   </NavigationContainer>
 );
}


