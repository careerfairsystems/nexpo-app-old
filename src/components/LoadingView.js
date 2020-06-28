import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorBackground: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  loadingText: { marginTop: 10, color: '#000', fontSize: 13 }
}

const { container, indicatorBackground, loadingText } = styles
const LoadingView = () => (
  <View style={container}>
    <View style={indicatorBackground}>
      <ActivityIndicator size="large" color={global.arkadBlue}/>
      <Text style={loadingText}>Loading...</Text>
    </View>
  </View>
)

export default LoadingView
