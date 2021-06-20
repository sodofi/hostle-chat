import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
//import Search from '../screens/Search'
import Camera from '../screens/Camera'
//import Inbox from '../screens/Inbox'
import Profile from '../screens/Profile'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//import plusIcon from '../assets/plus-icon.png'

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return(
        <Tab.Navigator 
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: '#000'
                },
                activeTintColor: "#fff",
            }}>
            <Tab.Screen 
                name={'Home'} 
                component={Home} 
                options={{
                    tabBarIcon: () => (
                        <Entypo name={'home'} size={24} />
                    )
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
                component={Camera} 
                options={{
                    tabBarIcon: ({}) => (
                        <AntDesign name={'search1'} size={24} />
                    )
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
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name={'person-outline'} size={24} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeBottomTabNavigator;