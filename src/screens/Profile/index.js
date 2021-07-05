import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import headshot from '../../assets/headshot.jpeg'
import styles from './styles'

import { useIsFocused } from "@react-navigation/native";

import ProfilePost from '../../components/ProfilePost';
import data from '../../../data/slides'
import { color } from 'react-native-reanimated';

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
                {/* <Image style={styles.image} source={{uri: profilePic}}/> */}
                <Image style={styles.image} source={headshot}/>
                {/* <Text style={styles.usernameText}>@{username}</Text> */}
                <View style={styles.topRightContainer}>
                    <Text style={styles.numberText}>Sophia Dew</Text>
                    <Text style={styles.usernameText}>@sophiadew</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile")}>
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 14}}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
                

                <View style={styles.middleContainer}>
                    <View style={styles.middleTextContainer}>
                        <Text style={styles.numberText}>130</Text>
                        <Text style={styles.middleText}>   Slides   </Text>
                    </View>
                    <View style={styles.middleTextContainer}>
                        <Text style={styles.numberText}>872K</Text>
                        <Text style={styles.middleText}>Followers</Text>
                    </View>
                    <View style={styles.middleTextContainer}>
                        <Text style={styles.numberText}>40</Text> 
                        <Text style={styles.middleText}>Following</Text> 
                    </View>
                </View>
            {/* </View> */}

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

export default Profile;