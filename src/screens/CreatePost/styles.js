import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  
  button: {
    backgroundColor: '#fe2c55',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 10,
    height: 50,
  },
  buttonDisabled: {
    backgroundColor: '#ff95a9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 10,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  containerTop: {
    //flex: 1,
    top: 0,
    //position: "absolute",
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    alignItems: 'flex-start',
    borderBottomColor: '#E4E4E6',
    borderBottomWidth: 1,
  },
  settingsContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    //margin: 10,
    //paddingBottom: 80,
    //height:50,
    //alignSelf: 'flex-start',
    //backgroundColor: 'brown',
    color: 'black',
    fontSize: 15,
  },
  video: {
    width: 80,
    height: 150,
    resizeMode: 'stretch'
  }

});

export default styles;