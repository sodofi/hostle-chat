import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Home from './src/screens/Home'
import 'react-native-gesture-handler'
import TabNavigation from './src/navigation/homeBottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
//import config from './aws-exports'
Amplify.configure(config)

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   {/* <Home />
    //   <StatusBar style="auto" /> */}
    //   <Navigation/>
    // </View>
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <AntDesign name={'stepforward'} size={30} />
      <StatusBar style="auto" /> */}
      <StatusBar hidden='false' translucent='true' style="light" backgroundColor='blue' /> 
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
