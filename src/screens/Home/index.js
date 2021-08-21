import React, {useEffect, useState, useCallback, useRef, useForceUpdate} from 'react';
import {View, FlatList, Dimensions, Text, StyleSheet} from 'react-native';
const CONTAINER_PADDING = Dimensions.get('window').width * .05
const VIDEO_SIZE = Dimensions.get('window').width - (CONTAINER_PADDING * 2)

//fake data with video posts
//TODO: delete this line
import posts from '../../../data/slides'

//slide component
import Slide from '../../components/Slide'

//backend calls
import { API, graphqlOperation } from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const ITEM_HEIGHT = Dimensions.get('window').height-290;

const Home = () => {

    //TODO: uncomment this line
    //const [posts, setPosts] = useState([]);

    //optimized renderItem
    const renderItem = useCallback(
        ({item, index}) => 
            <Slide post={item} index={index} videoSize={VIDEO_SIZE} itemHeight={ITEM_HEIGHT}/>, []
    );

    //creates key for flatlist
    const keyExtractor = useCallback(
        (item) => item.id.toString(),[]
    );

    //optimize flatlist performance
    const getItemLayout = (data, index) => {
        return{
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
        }
    }

    {/* Called on screen render to fetch posts from backend */}
    useEffect(() => {
        const fetchPost = async() => {
            //fetch all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                console.log(response);
                console.log('home line 72')
                //TODO: set posts to
                //setPosts(response.data.listPosts.items)
            } catch (e) {
                console.error(e);
            }
        };
        fetchPost();
    }, []);

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                maxToRenderPerBatch={3}
                getItemLayout={getItemLayout}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    )
}

export default Home;