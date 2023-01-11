//npm module

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';

//screens
import Home from '../screens/home/Home';
import Login from '../screens/authScreens/Login';

const Stack = createNativeStackNavigator();

// const loginStack = () => {
//   return (
//     <>
//       <Stack.Screen
//         name="Splash"
//         component={Splash}
//         options={{headerShown: false}}
//       />
//     </>
//   );
// };

const homeStack = () => {
  return (
    <>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: true}}
      />
      {/* <Stack.Screen
        name="logim"
        component={Login}
        options={{headerShown: true}}
      /> */}
    </>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>{homeStack()}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
