import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
//import headshot from '../../assets/headshot.jpeg'
import styles from './styles'

import { useIsFocused } from "@react-navigation/native";

import ProfilePost from '../../components/ProfilePost';
import data from '../../../data/slides'

//import { Auth, API, graphqlOperation} from 'aws-amplify';

//import { getUser } from '../../graphql/queries';

//import Amplify from 'aws-amplify'
//import config from '../../aws-exports'

//Amplify.configure(config)

const Profile = () => {

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

    //optimized renderItem
    const renderItem = useCallback(
        ({item, index}) => 
        <ProfilePost post={item} mode='small' index={index} currentIndex={index}/>, []
    );

    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id.toString(),[]
    );
    return(
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Image style={styles.image} source={{uri: profilePic}}/>
                {/* <Image style={styles.image} source={headshot}/> */}
                <Text style={styles.usernameText}>@{username}</Text>

                <View style={styles.middleContainer}>
                    <View style={styles.middleTextContainer}>
                        <Text style={styles.numberText}>100</Text>
                        <Text style={styles.middleText}>Followers</Text>
                    </View>
                    <View style={styles.middleTextContainer}>
                        <Text style={styles.numberText}>8761</Text>
                        <Text style={styles.middleText}>Following</Text>
                    </View>
                    <View style={styles.middleTextContainer}>
                        <Text style={styles.numberText}>150K</Text> 
                        <Text style={styles.middleText}>Likes</Text> 
                    </View>
                </View>

                <View style={styles.middleContainer}>
                    <TouchableOpacity style={styles.border} onPress={() => navigation.navigate("EditProfile")}>
                        <Text>     Edit profile     </Text>
                    </TouchableOpacity>
                    <View style={styles.border}>
                        <Ionicons name={'bookmark-outline'} size={20} color={'black'} />
                    </View>
                </View>

                <Text style={styles.bio}>Welcome to my fake profile made on a TikTok clone! </Text>  
            </View>

            <View style={styles.line}/>
                <View style={{marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Ionicons name={'md-apps'} style={styles.icon} size={20} color={'black'} />
                    <Ionicons name={'heart-outline'} style={styles.icon} size={20} color={'gray'} />
                    <Ionicons name={'ios-lock-closed-outline'} style={styles.icon} size={20} color={'gray'} />
                </View>
                

            <View style={styles.line}/>

            <FlatList
                contentContainerStyle={{margin:4}}  
                data={posts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal={false}
                numColumns={3}
                maxToRenderPerBatch={3}
            />
        </View>
        
    )
}

export default Profile;