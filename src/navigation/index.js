import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import HomeBottomTabNavigator from './homeBottomTabNavigator'
// import CreatePost from '../screens/CreatePost'
// import EditProfile from '../screens/Profile/editProfile'
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.screen name="Home" component
            </Stack.Navigator> */}

        </NavigationContainer>
    )
}

export default RootNavigation;