import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'

export default function URLText(props) {

    if(typeof props.url !== 'undefined'){
        return (
            <View>
                <Text style={{color: global.arkadBlue}} onPress={() => Linking.openURL(props.url)}>{props.url}</Text>
            </View>
        )
    }
    else{
        return(
            <View>

            </View>
        )
    }


 
}

const styles = StyleSheet.create({})
