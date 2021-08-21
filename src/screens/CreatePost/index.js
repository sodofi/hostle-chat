
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Keyboard, TextInput, TouchableOpacity, ActivityIndicator, Switch, KeyboardAvoidingView, TouchableWithoutFeedback, Alert} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import { Audio, Video } from 'expo-av';

//import {Storage, API, graphqlOperation, Auth} from 'aws-amplify';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
//import {createPost} from '../../graphql/mutations';

const CreatePost = () => {
  const [slideTitle, setSlideTitle] = useState('')
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  //const [videoKey, setVideoKey] = useState(null);
  //const videoKey = route.params.videoKey;
  const route = useRoute();
  const videoKey = route.params.videoKey;
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

  // useEffect(() => {
  //   //uploadToStorage(route.params.videoUri);
  //   //setVideoKey(route.params.videoKey);
  // }, []);

  const onPublish = async () => {
    if (!slideTitle) {
      Alert.alert('Slide title is required');
      return;
    }
    
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
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      
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

    
      <View style={[styles.line, {paddingTop: 20}]}/>

      <TextInput
          value={slideTitle}
          onChangeText={setSlideTitle}
          numberOfLines={5}
          placeholder={'Slide Title (Required)'}
          style={styles.textInput}
      />

      <View style={styles.line}/>

      <TextInput
          value={description}
          onChangeText={setDescription}
          numberOfLines={5}
          placeholder={'Location'}
          style={styles.textInput}
      />

      <View style={styles.line}/>

      <TextInput
          value={location}
          onChangeText={setLocation}
          numberOfLines={5}
          placeholder={'Description'}
          style={[styles.textInput, {paddingBottom: 50}]}
      />

      <View style={styles.line}/>
      

      {/* publish button */}
      <TouchableOpacity style={{marginBottom: 50}} onPress={onPublish} style={slideTitle ? styles.button : styles.buttonDisabled}>
          <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={onPublish}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity> */}
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreatePost;