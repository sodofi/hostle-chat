import React, {useState, useCallback, useEffect} from 'react';
import {View, Alert, Text, TouchableWithoutFeedback, FlatList, Dimensions, Modal, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
import {Video } from 'expo-av';
import SlideVideo from '../Slide/slideVideo'
import Slide from '../Slide'
import styles from './styles';
import moment from 'moment';

const VIDEO_SIZE_2 = Dimensions.get('window').width - 100

//const CONTAINER_PADDING = Dimensions.get('window').width * .05
//const VIDEO_SIZE = Dimensions.get('window').width - (CONTAINER_PADDING * 2)
const VIDEO_SIZE = Dimensions.get('window').width/2 - 25
const ITEM_HEIGHT = Dimensions.get('window').height-350;



//import {API, graphqlOperation} from 'aws-amplify'
//import { deletePost } from '../../graphql/mutations';
//import {Storage} from 'aws-amplify';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Renders user's posts to display in profile
const Post = (props) => {
    const [post, setPost] = useState(props.post);
    const [modalVisible, setModalVisible] = useState(false);
    //const [isLiked, setIsLiked] = useState(false);
    //const [paused, setPaused] = useState(false);   
    //const [isPlaying, setIsPlaying] = useState(true)        
    //const [videoUri, setVideoUri] = useState('');

    // const getVideoUri = async () => {
    //     console.log(post)
    //     console.log('profile')
    //     console.log(post.videos)
    //     if (post.videos.videoUri.startsWith('http')) {
    //       setVideoUri(post.videoUri);
    //       return;
    //     }
    //     //setVideoUri(await Storage.get(post.videoUri));
    //   };
    
    //   useEffect(() => {
    //     getVideoUri();
    //   },[]);


    // const onPlayPausePress = () => {
    //     console.log(paused)
    //     setPaused(!paused);
    // };

    const deleteVideo = async (post) => 
        Alert.alert(
        post.description,
        "Are you sure you want to delete this video?",
        [
            {
                text: "Cancel",
                onPress: () => console.log(post),
                style: "cancel",
            },
            {
                text: "Delete",
                //onPress: () => console.log(post.id),
                //onPress: () =>  API.graphql(graphqlOperation(deletePost, {input: {id:post.id}})),
                style: "cancel"
            }
        ],
        { cancelable: false }
    );

    //optimized renderItem
    const renderItem = useCallback(
        ({item, index}) => 
        //Renders slide video
        <SlideVideo index={index} videoUri={item.videoUri} videoSize={VIDEO_SIZE} />, []
    );
    
    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id,[]
    );


    return (
        
        <View style={styles.container}>
            <FlatList
                data={post.slides}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                maxToRenderPerBatch={3}
                snapToInterval={VIDEO_SIZE + 20}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <Text style={styles.header1}>{post.title}</Text>
                <Text style={styles.header2}>{moment(post.createdAt).format("MMMM DD, Y")}</Text>
            </TouchableOpacity>

            
            <View style={prevStyles.container}>
            <TouchableOpacity onLongPress={()=>setModalVisible(false)}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={prevStyles.centeredView}>
                    <Pressable
                        style={[prevStyles.button, prevStyles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Ionicons name={'close'} size={35} color={'white'} />
                    </Pressable>
                    <View style={prevStyles.modalView}>
                    <Slide post={post} videoSize={VIDEO_SIZE_2} itemHeight={ITEM_HEIGHT}/>
                    {/* <View style={prevStyles.modalView}> */}
                        {/* <Slide post={post}/> */}
                        {/* <Text style={prevStyles.modalText}>Hello World!</Text> */}
                        
                    {/* </View> */}
                    </View>
                    </View>
                </Modal>
                </TouchableOpacity>
                </View>
               
                


            {/* <Text style={styles.header1}>{post.slideTitle}</Text>
            <Text style={styles.header2}>{post.createdAt}</Text> */}
        </View>
    )
}

const prevStyles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      //alignItems: "center",
      backgroundColor: 'rgba(0,0,0,0.5)',
      //marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 8,
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
        position: 'absolute',
        top: 145,
        left: 10,
        borderRadius: 100,
        padding: 5,
        elevation: 2,
        zIndex: 1,
        backgroundColor: '#30A6A6'
    },
    buttonOpen: {
      backgroundColor: "#30A6A6",
    },
    buttonClose: {
      backgroundColor: "#30A6A6",
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
  

export default Post;