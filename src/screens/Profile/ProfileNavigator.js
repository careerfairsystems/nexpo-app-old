import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreenContainer from '../../containers/ProfileScreenContainer'
import CameraContainer from '../../containers/CameraContainer'
import CompanyStudentCardContainer from '../../containers/CompanyStudentCardContainer'
import CompanyDetailsScreenContainer from '../../containers/CompanyDetailsScreen'

const Stack = createStackNavigator();

export default function ProfileNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreenContainer}
                options={({ route }) => ({
                    ...navigationOptions,
                    title: "Scanning",
                    /*header: route.params
                        ? route.params.header
                        : null,
                    headerRight: route.params
                        ? route.params.headerRight
                        : undefined,
                    headerLeft: route.params
                        ? route.params.headerLeft
                        : undefined 
                        Vet ej vad detta gör men den verkar fungera utan det ändå?
                        */
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
