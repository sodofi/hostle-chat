import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, Dimensions, TouchableWithoutFeedback, Image, Alert, TouchableOpacity, Button} from 'react-native';
import { Audio, Video } from 'expo-av';
import styles from './styles';
//import {Storage} from 'aws-amplify';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import slideEdit from '../../assets/slide-edit.png'
//delete later
import headshot from '../../assets/headshot.jpeg'
import { ScrollView } from 'react-native-gesture-handler';

const CONTAINER_PADDING = Dimensions.get('window').width * .05
const VIDEO_SIZE = Dimensions.get('window').width - (CONTAINER_PADDING * 2)

const Slide = (props) => {
    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false);
    const [paused, setPaused] = useState(true);   
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
        console.log(post.videos)
        console.log('slide post')
        //getVideoUri();
    },[]);


    const onPlayPausePress = () => {
        console.log('paused?')
        //console.log(props.currentIndex.current)
        console.log(post)
        console.log('hey bella!')
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

    //optimized renderItem
    const renderItem = useCallback(
        ({item, index}) => 
            <Video
            source={{uri: item.videoUri}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode= {'cover'}
            isLooping = {true}
            shouldPlay={!paused}
        />, []
    );

    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id.toString(),[]
    );


    return (
        <View style={styles.container}>

            {/* Top handle info */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Image style={styles.profilePicture} source={headshot}/>
                    <View>
                        <Text style={styles.handleText}>sophiadew</Text>
                        <Text style={styles.timestampText}>6 minutes ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Image style={{ width: 40, height:40 }} source={slideEdit}/>
                </TouchableOpacity>
            </View>

            {/* <TouchableWithoutFeedback style={styles.videoPlayButton}> */}
            {/* <TouchableWithoutFeedback>
                <View> */}
                    {/* <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoContainer}> */}
                    {/* <TouchableWithoutFeedback> */}
                        <View>
                            {/* <Video
                                source={{uri: post.videoUri}}
                                style={styles.video}
                                onError={(e) => console.log(e)}
                                resizeMode= {'cover'}
                                isLooping = {true}
                                shouldPlay={!paused}
                            /> */}

                            {/* <Text>{post.id}</Text> */}
                            {/* <ScrollView horizontal> */}
                            <FlatList
                                data={post.videos}
                                renderItem={renderItem}
                                keyExtractor={keyExtractor}
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                //maxToRenderPerBatch={3}
                                //viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                                //showsVerticalScrollIndicator={true}
                                snapToInterval={VIDEO_SIZE}
                                snapToAlignment={'start'}
                                decelerationRate={'fast'}
                            />

                            {/* </ScrollView> */}
                            

                            {/* <View style={styles.pauseButton}>
                                <Ionicons name={'caret-forward'} size={80} color={paused ? 'white' : 'transparent'} />
                            </View> */}
                        </View>
                    {/* </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback> */}

            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                <View>
                    <Text style ={styles.titleText}>Title of vlog</Text>
                    <Text style ={styles.locationText}>Location</Text>
                </View>
                <TouchableOpacity style={styles.likeContainer} onPress={()=>console.log('pressed')}>
                    <Ionicons name={'heart-outline'} size={25} color={'white'} />
                </TouchableOpacity>
            </View>

            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

        </View>
    )
}

export default Slide;