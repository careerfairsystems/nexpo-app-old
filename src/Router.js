import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../selection.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EventNavigator from './screens/Events/EventNavigator';
import AboutNavigator from './screens/About/AboutNavigator';
import CompaniesNavigator from './screens/Companies/CompaniesNavigator';
import EmptyScreen from './screens/EmptyScreen';

const Tab = createBottomTabNavigator();

const ArkadIcon = createIconSetFromFontello(fontelloConfig)


export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Events') {
              iconName = focused
                ? 'md-calendar'
                : 'md-calendar';
            } else if (route.name === 'Map') {
              iconName = focused ? 'md-map' : 'md-map';
            } else if (route.name === 'Companies') {
              iconName = focused ? 'md-business' : 'md-business';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person' : 'md-person';
            } else if (route.name === 'About') {
              iconName = focused ? 'md-information-circle' : 'md-information-circle';
              //return <ArkadIcon name="arkadlogo" size={26} color={global.arkadGrey} />
            }

            // Any component can be put here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: global.arkadBlue,
          inactiveTintColor: global.arkadGrey,
        }}
      >
        <Tab.Screen name="Events" component={EventNavigator} />
        <Tab.Screen name="Map" component={EmptyScreen} />
        <Tab.Screen name="Companies" component={CompaniesNavigator} />
        <Tab.Screen name="Profile" component={EmptyScreen} />
        <Tab.Screen name="About" component={AboutNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
