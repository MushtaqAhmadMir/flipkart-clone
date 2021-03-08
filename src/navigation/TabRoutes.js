import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage ,LatestDeals,Cart,Profile,Camera} from '../Screens';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomePage}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }} />
      <Tab.Screen name="Latest Deals" component={LatestDeals} options={{
          tabBarLabel: 'Latest Deals',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color={color} size={30} />
          ),
        }} />
        <Tab.Screen name="Camera" component={Camera} options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={30} />
          ),
        }} />
      <Tab.Screen name="Cart" component={Cart} options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={30} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}/>
    </Tab.Navigator>
  );
}


export default TabRoutes;