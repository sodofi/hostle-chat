import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Activity from '../screens/Activity'
import Search from '../screens/Search'
import CreatePost from '../screens/CreatePost'
import EditProfile from '../screens/Profile/editProfile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
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
                    name="Home" 
                    component={Home} 
                    options={({navigation, route}) => ({
                        headerLeft: () => (

                            <Image style={{marginLeft: 20, width: 80, resizeMode: 'contain'}} source={logo}/>
                        ),
                        headerRight: () => (
                            <View style={{flexDirection: 'row', marginRight: 20}}>
                                <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => navigation.navigate('Search')}>
                                    <Ionicons name={'search'} size={25} color={'black'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                    <Entypo name={'heart-outlined'} size={25} color={'black'} />
                                </TouchableOpacity>
                                
                            </View>
                        ),
                        headerTitleStyle: {color: 'white'},
                        headerStyle: {height: 50}
                    })} />
                        
                        
               
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
                
            </Stack.Navigator>
    )
};

export default RootNavigation;