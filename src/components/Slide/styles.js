import {StyleSheet, Dimensions} from 'react-native';

const CONTAINER_PADDING = Dimensions.get('window').width * .05
const VIDEO_SIZE = Dimensions.get('window').width - (CONTAINER_PADDING * 2)

const ITEM_HEIGHT = Dimensions.get('window').height-130


const styles = StyleSheet.create({
    bottomContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    //used
    container: {
        width: '100%',
        padding: CONTAINER_PADDING,
        height: ITEM_HEIGHT,
        backgroundColor: 'white'
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    handleText: {
        paddingLeft: 10,
        color: '#000',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5,
    },
    iconContainer: {
        alignItems: 'center'
    },
    likeContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9D966',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15
    },
    locationText: {
        color: '#c4c4c4',
        fontSize: 18,
        fontWeight: '500',
    },
    pauseButton: {
        //flex: 1,
        alignSelf: 'center',
        //justifyContent: 'center',
        //alignItems: 'center',
        position: 'absolute',
        marginTop: VIDEO_SIZE/2 - 40,
    },  
    //used
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#30A6A6',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        height: 200,
        justifyContent: 'space-between',
    },
    statsLabel:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 5,
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: '#4c4c4c',
    },
    timestampText: {
        paddingLeft: 10,
        color: '#c4c4c4',
        fontSize: 14,
        fontWeight: '500',
    },
    titleText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    //used
    video: {
        //flex: 1,
        width: VIDEO_SIZE,
        height: VIDEO_SIZE,
        borderRadius: 20,
        //position: 'absolute',
        //top: 0,
        //left: 0,
        //bottom: 0,
        //right: 0,
    },
    //used
    videoContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: VIDEO_SIZE,
        height: VIDEO_SIZE,
    },
    videoPlayButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
    },
})

export default styles;