import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles'

const { width } = Dimensions.get('window');

const onPress = () => {
    console.log(search)
}

const Search = () => {

    const [search, setSearch] = useState('');

    return(
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
    )
}

export default Search;