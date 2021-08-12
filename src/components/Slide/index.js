import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, Dimensions, Image, Alert, TouchableOpacity} from 'react-native';
import SlideVideo from './slideVideo'
import styles from './styles';
import {Storage} from 'aws-amplify';
import Ionicons from 'react-native-vector-icons/Ionicons';
import slideEdit from '../../assets/slide-edit.png'
import { useNavigation } from '@react-navigation/native'
import headshot from '../../assets/headshot.jpeg'

const CONTAINER_PADDING = Dimensions.get('window').width * .05
const VIDEO_SIZE = Dimensions.get('window').width - (CONTAINER_PADDING * 2)

{/* Slide component that includes profile, post, title, likes, and description. */}
const Slide = (props) => {
    const [post, setPost] = useState(props.post);
    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();
    //const [videoUri, setVideoUri] = useState('');


    // const getVideoUri = async () => {
    //     console.log(post)
    //     if (post.videoUri.startsWith('http')) {
    //       setVideoUri(post.videoUri);
    //       return;
    //     }
    //     setVideoUri(await Storage.get(post.videoUri));
    //   };
    
    // //called on Slide render to get video uri from storage
    // useEffect(() => {
    //     console.log(post)
    //     // console.log(post.videos)
    //     // console.log('slide post')
    //     // TODO: uncomment line
    //     //getVideoUri();
    // },[]);


    // const onPlayPausePress = () => {
    //     console.log('paused?')
    //     console.log(paused)
    //     setPaused(!paused);
    //     console.log(paused)
    // };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
        console.log(isLiked)
        console.log(post.likes)
    };

    const reportVideo = () =>
        Alert.alert(
            "Report Video?",
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
        //Renders slide video
        <SlideVideo index={index} videoUri={item.videoUri} videoSize={VIDEO_SIZE}/>, []
    );

    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id.toString(),[]
    );


    return (
        <View style={styles.container}>

            {/* Top handle info */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate("Profile")}>
                    <Image style={styles.profilePicture} source={{uri: post.user.imageUri}}/>
                    <View>
                        <Text style={styles.handleText}>{post.user.username}</Text>
                        <Text style={styles.timestampText}>{post.createdAt}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={reportVideo}>
                    <Image style={{ width: 40, height:40 }} source={slideEdit}/>
                </TouchableOpacity>
            </View>

  
            {/* FlatList of slide videos */}
            <View>
                <FlatList
                    data={post.videos}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    maxToRenderPerBatch={3}
                    snapToInterval={VIDEO_SIZE}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                />
            </View>

            {/* Video info */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                <View>
                    <Text style ={styles.titleText}>{post.slideTitle}</Text>
                    <Text style ={styles.locationText}>{post.location}</Text>
                </View>
                <TouchableOpacity style={styles.likeContainer} onPress={onLikePress}>
                    {isLiked ? 
                        <Ionicons name={'heart-outline'} size={25} color={'white'} /> :
                        <Ionicons name={'heart-sharp'} size={25} color={'white'} /> }
                </TouchableOpacity>
            </View>

            <Text>{post.description}</Text>

            <TouchableOpacity onPress={() => Alert.alert('Commenting feature is still in beta')}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
                    <Ionicons name={'chatbubble-outline'} size={25} color={'black'}/>
                    <Text style={[styles.timestampText, {color: 'black'}]}>Add a comment</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Slide;