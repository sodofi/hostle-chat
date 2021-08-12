import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import headshot from '../../assets/headshot.jpeg'
import styles from './styles'

import { useIsFocused } from "@react-navigation/native";

import ProfilePost from '../../components/ProfilePost';
import data from '../../../data/slides'
import profileData from '../../../data/profile'
import { color } from 'react-native-reanimated';

//import { Auth, API, graphqlOperation} from 'aws-amplify';

//import { getUser } from '../../graphql/queries';

//import Amplify from 'aws-amplify'
//import config from '../../aws-exports'

//Amplify.configure(config)

const Profile = () => {

    const [profile, setProfile] = useState(profileData)
    const [posts, setPosts] = useState(data);
    const [username, setUsername] = useState([]);
    const [profilePic, setProfilePic] = useState(null);

    const isFocused = useIsFocused();
    const navigation = useNavigation();

    // useEffect(() => {
    //     const fetchUser = async () => {
            
    //         try {
    //             const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
    //             //check if the user exits in database
    //             const getUserResponse = await API.graphql(
    //                 graphqlOperation(
    //                 getUser, {id: userInfo.attributes.sub}
    //                 )
    //             );
    //             //console.log(getUserResponse.data.getUser.username)
    //             setUsername(getUserResponse.data.getUser.username)
    //             // console.log("POSTS:")
    //             // console.log(getUserResponse.data.getUser.posts)
    //             setPosts(getUserResponse.data.getUser.posts.items)
    //             setProfilePic(getUserResponse.data.getUser.imageUri)
    //             //console.log("ACTIVE USER: ")
    //             console.log(profilePic);

    //         } catch (e) {
    //             console.error(e);
    //         }
    //     };
    //     fetchUser();
    // }, [isFocused])

    useEffect(() => {
        console.log(profile);
    }, [])

    //optimized renderItem
    const renderItem = useCallback(
        ({item, index}) => 
        <TouchableOpacity onLongPress={() => Alert.alert('test')}>
            <ProfilePost post={item} mode='small' index={index} currentIndex={index}/>
        </TouchableOpacity>
        , []
    );

    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id.toString(),[]
    );
    return(
        <View style={styles.container}>

            {/* Top half UI */}
            <View style={styles.topContainer}>
                {/* <Image style={styles.image} source={{uri: profilePic}}/> */}
                <Image style={styles.image} source={{uri: profile.imageUri}}/>
                {/* <Text style={styles.usernameText}>@{username}</Text> */}
                <View style={styles.topRightContainer}>
                    <Text style={styles.numberText}>{profile.name}</Text>
                    <Text style={styles.usernameText}>{profile.username}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile")}>
                        {/* TODO: if getUser = current authenticated user ? edit : subscribe */}
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 14}}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
                
            {/* Middle half UI */}
            <View style={styles.middleContainer}>
                <View style={styles.middleTextContainer}>
                    <Text style={styles.numberText}>{profile.posts.length}</Text>
                    <Text style={styles.middleText}>   Slides   </Text>
                </View>
                <View style={styles.middleTextContainer}>
                    <Text style={styles.numberText}>{profile.followers}</Text>
                    <Text style={styles.middleText}>Subscribers</Text>
                </View>
                <View style={styles.middleTextContainer}>
                    <Text style={styles.numberText}>{profile.following}</Text> 
                    <Text style={styles.middleText}>Subscribed</Text> 
                </View>
            </View>

            {/* Slides */}
            {/* TODO: add modal on long press*/}
            <FlatList
                contentContainerStyle={{margin:20}}  
                data={profile.posts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal={false}
                numColumns={2}
                maxToRenderPerBatch={3}   
            />
        </View>
        
    )
}

export default Profile;