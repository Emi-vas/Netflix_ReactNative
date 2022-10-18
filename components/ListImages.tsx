import { useNavigation } from '@react-navigation/native';
import { Image, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { Movie } from '../assets/types';

interface Props {
    movies: Movie[]
}

const ListImages = ({ movies }: Props) => {
    const navigation = useNavigation<any>()

    const pressMovie = (movie: Movie) => {
        console.warn(movie.id)
        navigation.navigate("MovieDetails", { id: movie.id })
    }

    return (
        <View
            style= {{
                flexDirection: "row"
            }}
        >
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => pressMovie(item)}>
                        <Image 
                            style={styles.image} 
                            source={{uri: item.poster}} 
                            key={item.id}
                        />
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                horizontal={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 170,
        margin: 5,
        resizeMode: "cover",
        borderRadius: 4
    }
})

export default ListImages;