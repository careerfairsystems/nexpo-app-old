import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EventListScreen from './EventListScreen';
import EventDetailsScreen from './EventDetailsScreen';
import EventsScreen from '../../containers/EventsScreen';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function EventNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="EventContainer"
                component={EventsScreen}
                options={{
                    ...navigationOptions,
                    title: "Events"
                }}
            />
            <Stack.Screen
                name="EventDetailsScreen"
                component={EventDetailsScreen}
                options={({ route }) => ({
                    ...navigationOptions,
                    title: route.params.item.name
                })}
            />
        </Stack.Navigator>
    )
}

const navigationOptions = {
    headerStyle: {
        backgroundColor: global.arkadBlue,
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff'
}

const styles = StyleSheet.create({})
