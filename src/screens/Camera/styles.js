import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.052);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.1);

const styles = StyleSheet.create({
    //used
    capture: {
      backgroundColor: "#e4e4e4",
      borderRadius: 5,
      borderWidth: 3,
      height: captureSize,
      width: captureSize,
      borderRadius: Math.floor(captureSize / 2),
    },
    //used
    closeButton: {
      //position: "absolute",
      top: 35,
      //left: 15,
      height: closeButtonSize,
      width: closeButtonSize,
      //borderRadius: Math.floor(closeButtonSize / 2),
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: 'red',
      zIndex: 2,
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      
    },
    //used
    control: {
      position: "absolute",
      flexDirection: "row",
      bottom: 38,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    createPostButton: {
      width: 80,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      backgroundColor: '#30A6A6'
    },
    //used
    createPostButtonContainer: {
      //position: "absolute",
      //top: 135,
      right: 15,
      height:  Dimensions.get("window").height-200,
      //width: closeButtonSize,
      //backgroundColor: 'red',
      //borderRadius: Math.floor(closeButtonSize / 2),
      justifyContent: 'flex-end',
      //flex: 2,
      alignItems: 'flex-end',
      zIndex: 1,
    },
    createPostButtonText: {
      color: 'white',
      fontWeight: '600'
    },
    //used
    media: {
      //...StyleSheet.absoluteFillObject,
      height: WINDOW_WIDTH - 15,
      width: WINDOW_WIDTH - 15,
      borderRadius: 20,
      //paddingBottom: 100,
      //backgroundColor: 'black',
    },
    previewContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'white',
      //borderBottomWidth: (WINDOW_HEIGHT - WINDOW_WIDTH)/3,
      //zIndex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //borderTopWidth: (WINDOW_HEIGHT - WINDOW_WIDTH)/3,
      //marginVertical: -10,
      borderColor: 'rgba(0, 0, 0, .2)',
    },
    // preview: {
    //   flex: 1,
    //   justifyContent: 'flex-end',
    //   alignItems: 'center',
    // },
    //used
    recordIndicatorContainer: {
      flexDirection: "row",
      position: "absolute",
      top: 25,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      opacity: 0.7
    },
    //used
    recordTitle: {
      paddingTop: 40,
      fontSize: 20,
      color: "#ffffff",
      textAlign: "center",
    },
    //used
    recordDot: {
      borderRadius: 10,
      height: 7,
      width: 7,
      backgroundColor: "#fe2c55",
      marginHorizontal: 5,
    },
    //used
    sideBar:{
      //backgroundColor: 'rgba(0,0,0,.25)',
      //borderRadius: WINDOW_HEIGHT/10,
      paddingTop: WINDOW_HEIGHT/10,
      paddingHorizontal: WINDOW_WIDTH/10,
      alignItems: "center",
      //position: "absolute",
      //right: WINDOW_WIDTH/30,
      //top: WINDOW_HEIGHT/50,
      //zIndex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    //used
    text: {
      fontSize: 12,
      fontWeight: "600",
      textAlign: 'center',
      color: "#000",
    },
    video: {
      //height: WINDOW_HEIGHT - 90,
      //borderWidth: 100,
      //borderRightWidth: 30,
      //...StyleSheet.absoluteFillObject,
      //borderBottomWidth: (WINDOW_HEIGHT - WINDOW_WIDTH)/3,
      //borderTopWidth: (WINDOW_HEIGHT - WINDOW_WIDTH)/3,
      //marginVertical: -10,
      //borderColor: 'rgba(0, 0, 0, .2)',
      //borderRadius: 20,
      height: WINDOW_WIDTH - 15,
      width: WINDOW_WIDTH - 15,
    },
    videoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      ...StyleSheet.absoluteFillObject,
    }
  });

export default styles;