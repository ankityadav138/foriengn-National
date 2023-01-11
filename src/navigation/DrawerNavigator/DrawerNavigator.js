// npm modue
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home/Home';
import DrawerMenu from './DrawerMenu';
import ImmigrationStatus from '../../screens/drawerScreens/ImmigrationStatus';
import BeneficiaryInformation from '../../screens/drawerScreens/BeneficiaryInformation';
import Passport from '../../screens/drawerScreens/Passport';
import PermanentResident from '../../screens/drawerScreens/PermanentResident';
import OpenCases from '../../screens/drawerScreens/OpenCases';
import ImmigrationContact from '../../screens/drawerScreens/ImmigrationContact';
import QuickLinks from '../../screens/drawerScreens/QuickLinks';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <DrawerMenu />}>
      <Drawer.Screen
        name="ImmigrationStatus"
        component={ImmigrationStatus}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="BeneficiaryInformation"
        component={BeneficiaryInformation}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="passport"
        component={Passport}
        options={{headerShown: true}}
      />

      <Drawer.Screen
        name="PermanentResident"
        component={PermanentResident}
        options={{headerShown: true}}
      />

      <Drawer.Screen
        name="Opencases"
        component={OpenCases}
        options={{headerShown: true}}
      />

      <Drawer.Screen
        name="Immigrationcontacts"
        component={ImmigrationContact}
        options={{headerShown: true}}
      />

      <Drawer.Screen
        name="Quicklinks"
        component={QuickLinks}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
