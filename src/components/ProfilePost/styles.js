import {StyleSheet, Dimensions} from 'react-native';

const ITEM_HEIGHT = 180
const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    bottomContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    container: {
        //alignItems: "center",
        width: ITEM_HEIGHT + 15,
        height: ITEM_HEIGHT + 15,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    iconContainer: {
        alignItems: 'center'
    },
    pauseButton: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        //alignItems: 'center',
        position: 'absolute',
        marginTop: ITEM_HEIGHT/2 - 50,
    },  
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 220,
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
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: ITEM_HEIGHT,
        height: ITEM_HEIGHT,
        borderRadius: 20,
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