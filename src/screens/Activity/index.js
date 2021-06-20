import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import headshot from '../../assets/headshot.jpeg'
import post from '../../assets/post.jpg'
import styles from './styles'

const { width } = Dimensions.get('window');

const Inbox = () => {
    return(
        <View style={styles.container}>
            <View style={styles.activityContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.profileImage} source={headshot}/>
                    <Text style={styles.text}>
                        <Text style={{fontWeight: "bold"}}>@sophiadewww</Text>
                        <Text> liked your latest post</Text>
                        <Text style={{color: 'gray'}}> 2d</Text>
                    </Text>
                </View>
                
                <Image style={styles.postImage} source={post}/>
            </View>

            <View style={styles.activityContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.profileImage} source={headshot}/>
                    <Text style={styles.text}>
                        <Text style={{fontWeight: "bold"}}>@sophiadew</Text>
                        <Text> commented on your latest post</Text>
                        <Text style={{color: 'gray'}}> 3d</Text>
                    </Text>
                </View>
                
                <Image style={styles.postImage} source={post}/>
            </View>
            
        </View>
    )
}

export default Inbox;