import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet, Alert, Modal, Button, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import headshot from '../../assets/headshot.jpeg'
import styles from './styles'

import { useIsFocused } from "@react-navigation/native";

import ProfilePost from '../../components/ProfilePost';
import data from '../../../data/slides'
import profileData from '../../../data/profile'
//import { color } from 'react-native-reanimated';

import { Auth, API, graphqlOperation} from 'aws-amplify';

import { getUser } from '../../graphql/queries';

import Amplify from 'aws-amplify'
import config from '../../aws-exports'

Amplify.configure(config)

const Profile = () => {

    //const [profile, setProfile] = useState(null);
    // const [modalVisible, setModalVisible] = useState(false);
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState([]);
    const [name, setName] = useState([]);
    const [imageUri, setImageUri] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    const isFocused = useIsFocused();
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
            
            try {
                const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
                //check if the user exits in database
                const getUserResponse = await API.graphql(
                    graphqlOperation(
                    getUser, {id: userInfo.attributes.sub}
                    )
                );
                console.log(getUserResponse.data.getUser)
                //setProfile(getUserResponse.data.getUser)
                //console.log(getUserResponse.data.getUser.username)
                setUsername(getUserResponse.data.getUser.username)
                setName(getUserResponse.data.getUser.name)
                //setUsernam
                // console.log("POSTS:")
                //console.log(getUserResponse.data.getUser.posts)
                setPosts(getUserResponse.data.getUser.posts.items)
                setImageUri(getUserResponse.data.getUser.imageUri)
                //console.log("ACTIVE USER: ")
                //console.log(getUserResponse);

            } catch (e) {
                console.error(e);
            }
        };
        fetchUser();
    }, [isFocused])

    // useEffect(() => {
    //   console.log('PROFILE')
    //     console.log(profile);
    //     console.log('done')
    // }, [])

    //optimized renderItem
    const renderItem = useCallback(
        ({item, index}) =>
        <ProfilePost post={item} mode='small' index={index} currentIndex={index}/> 
        , []
    );

    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id.toString(),[]
    );

    // if(!profile){
    //   <ActivityIndicator size="large" color="black"/>
    //   return;
    // }

    return(
      
      // <View>
      //   {profile ? 
      //   <Text>{profile.imageUri}</Text> :
      //   <Text>not loaded</Text>
      // }
      // </View>

        <View style={styles.container}>
          {/* {profile ? } */}

            {/* Top half UI */}
            <View style={styles.topContainer}>
                {/* <Image style={styles.image} source={{uri: profile.imageUri}}/> */}
                <Image style={styles.image} source={{uri: imageUri}}/>
                <View style={styles.topRightContainer}>
                    <Text style={styles.numberText}>{name}</Text>
                    <Text style={styles.usernameText}>@{username}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile")}>
                        {/* TODO: if getUser = current authenticated user ? edit : subscribe */}
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 14}}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
                
            {/* Middle half UI */}
            <View style={styles.middleContainer}>
                <View style={styles.middleTextContainer}>
                    <Text style={styles.numberText}>{posts.length}</Text>
                    <Text style={styles.middleText}>   Slides   </Text>
                </View>
                <View style={styles.middleTextContainer}>
                    <Text style={styles.numberText}>{followers.length}</Text>
                    <Text style={styles.middleText}>Subscribers</Text>
                </View>
                <View style={styles.middleTextContainer}>
                    <Text style={styles.numberText}>{following.length}</Text> 
                    <Text style={styles.middleText}>Subscribed</Text> 
                </View>
            </View>

            {/* Slides */}
            {/* TODO: add modal on long press*/}
            <FlatList
                contentContainerStyle={{margin:20}}  
                data={posts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal={false}
                numColumns={2}
                maxToRenderPerBatch={3}   
            />
        </View>
        
    )
}

const modalStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default Profile;