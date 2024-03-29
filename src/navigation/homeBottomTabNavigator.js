import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeStack from './homeStack'
import CameraStack from './cameraStack'
import ProfileStack from './profileStack'

//post button image
import Post from '../assets/post.png'

//icons
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

{/* Tab navigator for home, camera, and profile stacks */}

const HomeBottomTabNavigator = () => {
    return(
        <Tab.Navigator 
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: '#fff'
                },
                showLabel: false,
            }}>
            <Tab.Screen 
                name={'Home'} 
                component={HomeStack} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons name={focused? 'home' : 'home-outline'} size={24} />
                    ),
                    
                    
                    
                }}
            />
            {/* <Tab.Screen 
                name={'Search'} 
                component={Search} 
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name={'search1'} size={24} color={color} />
                    )
                }}
            /> */}
            <Tab.Screen 
                name={'Camera'} 
                component={CameraStack} 
                options={{
                    tabBarIcon: ({}) => (
                        <Image source={Post} style={{width: 40, height: 40}} />
                    ),
                    tabBarLabel: 'Camera',
                    unmountOnBlur: true,
                }}
            />
            {/* <Tab.Screen 
                name={'Inbox'} 
                component={Inbox} 
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={'message-minus-outline'} size={24} color={color} />
                    )
                }}
            /> */}
            <Tab.Screen 
                name={'Profile'} 
                component={ProfileStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons name={focused? 'person' : 'person-outline'} size={24} />
                    ), 
                    tabBarLabel: 'Profile',
                    unmountOnBlur: true,
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeBottomTabNavigator;