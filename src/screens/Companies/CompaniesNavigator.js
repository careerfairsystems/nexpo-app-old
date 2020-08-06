import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import CompaniesScreenContainer from '../../containers/CompaniesScreen'
import CompanyDetailsScreenContainer from '../../containers/CompanyDetailsScreen'
import CompanyFilterScreenContainer from '../../containers/CompanyFilterScreen'
import ShowFavoritesButton from '../../containers/ShowFavoritesButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width

export default function CompaniesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CompaniesContainer"
                component={CompaniesScreenContainer}
                options={{
                    ...navigationOptions,
                    title: "Companies",
                    headerRight: () => (
                        < View style={styles.filterView} >
                            <View>
                                <ShowFavoritesButton />
                            </View>
                            <View style={styles.filterView}>
                                <TouchableOpacity
                                    style={styles.headerIcon}
                                    onPress={() => navigation.navigate('Filter')}
                                >
                                    {windowWidth < 350
                                        ? [
                                            <Icon
                                                name="filter"
                                                size={16}
                                                color="#fff"
                                                style={styles.icon}
                                            />,
                                            <Text style={[styles.buttonText, { fontSize: 9 }]}>
                                                Filter
                                              </Text>
                                        ]
                                        : [
                                            <Icon
                                                name="filter"
                                                size={21}
                                                color="#fff"
                                                style={styles.icon}
                                            />,
                                            <Text style={styles.buttonText}>Filter</Text>
                                        ]}
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name="CompanyDetailsScreenContainer"
                component={CompanyDetailsScreenContainer}
                options={({ route }) => ({
                    ...navigationOptions,
                    title: route.params.item.name
                })}
            />
            <Stack.Screen
                name="Filter"
                component={CompanyFilterScreenContainer}
                options={{
                    ...navigationOptions,
                    title: "Filter"
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

const styles = StyleSheet.create({
    headerIcon: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    filterView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 12,
        color: global.arkadGray,
        textAlign: 'center'
    },
    qrButton: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    qrText: {
        fontSize: 16,
        color: '#fff'
    },
    icon: {
        paddingHorizontal: 8
    }

})
