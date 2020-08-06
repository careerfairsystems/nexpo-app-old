import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CompanyDetailsScreenContainer from '../../containers/CompanyDetailsScreen'
import MapScreen from '../../screens/Map/MapScreen'
import HouseScreenContainer from '../../containers/HouseScreen'
import SubtitleHeader from '../../components/SubtitleHeader'
import MapActionSheet from '../../containers/MapActionSheet'

const Stack = createStackNavigator();

export default function MapNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    headerMode: 'screen',
                    headerTitle: () => {
                        return (
                            <SubtitleHeader 
                            title="The ARKAD area"
                            subtitle="Click on a building"
                            />
                        )
                    },
                    ...navigationOptions,
                    title: "Map"
                }}
            />
            <Stack.Screen
                name="HouseScreen"
                component={HouseScreenContainer}
                options= {{
                    ...navigationOptions,
                    headerTitle: <MapActionSheet />
                    }}
                
            />
            <Stack.Screen
                name="CompanyDetails"
                component={CompanyDetailsScreenContainer}
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
