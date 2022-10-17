import {useRef, useState}from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { styles } from './styles';
import { MaterialIcons, Entypo, MaterialCommunityIcons, Octicons, Fontisto  } from '@expo/vector-icons'; 
import movie from "../../assets/data/movie"
import { COLORS } from '../../assets/constants';
import EpisodeMin from '../../components/EpisodeMin';

import {Picker} from "@react-native-picker/picker"
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason: any = movie.seasons.items[0]

const MovieDetailsScreen = () => {
    const ref = useRef<any>(null)

    const seasonName = movie.seasons.items.map(season => season.name)
    const [currentSeason, setCurrentSeason] = useState(firstSeason)
    const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0])

    const scrollTop = () => {
        ref.current?.scrollToOffset({animated: true, offset: 0 })
    }

    return (
        <View >
           {/*  <EpisodeMin episodeData={movie.seasons.items[0].episodes.items[0]}/> */}
            <FlatList 
                ref={ref}
                data={currentSeason.episodes.items}
                renderItem={({ item }) => 
                    <EpisodeMin 
                        episodeData={item} 
                        setCurrentEpisode={setCurrentEpisode} 
                        scrollTop={scrollTop}
                    />}
                ListHeaderComponent={(
                    <View >
                        <VideoPlayer episode={currentEpisode} />
                        
                        <Text style={styles.title}>{movie.title}</Text>
                        
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.txtGray}>{movie.year}</Text>
                            <Text style={styles.age}>12+</Text>
                            <Text style={styles.txtGray}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="gray" />
                        </View>

                        <Pressable onPress={() => {scrollTop()}} style={styles.playBtn}>
                            <Text >
                                <Entypo name="controller-play" size={24} color={COLORS.black} />
                                {' '}
                                Play
                            </Text>
                        </Pressable>

                        <Pressable onPress={() => {}} style={styles.dlBtn}>
                            <Text style={{color: "white"}}>
                                <MaterialCommunityIcons name="download" size={24} color="white" />
                                {' '}
                                Download
                            </Text>
                        </Pressable>


                        <Text style={{color: "white", margin: 10}}>
                            {movie.plot}
                        </Text>
                        <Text style={styles.txtGray}>
                            {movie.cast}
                        </Text>
                        <Text style={styles.txtGray}>
                            {movie.creator}
                        </Text>

                        {/* Bloc mylist rate share */}
                        <View style={{ flexDirection: "row" }}>
                            <View 
                                style={{
                                    ...styles.blocIcons, 
                                    borderBottomColor: COLORS.red,
                                    borderBottomWidth: 3
                                }}
                            
                            >
                                <Octicons name="plus" size={25} color="white" />
                                <Text style={{color: COLORS.gray, marginTop: 5}}>MyList</Text>
                            </View>
                            <View style={styles.blocIcons}>
                                <Octicons name="thumbsup" size={25} color="white" />
                                <Text style={{color: COLORS.gray, marginTop: 5}}>Rate</Text>
                            </View>
                            <View style={styles.blocIcons}>
                                <Fontisto name="paper-plane" size={25} color="white" />
                                <Text style={{color: COLORS.gray, marginTop: 5}}>MyList</Text>
                            </View>
                        </View>

                        <Picker
                            style= {styles.picker}
                            dropdownIconColor={COLORS.gray}
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => setCurrentSeason(movie.seasons.items[itemIndex])}
                        >
                            {
                                seasonName.map(item => (
                                    <Picker.Item label={item} value={item} key={item}/>
                                ))
                            }
                        </Picker>
                    </View>
                )}
            />

        </View>
    );
};

export default MovieDetailsScreen;