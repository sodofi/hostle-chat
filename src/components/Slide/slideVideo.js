import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av';

const CONTAINER_PADDING = Dimensions.get('window').width * .05
const VIDEO_SIZE = Dimensions.get('window').width - (CONTAINER_PADDING * 2)

const SlideVideo = (props) => {

    const [paused, setPaused] = useState(true);
    const [videoUri, setVideoUri] = useState('');

    const getVideoUri = async () => {
        console.log(post)
        if (props.videoUri.startsWith('http')) {
          setVideoUri(post.videoUri);
          return;
        }
        setVideoUri(await Storage.get(props.videoUri));
      };
    
    //called on Slide render to get video uri from storage
    useEffect(() => {
        console.log(props)
        // TODO: uncomment line
        //getVideoUri();
    },[]);

    const onPlayPausePress = () => {
        console.log('paused?')
        console.log(paused)
        setPaused(!paused);
        console.log(paused)
    };

    return (
        <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoContainer}>
                <View>
                    <Video
                        source={{uri: props.videoUri}}
                        style={styles.video}
                        onError={(e) => console.log(e)}
                        resizeMode= {'cover'}
                        isLooping = {true}
                        shouldPlay={!paused}
                    />

                    <View style={styles.pauseButton}>
                        <Ionicons name={'caret-forward'} size={80} color={paused ? 'white' : 'transparent'} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    pauseButton: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: VIDEO_SIZE/2 - 40,
    }, 
    video: {
        width: VIDEO_SIZE,
        height: VIDEO_SIZE,
        borderRadius: 20,
    },
    videoContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: VIDEO_SIZE,
        height: VIDEO_SIZE,
    },
})

export default SlideVideo;