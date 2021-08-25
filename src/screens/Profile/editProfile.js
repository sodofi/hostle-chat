import React, {useEffect, useState, useCallback} from 'react';
import {SafeAreaView, View, ImageBackground, Text, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
//import headshot from '../../assets/headshot.jpeg'
import * as ImagePicker from "expo-image-picker";
import styles from './styles'


//import ProfilePost from '../../components/ProfilePost';
import {Auth, API, graphqlOperation} from 'aws-amplify';
//import { Auth } from 'aws-amplify';
import { updateUser } from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';

//import Amplify from 'aws-amplify'
//import config from '../../aws-exports'

//Amplify.configure(config)

const Profile = () => {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('')
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [imageUri, setImageUri] = useState(null);
    const [email, setEmail] = useState('')
    const [edited, setEdited] = useState(false)

    const navigation = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
            
            try {
                const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
                //check if the user exits in database
                const getUserResponse = await API.graphql(
                    graphqlOperation(
                    getUser, {id: userInfo.attributes.sub}
                    )
                );
                setId(userInfo.attributes.sub);
                //console.log(getUserResponse.data.getUser.username)
                setUsername(getUserResponse.data.getUser.username)
                setName(getUserResponse.data.getUser.name)
                setEmail(getUserResponse.data.getUser.email)
                // console.log("POSTS:")
                // console.log(getUserResponse.data.getUser.posts)
                //setPosts(getUserResponse.data.getUser.posts.items)
                setImageUri(getUserResponse.data.getUser.imageUri)

                //console.log("ACTIVE USER: ")
                //console.log(getUserResponse);

            } catch (e) {
                console.error(e);
            }
        };
        fetchUser();
    }, [])

    async function signOut() {
        // try {
        //     await Auth.signOut();
        // } catch (error) {
        //     console.log('error signing out: ', error);
        // }
        console.log('signOut');
    }

    let openImagePickerAsync = async () => {
        
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); 
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required. Please go to settings and change permission.');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing: true})
        if (pickerResult.cancelled === true) {
            return;
        }
        //setIsPhotoSelection(false);
        //setNewProfilePicture({uri: pickerResult.uri});
        //const newPic = {uri: pickerResult.uri};
        const newPic = pickerResult.uri;
        console.log(newPic)
        setImageUri(newPic);
        setEdited(true);
    };

    const saveChanges = async () => {
        console.log(id, name, email, imageUri);
        const response = await API.graphql(graphqlOperation(updateUser, {input: {id: id, name: name, email: email, imageUri: imageUri}}))
        console.log(response)
        if (response) {
            navigation.pop();
            //console.log('loading')
        } 
        //console.log('loaded')
    }

    return(
        <SafeAreaView style={styles.container}>

            {/* Photo */}
            <TouchableOpacity style={styles.centerContainer} onPress={openImagePickerAsync}>
                <ImageBackground style={styles.image} imageStyle={{borderRadius: 100}} source={{uri: imageUri}}> 
                    <View style={styles.overlay}>
                        <Ionicons name={'camera-outline'} size={40} color={'white'} />
                    </View>
                </ImageBackground>
                <Text style={{paddingTop: 10, paddingBottom: 25}}>Change photo</Text>   
            </TouchableOpacity>

            <View style={styles.line}/>

            {/* Username */}
            <View style={styles.editsContainer}>
                <Text style={styles.usernameText}>Username</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textInput}>{username}</Text>
                    <Ionicons name={'lock-closed-outline'} size={18} color={'#fe2c55'} style={{paddingRight: 10}} />
                </View>
            </View>

            <View style={styles.line}/>

            {/* Email */}
            <View style={styles.editsContainer}>
                <Text style={styles.usernameText}>Name</Text>
                <TextInput
                value={name}
                onChangeText={name => {setName(name); setEdited(true)}}
                numberOfLines={5}
                placeholder={'Enter Name'}
                style={[styles.textInput, {color: '#fe2c55'}]}
                />
            </View>

            <View style={styles.line}/>

            {/* Email */}
            <View style={styles.editsContainer}>
                <Text style={styles.usernameText}>Email</Text>
                <TextInput
                value={email}
                onChangeText={email => {setEmail(email); setEdited(true)}}
                numberOfLines={5}
                placeholder={'Enter Email'}
                style={[styles.textInput, {color: '#fe2c55'}]}
                />
            </View>

            <View style={styles.line}/>

            {/* Save & Logout Button */}
            <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 15}}>
                <TouchableOpacity disabled={!edited} onPress={saveChanges}>
                    <View style={edited ? styles.saveButton : styles.saveButtonDisabled}>
                        <Text style={styles.saveButtonText}>Save Changes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerContainer} onPress={signOut}>
                    <Text style={{color: '#000', fontWeight: '500'}}>Logout</Text>
                </TouchableOpacity>
                
            </View>
            
        </SafeAreaView>

     
        
    )
}

export default Profile;