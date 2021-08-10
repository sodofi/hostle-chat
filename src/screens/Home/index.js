



import React, {useEffect, useState, useCallback, useRef, useForceUpdate} from 'react';
import {View, FlatList, Dimensions, Text, StyleSheet} from 'react-native';

//import { useIsFocused } from "@react-navigation/native";
//import config from '../../aws-exports'

//fake data with video posts
import posts from '../../../data/slides'

import Slide from '../../components/Slide'

import { API, graphqlOperation } from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

//Amplify.configure(config)

const ITEM_HEIGHT = Dimensions.get('window').height-310;

const Home = () => {

    //const [posts, setPosts] = useState([]);
    //const [currentIndex, setCurrentIndex] = useState(0);
    //const currentIndex = useRef(0);
    //const isFocused = useIsFocused();

    //optimized renderItem
    const renderItem = useCallback(
        ({item, index}) => 
            <Slide post={item} index={index}/>, []
            //<Text>{item.id}</Text>, []
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

    //when viewable items change, update current index
    const onViewableItemsChanged = ({viewableItems}) => {
        if(viewableItems && viewableItems.length > 0) {
            const val = viewableItems[0].index;
            currentIndex.current = val 
        }
    }

    // const viewabilityConfigCallbackPairs = useRef(
    //     [{ viewabilityConfig, onViewableItemsChanged}]
    // )

    // const viewabilityConfig = {
    //     viewAreaCoveragePercentThreshold: 90
    // }

    useEffect(() => {
        const fetchPost = async() => {
            //fetch all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                console.log(response);
                console.log('home line 72')
                //setPosts(response.data.listPosts.items)
            } catch (e) {
                console.error(e);
            }
        };
        fetchPost();
    }, []);

    return (
        <View>
            {/* <Text>Hello World</Text> */}
            {/* <Slide/>
            <Slide/> */}
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                maxToRenderPerBatch={3}
                //viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
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