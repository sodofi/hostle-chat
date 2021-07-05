import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window').width - 200;

const styles = StyleSheet.create({
    activityContainer: {
        //marginVertical: 20,
        //marginHorizontal: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }, 
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        flexDirection: 'column',
        //justifyContent: 'space-between',
    },
    postImage: {
        width: 45,
        height: 55,
        //justifyContent:'flex-end'
        //alignContent: 'flex-end'
    },
    profileImage: {
        borderRadius: 100,
        width: 55,
        height: 55,
    },
    text: {
        paddingTop: 7,
        width: 250 ,
        paddingLeft: 10,
    }
});

export default styles;