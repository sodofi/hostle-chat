import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler'
import TabNavigation from './src/navigation/homeBottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

import {withAuthenticator} from 'aws-amplify-react-native';

//import backend from AWS
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

{/* First render of app. Calls tab navigator screens. */}

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden='false' style="dark" /> 
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default withAuthenticator(App);