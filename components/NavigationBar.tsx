import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { COLORS } from '../assets/constants';
import {useNavigation } from '@react-navigation/native';

interface Props {
    page: string
}

const NavigationBar = ({page}: Props) => {
    const navigation = useNavigation<any>()

    return (
        <View
            style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                backgroundColor: COLORS.black,
                padding: 10
            }}
        >
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={styles.bloc}>
                <AntDesign name="home" size={24} color={page == "Home" ? "white" : COLORS.gray}/>
                <Text 
                    style={{
                        ...styles.text,
                        color: page == "Home" ? "white" : COLORS.gray
                    }}
                >Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate('Soon')}} style={styles.bloc}>
                <MaterialIcons name="video-library" size={24} color={page == "Soon" ? "white" : COLORS.gray}/>
                <Text 
                    style={{
                        ...styles.text,
                        color: page == "Soon" ? "white" : COLORS.gray
                    }}
                >Coming Soon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bloc}>
                <Ionicons name="search" size={24} color={page == "Search" ? "white" : COLORS.gray} />
                <Text 
                    style={{
                        ...styles.text,
                        color: page == "Search" ? "white" : COLORS.gray
                    }}
                >Search</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bloc}>
                <AntDesign name="download" size={24} color={page == "Download" ? "white" : COLORS.gray}/>
                <Text 
                    style={{
                        ...styles.text,
                        color: page == "Download" ? "white" : COLORS.gray
                    }}
                >Downloads</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bloc: {
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 13,
    }
})


export default NavigationBar;