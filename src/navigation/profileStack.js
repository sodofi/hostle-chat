import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile'
import Activity from '../screens/Activity'
import Search from '../screens/Search'
import CreatePost from '../screens/CreatePost'
import EditProfile from '../screens/Profile/editProfile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/logo.png'

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
            <Stack.Navigator
                // screenOptions={{
                //     headerShown: true,
                // }}
            
            >
                <Stack.Screen 
                    name="Profile" 
                    component={Profile} 
                     />
                        
                        
                <Stack.Screen 
                    name="CreatePost" 
                    component={CreatePost} 
                    options={({navigation, route}) => ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Ionicons name={'chevron-back'} size={25} color={'black'} />
                            </TouchableOpacity>
                        ),
                        title: "Post",
                        headerTitleStyle: {
                          fontSize: 16,
                          fontWeight: '600'
                        }
                    })}
                />
                <Stack.Screen 
                    name="EditProfile" 
                    component={EditProfile} 
                    options={({navigation, route}) => ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Ionicons name={'chevron-back'} size={25} color={'black'} />
                            </TouchableOpacity>
                        ),
                        title: "Edit Profile",
                        headerTitleStyle: {
                          fontSize: 16,
                          fontWeight: '600'
                        }
                    })}
                />
                <Stack.Screen 
                    name="Activity" 
                    component={Activity} 
                    options={({navigation, route}) => ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Ionicons name={'chevron-back'} size={25} color={'black'} />
                            </TouchableOpacity>
                        ),
                        title: "Activity",
                        headerTitleStyle: {
                          fontSize: 16,
                          fontWeight: '600'
                        }
                    })}
                />
                <Stack.Screen 
                    name="Search" 
                    component={Search} 
                    options={({navigation, route}) => ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Ionicons name={'chevron-back'} size={25} color={'black'} />
                            </TouchableOpacity>
                        ),
                        title: "Search",
                        headerTitleStyle: {
                          fontSize: 16,
                          fontWeight: '600'
                        }
                    })}
                />
                
            </Stack.Navigator>
    )
};

export default RootNavigation;