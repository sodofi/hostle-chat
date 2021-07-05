import { StyleSheet, Dimensions } from 'react-native';
const  WIDTH  = Dimensions.get('window').width;
const IMAGE_SIZE = 100;

const styles = StyleSheet.create({
    
    button: {
        borderRadius: 100,
        backgroundColor: '#30A6A6',
        marginTop: 10,
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerContainer: {
        paddingTop: 20, 
        alignContent: 'center', 
        width: '100%', 
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        //alignItems: 'center'
    },
    editsContainer: {
        padding: 5, 
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    icon: {
        paddingHorizontal: 40,
    },
    image: {
        //marginTop: 50,
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    line: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E6'
    },
    middleContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        //paddingRight: 10,
        paddingHorizontal: 50
    },
    middleTextContainer: {
        alignItems: 'center',
        //paddingHorizontal: 40,
        paddingBottom: 10,
    },
    middleText: {
        fontWeight: "600",
        fontSize: 14,
        color: '#c4c4c4',
        paddingVertical: 5
    },
    numberText: {
        fontWeight: '800',
        fontSize: 22
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 100,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
    },
    saveButton: {
        backgroundColor: '#30A6A6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 10,
        height: 50,
    },
    saveButtonDisabled: {
        backgroundColor: '#EAF6F6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 10,
        height: 50,
    },
    saveButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInput: {
        fontSize: 16,
        paddingRight: 10,
    },
    topContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 20
    },
    topRightContainer: {
        justifyContent: 'space-between',
        paddingLeft: 20,
        height: IMAGE_SIZE - 10

    },
    usernameText: {
        //padding: 10,
        //borderRadius: 5,
        fontSize: 18,
        color: '#c4c4c4',
        fontWeight: '700',
        flexDirection: 'row',
    }
});

export default styles;