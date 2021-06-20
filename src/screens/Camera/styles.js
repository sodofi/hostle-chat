import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.052);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

const styles = StyleSheet.create({
    // buttonContainer: {
    //   flex: 1,
    //   backgroundColor: 'transparent',
    //   flexDirection: 'row',
    //   margin: 20,
    // },
    // buttonRecord: {
    //   height: 50,
    //   width: 50,
    //   borderRadius: 25,
    //   marginVertical: 10,
    //   backgroundColor: 'red',
    //   alignSelf: 'center',
    // },
    // buttonStop: {
    //     height: 35,
    //     width: 35,
    //     borderRadius: 3,
    //     marginVertical: 10,
    //     backgroundColor: '#ff4343',
    //     alignSelf: 'center',
    // },
    // camera: {
    //   flex: 1,
    // },
    //used
    capture: {
      backgroundColor: "#FE2C55",
      borderRadius: 5,
      height: captureSize,
      width: captureSize,
      borderRadius: Math.floor(captureSize / 2),
      marginHorizontal: 31,
    },
    //used
    closeButton: {
      position: "absolute",
      top: 35,
      left: 15,
      height: closeButtonSize,
      width: closeButtonSize,
      borderRadius: Math.floor(closeButtonSize / 2),
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
    },
    // closeCross: {
    //   width: "68%",
    //   height: 1,
    //   backgroundColor: "black",
    // },
    //used
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
      backgroundColor: '#FE2C55'
    },
    //used
    createPostButtonContainer: {
      //position: "absolute",
      //top: 135,
      //right: 15,
      height:  Dimensions.get("window").height-150,
      //width: closeButtonSize,
      //backgroundColor: 'red',
      //borderRadius: Math.floor(closeButtonSize / 2),
      justifyContent: 'flex-end',
      //flex: 2,
      alignItems: 'flex-end',
      zIndex: 2,
    },
    createPostButtonText: {
      color: 'white',
      fontWeight: '600'
    },
    //used
    media: {
      ...StyleSheet.absoluteFillObject,
      height: Dimensions.get("window").height-130,
      paddingBottom: 100,
      backgroundColor: 'black',
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
      opacity: 0.7,
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
      borderRadius: 3,
      height: 6,
      width: 6,
      backgroundColor: "#ff0000",
      marginHorizontal: 5,
    },
    //used
    sideBar:{
      //backgroundColor: 'rgba(0,0,0,.25)',
      borderRadius: WINDOW_HEIGHT/10,
      paddingVertical: WINDOW_HEIGHT/50,
      paddingHorizontal: WINDOW_WIDTH/100,
      alignItems: "center",
      position: "absolute",
      right: WINDOW_WIDTH/30,
      top: WINDOW_HEIGHT/50,
      zIndex: 1
    },
    //used
    text: {
      fontSize: 12,
      fontWeight: "600",
      textAlign: 'center',
      color: "#fff",
    },
  });

export default styles;