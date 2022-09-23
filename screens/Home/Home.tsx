import React from 'react';
import { View, Text, Image } from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import NavigationBar from '../../components/NavigationBar';

import { styles } from './style';

const Home = () => {
    return (
        <View
            style={{
                position: "relative",
                height: "100%"
            }}
        >
            <FocusedStatusBar />
            
            <View>
                <Image style={styles.image} source={{uri: "https://pbs.twimg.com/media/Ec_7SzOUEAAuGit.jpg"}} />
            </View>

            <NavigationBar page="Home"/>
        </View>
    );
};

export default Home;