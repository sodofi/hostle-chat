
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, Switch} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import { Audio, Video } from 'expo-av';

//import {Storage, API, graphqlOperation, Auth} from 'aws-amplify';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
//import {createPost} from '../../graphql/mutations';

const CreatePost = () => {
  const [description, setDescription] = useState('');
  const [videoKey, setVideoKey] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

//   const uploadToStorage = async (imagePath) => {
//     try {
//       const response = await fetch(imagePath);

//       const blob = await response.blob();

//       const filename = `${uuidv4()}.mp4`;
//       const acl = 'public-read'
//       // const s3Response = await Storage.put(filename, blob, {
//       //   acl: 'public-read'
//       // });

//       const s3Response = await Storage.put(filename, blob, acl);

//       setVideoKey(s3Response.key);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     uploadToStorage(route.params.videoUri);
//   }, []);

  const onPublish = async () => {
      //delete line bellow
    navigation.navigate("Home", { screen: "Home" });
    // create post in the database (API)
    // if (!videoKey) {
    //   console.warn('Video is not yet uploaded');
    //   return;
    // }

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

  const SettingButton = ({icon, text}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
      <View style={styles.settingsContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name={icon} size={25} color={'black'} style={{marginRight: 10}}/>
          <Text>{text}</Text>
        </View>
        <Switch
            trackColor={{ false: "#f3f3f4", true: "#04de9a" }}
            thumbColor= 'white'
            ios_backgroundColor="#f3f3f4"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
      </View>
    )
  }



  return (
    <View style={styles.container}>
      {/* video post */}
      <View>
      <View style={styles.containerTop}>
        <TextInput
          value={description}
          onChangeText={setDescription}
          numberOfLines={5}
          placeholder={'Describe your video'}
          style={styles.textInput}
        />
        <Video
          source={{uri: route.params.videoUri}}
          style={styles.video}
          onError={(e) => console.log(e)}
          isLooping = {true}
          shouldPlay={false}
        />
      </View>

        {/* permissions */}
        <SettingButton icon='lock-closed-outline' text='Make private' />
        <SettingButton icon='chatbox-outline' text='Disable comments' />
        <SettingButton icon='download-outline' text='Save to device' />

      </View>

      {/* publish button */}
      <TouchableOpacity onPress={onPublish}>
        <View style={videoKey ? styles.button : styles.buttonDisabled}>
          {videoKey ? <Text style={styles.buttonText}>Post</Text> : <ActivityIndicator size="small" color="white"/>}
          {/* <Text style={styles.buttonText}>
            {videoKey ? 'Post' : 'Not Ready'}
          </Text> */}
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={onPublish}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity> */}

    </View>
  );
};

export default CreatePost;