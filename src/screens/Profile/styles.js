import { StyleSheet, Dimensions } from 'react-native';
const  WIDTH  = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bio: {
        textAlign: 'center',
        margin: 20,
        width: 250,
    },  
    border: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#E4E4E6',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 2,
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
        marginTop: 50,
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
        flexDirection: 'row'
    },
    middleTextContainer: {
        alignItems: 'center',
        padding: 10,
    },
    middleText: {
        fontWeight: "normal",
        fontSize: 12,
        color: 'gray',
        paddingVertical: 5
    },
    numberText: {
        fontWeight: '800',
        fontSize: 16
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
        backgroundColor: '#fe2c55',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: 10,
        height: 50,
    },
    saveButtonDisabled: {
        backgroundColor: '#ff95a9',
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
        alignItems: 'center'
    },
    usernameText: {
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: '600',
        flexDirection: 'row',
    }
});

export default styles;