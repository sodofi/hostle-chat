import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, Image, Alert, TouchableOpacity} from 'react-native';
import { Audio, Video } from 'expo-av';
import styles from './styles';
//import {Storage} from 'aws-amplify';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Slide = (props) => {
    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false);
    const [paused, setPaused] = useState(false);   
    //const [isPlaying, setIsPlaying] = useState(true)        
    //const [videoUri, setVideoUri] = useState('');

    //if post is not visible, pause video
    // if(props.currentIndex.current != props.index && isPlaying == true){
    //     console.log('post not visible')
    //     setPaused(true);
    //     setIsPlaying(false);
    // } else {
    //     console.log('post ' + props.index + ' visible at ' + props.currentIndex.current);
    //     //setPaused(false);
    //     //setIsPlaying(true);
    // }

    // const getVideoUri = async () => {
    //     console.log(post)
    //     if (post.videoUri.startsWith('http')) {
    //       setVideoUri(post.videoUri);
    //       return;
    //     }
    //     setVideoUri(await Storage.get(post.videoUri));
    //   };
    
    useEffect(() => {
        console.log(post)
        console.log(post.id)
        //getVideoUri();
    },[]);


    const onPlayPausePress = () => {
        console.log('paused?')
        //console.log(props.currentIndex.current)
        console.log(post)
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
        console.log("likes")
        console.log(post.likes)
    };

    const onComment = () => 
        Alert.alert(
            "Not available", "Comment feature is in beta",
            [
                {
                    text: "Ok",
                    style: "cancel",
                },
            ],
            { cancelable: false }
        );


    const reportVideo = () =>
        Alert.alert(
            "Report Video",
            "Your report is annonymous",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Report",
                    onPress: () => console.log("Ok pressed"),
                    style: "cancel"
                }
            ],
            { cancelable: false }
        );


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoPlayButton}>
                <View>
                    <Video
                        source={{uri: post.videoUri}}
                        style={styles.video}
                        onError={(e) => console.log(e)}
                        resizeMode= {'cover'}
                        isLooping = {true}
                        shouldPlay={!paused}
                        //shouldPlay={(props.currentIndex.current == props.index)}
                    />

                    <View style={styles.pauseButton}>
                        <Ionicons name={'caret-forward'} size={80} color={paused ? 'white' : 'transparent'} />
                    </View>
                

                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <Image style={styles.profilePicture} source={{uri: post.user.imageUri}}/>
                        
                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <Ionicons name={'heart'} size={40} color={isLiked ? 'red' : 'white'}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconContainer} onPress={onComment}>
                                <Ionicons name={'chatbubble-ellipses'} size={35} color="white" />
                            </TouchableOpacity>

                            
                        </View>

                        <View style={styles.bottomContainer}>
                            <View> 
                                
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>

                            </View>

                            <TouchableOpacity style={styles.iconContainer} onPress={reportVideo}>
                                <Ionicons name={'ellipsis-horizontal'} style={{paddingRight: 10}}size={30} color="white" />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Slide;