import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";

import ProgressCircle from 'react-native-progress-circle'
import * as ImagePicker from "expo-image-picker";
import styles from './styles';
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.04);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

export default function VideoScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const [videoLength, setVideoLength] = useState(0); 
  const cameraRef = useRef();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

   //pick video from camera roll
   let openImagePickerAsync = async () => {
    //setVideoType(false);
    
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); 
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required. Please go to settings and change permission.');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.Videos})

    if (pickerResult.cancelled === true) {
        return;
    }
    setIsPreview(true);
    setVideoSource(pickerResult["uri"]);
    console.log(videoSource);
    setIsVideoRecording(false);
  };

  //function records video and creates a video URI called source
  const recordVideo = async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log("video source", source);
            setVideoSource(source);
            //navigation.navigate("CreatePost", {videoUri: source})
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  //function stops video recording
  const stopVideoRecording = () => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
      //navigation.navigate("CreatePost", {videoUri: videoSource})
    }
  };

  //function switches camera
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  //function to cancel preview
  const cancelPreview = async () => {
    console.log('touched')
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };

  const createPost = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
    console.log(videoSource)
    //navigation.navigate("CreatePost", {videoUri: videoSource})
    navigation.navigate("AddPost", {videoUri: videoSource})
  };

  // const createPostAlert = () => 
  //   Alert.alert(
  //     "Create a new post or add to an existing slide?",
  //     "",
  //     [
  //       {
  //         text: "New",
  //         onPress: () => console.log("Cancel Pressed"),
          
  //       },
  //       { text: "Add", onPress: () => console.log("OK Pressed") }
  //     ],
  //     { cancelable: false }
  // );


  const renderCancelPreviewButton = () => (
    <View>
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <Ionicons name={'chevron-back'} size={closeButtonSize} color={'black'} />
    </TouchableOpacity>
    <View  style={styles.createPostButtonContainer}>
      <TouchableOpacity onPress={createPost} style={styles.createPostButton}>
        <Text style={styles.createPostButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  </View>
  );

  //function plays the recorded video
  const renderVideoPlayer = () => (
    <View style={styles.previewContainer}>
      <Video
        source={{ uri: videoSource }}
        shouldPlay={true}
        style={styles.media}
        isLooping
        resizeMode={'cover'}
      />
    </View>
  );


  //function shows that video is recording
  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
    </View>
  );

  //
  const renderCaptureControl = () => (
    <View style={{flex: 1}}>
        <View style={styles.sideBar} >
          <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
            <Ionicons name={'flash-outline'} size={closeButtonSize} color={'black'} />
            <Text style={styles.text}>Flash</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
            <Ionicons name={'md-camera-reverse-outline'} size={closeButtonSize} color={'black'} />
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!isCameraReady} onPress={openImagePickerAsync}>
            <Ionicons style={{paddingTop: 10, alignSelf: 'center'}} name={'share-outline'} size={closeButtonSize} color={'black'} />
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.control} >

          {/* <ProgressCircle
              style={{position: "absolute"}}
              percent={videoLength}
              radius={captureSize/2+captureSize/10}
              borderWidth={captureSize/10}
              color='#DC83F2'
              shadowColor="white"
              bgColor= "white" 
          >
          </ProgressCircle> */}
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={!isCameraReady}
            onLongPress={recordVideo}
            onPressOut={stopVideoRecording}
            onPress={recordVideo}
            style={styles.capture}
          />
      </View>
    </View>
  );

  //ui of screen
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.videoContainer}>
      <Camera
        ref={cameraRef}
        style={styles.video}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
      </View>

       


      <View style={{flex: 1}}>
        {isVideoRecording && renderVideoRecordIndicator()} 
      </View>

      <View style={styles.container}>
        {!videoSource && !isPreview && renderCaptureControl()}
        {videoSource && renderVideoPlayer()}
        {isPreview && renderCancelPreviewButton()}
        
      </View>

    </SafeAreaView>
  );
}