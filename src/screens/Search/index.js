import React, {useState} from 'react';
import {View, Text, TextInput, Dimensions, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles'

const { width } = Dimensions.get('window');

const Search = () => {

    const [search, setSearch] = useState('');

    const onPress = () => {
        console.log(search)
        //TODO: replace with searching for user profiles and listing the profile that matches
        //when clicking on profile open up user profile
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <View style={styles.container}>
                <View style={styles.textInput}>
                <Ionicons name={'search'} size={20} color={'black'} />
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        numberOfLines={5}
                        placeholder={'Search'}
                        style={styles.text}
                    />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                    </View>
                </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default Search;