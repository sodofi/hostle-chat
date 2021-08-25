
import React, {useEffect, useRef, useCallback, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Switch, ActivityIndicator, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import { Audio, Video } from 'expo-av';
//import profileData from '../../../data/profile'

const WINDOW_WIDTH = Dimensions.get("window").width;
import {Storage, API, graphqlOperation, Auth} from 'aws-amplify';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createPost} from '../../graphql/mutations';
import { updatePost } from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';

const AddPost = () => {
    //const [description, setDescription] = useState('');
    const [videoKey, setVideoKey] = useState(null);
    const [posts, setPosts] = useState([]);
    //const videoKey = true;
    const route = useRoute();
    const videoUri = route.params.videoUri;
    const navigation = useNavigation();

  const uploadToStorage = async (imagePath) => {
    try {
      const response = await fetch(imagePath);

      const blob = await response.blob();

      const filename = `${uuidv4()}.mp4`;
      const acl = 'public-read'
      // const s3Response = await Storage.put(filename, blob, {
      //   acl: 'public-read'
      // });

      const s3Response = await Storage.put(filename, blob, acl);

      setVideoKey(s3Response.key);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
      console.log(route.params.videoUri);
      console.log('videoUri: ' + videoUri)
      uploadToStorage(route.params.videoUri);
      const fetchUser = async () => {
            
        try {
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
            //check if the user exits in database
            const getUserResponse = await API.graphql(
                graphqlOperation(
                getUser, {id: userInfo.attributes.sub}
                )
            );
            //console.log(getUserResponse.data.getUser)
            //setProfile(getUserResponse.data.getUser)
            //console.log(getUserResponse.data.getUser.username)
            //setUsername(getUserResponse.data.getUser.username)
            //setName(getUserResponse.data.getUser.name)
            //setUsernam
            console.log("POSTS:")
            console.log(getUserResponse.data.getUser.posts)
            setPosts(getUserResponse.data.getUser.posts.items)
            //setImageUri(getUserResponse.data.getUser.imageUri)
            //console.log("ACTIVE USER: ")
            //console.log(getUserResponse);

        } catch (e) {
            console.error(e);
        }
    };
    fetchUser();
  }, []);

  const onPublish = async () => {
      //delete line bellow
    
    //console.log('test')
    // create post in the database (API)
    if (!videoKey) {
      Alert.alert('Video is still loading');
      return;
    }
    console.log('addPost line 55: ' + videoUri)
    navigation.navigate("CreatePost", {videoKey: videoKey, videoUri: videoUri});

    

    // try {

    //   console.log('video key')
    //   console.log(videoKey)
    //   const newUri = 'https://easyrecruitposts103002-dev.s3-us-west-2.amazonaws.com/public/' + videoKey;
    //   console.log('newUri')
    //   console.log(newUri)
    //   const userInfo = await Auth.currentAuthenticatedUser();

    //   const newPost = {

    //     videoUri: newUri,
    //     description: description,
    //     userID: userInfo.attributes.sub,
    //     songID: 'b6e2ee3a-04a7-4b25-aef5-90b41e4bba33',
    //   };

    //   const response = await API.graphql(
    //     graphqlOperation(createPost, {input: newPost}),
    //   );
      
    //   if (response){
    //     navigation.navigate("Home", { screen: "Home" });
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
  };

  const addVideo = async (item) => {
      if (!videoKey) {
        Alert.alert('Video is still loading');
        return;
      }

      try {

        const newUri = 'https://slidevlogs42c7fe27432f4112aa345edccc01f45560614-dev.s3.us-west-2.amazonaws.com/public/' + videoKey;
        console.log('newUri')
        console.log(newUri)

        console.log(item.id);
        //const userInfo = await Auth.currentAuthenticatedUser();
  
        // const newPost = {
        //   title: slideTitle,
        //   location: location,
        //   description: description,
        //   userID: userInfo.attributes.sub,
        //   slides: {
        //     videoUri: newUri,
        //   }
        // };
  
        const response = await API.graphql(
          graphqlOperation(updatePost, {input: {id: item.id, slides: {videoUri: newUri}}}),
        );
        
        if (response){
          console.log(response)
          //console.log(videoKey)
          navigation.navigate("Home", { screen: "Home" });
        }
      } catch (e) {
        console.error(e);
      }



  }

    // //optimized renderItem
    // const renderItem = useCallback(
    // ({item, index}) => 
    // <View style={styles.button2}>
    //     <View>
    //         <Text style={styles.header1}>{item.slideTitle}</Text>
    //         <Text style={styles.header2}>{item.createdAt}</Text>
    //     </View>
    //     <TouchableOpacity onPress={() => addVideo(item)}>
    //         <View style={videoKey ? styles.postButton : styles.postButtonDisabled}>
    //       {videoKey ? <Ionicons name={'checkmark'} size={20} color={'white'}/> : <ActivityIndicator size="small" color="white"/>}
    //     </View>
    //     </TouchableOpacity>
    // </View>
    // //Renders slide video
    // , []
    // );

    //optimized renderItem
    const renderItem = ({item, index}) => (
      <View style={styles.button2}>
          <View>
              <Text style={styles.header1}>{item.title}</Text>
              <Text style={styles.header2}>{item.updatedAt}</Text>
          </View>
          <TouchableOpacity onPress={() => addVideo(item)}>
              <View style={videoKey ? styles.postButton : styles.postButtonDisabled}>
            {videoKey ? <Ionicons name={'checkmark'} size={20} color={'white'}/> : <ActivityIndicator size="small" color="white"/>}
          </View>
          </TouchableOpacity>
      </View>
      //Renders slide video
      // , []
      );

    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id.toString(),[]
    );



  return (
   
      
      <View style={styles.container}>
      {/* video preview */}
      <Video
        source={{uri: route.params.videoUri}}
        style={styles.video}
        onError={(e) => console.log(e)}
        isLooping = {true}
        shouldPlay={false}
        resizeMode={'cover'}
      />
      


      <TouchableOpacity style={{marginBottom: 5}} onPress={onPublish} style={videoKey ? styles.button : styles.buttonDisabled}>
      
            <Text style={styles.buttonText}>Create new slide</Text> 
      
      </TouchableOpacity>

      <View style={styles.line}/>

      <Text style={styles.textInput}>Or add to:</Text>

      <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
    />
      </View>
  );
};

const styles = StyleSheet.create({
  
  
    button: {
      backgroundColor: '#30A6A6',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      margin: 10,
      height: 50,
    },
    button2: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 3,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
    
        //height: 50,
      },
    buttonDisabled: {
      backgroundColor: '#97D3D3',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      margin: 10,
      height: 50,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: 'bold',
    },
    //used
    container: {
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'space-between',
      //justifyContent: 'flex-end',
      backgroundColor: 'white',
    },
    line: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#E4E4E6'
    },
    header1: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    header2:{
        color: '#c4c4c4',
        fontSize: 14,
        fontWeight: '400',

    },
    postButton:{
        backgroundColor: '#30A6A6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        //padding: 10,
        width: 30,
        height: 30,
    },
    postButtonDisabled:{
        backgroundColor: '#97D3D3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        //padding: 10,
        width: 30,
        height: 30,
    },
    textInput: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      //height:50,
      //alignSelf: 'flex-start',
      //backgroundColor: 'brown',
      color: 'black',
      fontSize: 16,
      fontWeight: '600'
    },
    video: {
      width: WINDOW_WIDTH - 40,
      height: WINDOW_WIDTH - 40,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 20,
      //resizeMode: 'stretch'
    }
  
  });

export default AddPost;