import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Episode } from '../assets/types';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../assets/constants';

interface Props {
    episodeData: Episode
}

const EpisodeMin = ({episodeData} :Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.bloc1}>
                <Image 
                    source={{uri: episodeData.poster}} 
                    style={styles.image}
                />

                <View style={styles.blocText}>
                    <Text style={styles.title}>{episodeData.title}</Text>
                    <Text style={styles.txtGray}>{episodeData.duration}</Text>
                </View>

                <View style={{ marginHorizontal: 5 }}>
                    <AntDesign name="download" size={24} color={COLORS.gray} />
                </View>
            </View>
            <Text style={styles.txtGray}>{episodeData.plot}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 10
    },


    title: {
        color: "white"
    },
    txtGray: {
        color: COLORS.gray,
    },
    image: {
        width: 150,
        aspectRatio: 5/3
    },

    bloc1: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 7
    },
    blocText: {
        flex: 1,
        marginLeft: 10
    }
})

export default EpisodeMin;