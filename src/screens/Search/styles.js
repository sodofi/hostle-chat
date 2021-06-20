import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    paddingLeft: 10,
  },
  textInput: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E4E4E6',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ff4747',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;