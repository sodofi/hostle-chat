import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Camera from '../screens/Camera'
import CreatePost from '../screens/CreatePost'
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/logo.png'

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                }}
            
            >
                <Stack.Screen 
                    name="Camera" 
                    component={Camera} 
                    options={{headerShown: false}}
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
            </Stack.Navigator>
    )
};

export default RootNavigation;