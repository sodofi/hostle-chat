import { StyleSheet, Dimensions } from 'react-native';
const WINDOW_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  
  
  button: {
    backgroundColor: '#30A6A6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 10,
    height: 50,
  },
  buttonDisabled: {
    backgroundColor: '#97D3D3',
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
    //justifyContent: 'space-between',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E6'
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    //height:50,
    //alignSelf: 'flex-start',
    //backgroundColor: 'brown',
    color: 'black',
    fontSize: 16,
    fontWeight: '600'
  },
  video: {
    width: WINDOW_WIDTH - 40,
    height: WINDOW_WIDTH - 40,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    //resizeMode: 'stretch'
  }

});

export default styles;