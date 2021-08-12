import React from 'react'
import {View, Image, TouchableOpacity, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Activity from '../screens/Activity'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import CreatePost from '../screens/CreatePost'
import EditProfile from '../screens/Profile/editProfile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import logo from '../assets/logo.png'

const Stack = createStackNavigator();

{/* Navigation stack for home, search, and activity screens */}

const RootNavigation = () => {
    return (
            <Stack.Navigator>
                {/* Home screen that has posts */}
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={({navigation, route}) => ({
                        headerLeft: () => (
                            <Image style={{marginLeft: 20, width: 80, resizeMode: 'contain'}} source={logo}/>
                        ),
                        headerRight: () => (
                            <View style={{flexDirection: 'row', marginRight: 20}}>
                                <TouchableOpacity style={{marginHorizontal: 15}} onPress={() => navigation.navigate('Search')}>
                                    <Ionicons name={'search'} size={25} color={'black'} />
                                </TouchableOpacity>

                                {/* TODO: eventually change to navigate to activity screen */}
                                <TouchableOpacity onPress={() => Alert.alert('Activity page is still in beta')}>
                                    <Entypo name={'heart-outlined'} size={25} color={'black'} />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerTitleStyle: {color: 'white'},
                        headerStyle: {height: 50}
                    })} />
                        
                        
                {/* Search screen */}
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

                {/* Activity notifications */}
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

                {/* Profile */}
                <Stack.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={({navigation, route}) => ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Ionicons name={'chevron-back'} size={25} color={'black'} />
                            </TouchableOpacity>
                        ),
                        title: "Profile",
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