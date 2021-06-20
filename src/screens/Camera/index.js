import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";

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
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };

  const createPost = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
    console.log(videoSource)
    navigation.navigate("CreatePost", {videoUri: videoSource})
  };


  const renderCancelPreviewButton = () => (
    <View>
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <Ionicons name={'chevron-back'} size={closeButtonSize} color={'white'} />
    </TouchableOpacity>
    <TouchableOpacity onPress={createPost} style={styles.createPostButtonContainer}>
      <View style={styles.createPostButton}>
        <Text style={styles.createPostButtonText}>Next</Text>
      </View>
    </TouchableOpacity>
  </View>
  );

  //function plays the recorded video
  const renderVideoPlayer = () => (
    <Video
      source={{ uri: videoSource }}
      shouldPlay={true}
      style={styles.media}
      isLooping
    />
  );


  //function shows that video is recording
  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Recording..."}</Text>
    </View>
  );

  //
  const renderCaptureControl = () => (
    <View style={{flex: 1}}>
        <View style={styles.sideBar} >
          <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
            <Ionicons name={'md-camera-reverse-outline'} size={closeButtonSize} color={'white'} />
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!isCameraReady} onPress={openImagePickerAsync}>
            <Ionicons style={{paddingTop: 10, alignSelf: 'center'}} name={'share-outline'} size={closeButtonSize} color={'white'} />
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.control} >
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
      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
      <View style={styles.container}>
        {isVideoRecording && renderVideoRecordIndicator()}
        {videoSource && renderVideoPlayer()}
        {isPreview && renderCancelPreviewButton()}
        {!videoSource && !isPreview && renderCaptureControl()}
      </View>
    </SafeAreaView>
  );
}