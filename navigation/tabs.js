import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import {
  Image, StyleSheet, View
} from 'react-native';
import { Home } from "../screens";


const Tab = createBottomTabNavigator();



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});


const Tabs = () => {
  return (
    <Tab.Navigator>


      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (

            <View>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <Image
                style={styles.logo}
                source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                }}
              />
            </View>
          )
        }}>

      </Tab.Screen>
    </Tab.Navigator>

  )
}

export default Tabs;