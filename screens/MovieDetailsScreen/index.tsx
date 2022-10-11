import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons'; 
import movie from "../../assets/data/movie"


const MovieDetailsScreen = () => {
    return (
        <View>
            <Image
                source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/ep0.jpg"}} 
                style={styles.image}
            />
            
            <Text style={styles.title}>{movie.title}</Text>
            
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.txtGray}>{movie.year}</Text>
                <Text style={styles.age}>12+</Text>
                <Text style={styles.txtGray}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={24} color="gray" />
            </View>


        </View>
    );
};

export default MovieDetailsScreen;