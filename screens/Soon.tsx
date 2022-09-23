import React from 'react';
import { View, Text } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import NavigationBar from '../components/NavigationBar';

const Soon = () => {
    return (
        <View
        style={{
            position: "relative",
            height: "100%"
        }}
    >
        <FocusedStatusBar />
        <Text>Soon</Text>

        <NavigationBar page={"Soon"} />
    </View>
    );
};

export default Soon;