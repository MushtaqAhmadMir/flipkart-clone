import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Login,Signup } from '../Screens/index';



const Stack = createStackNavigator();

export default function Routes(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'login'} component={Login} options={{
            headerShown:false
            
        }} />

        <Stack.Screen name={'signUp'}  component={Signup} options={{
            headerShown:false
            
        }}  />
              </Stack.Navigator>
    </NavigationContainer>
  );
}
