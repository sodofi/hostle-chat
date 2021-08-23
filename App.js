import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler'
import TabNavigation from './src/navigation/homeBottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';

import {createUser} from './src/graphql/mutations';
import {getUser} from './src/graphql/queries';

//import backend from AWS
// import Amplify from 'aws-amplify'
// import config from './src/aws-exports'
// Amplify.configure(config)

{/* First render of app. Calls tab navigator screens. */}

const App = () => {

  useEffect(() => {
    const fetchUser = async () => {
      // get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      //console.log(userInfo);
      if (!userInfo) {
        return;
      }

    //   // check if THE user exist in database
      const getUserResponse = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );

      if (getUserResponse.data.getUser) {
        console.log('User already exists in database');
        return;
      }

    //   // if it doesn't (it's newly registered user)
    //   // then, create a new user in database
      const newUser = {
        id: userInfo.attributes.sub,
        name: userInfo.username,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
      };
      console.log(newUser)

      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };

    fetchUser();
  }, []);


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