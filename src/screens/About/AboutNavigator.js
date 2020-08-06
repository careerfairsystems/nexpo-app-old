import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AboutScreenContainer from '../../containers/AboutScreen';
import ArkadTeamScreenContainer from '../../containers/ArkadTeamScreen'
import FaqScreenContainer from '../../containers/FaqScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function AboutNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={AboutScreenContainer}
                options={{
                    ...navigationOptions,
                    title: "About"
                }}
            />
            <Stack.Screen
                name="ArkadTeam"
                component={ArkadTeamScreenContainer}
                options={{
                    ...navigationOptions,
                    title: "The ARKAD team"
                }}
            />
             <Stack.Screen
                name="Faq"
                component={FaqScreenContainer}
                options={{
                    ...navigationOptions,
                    title: "Faq"
                
                }}
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
