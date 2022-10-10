import { Image, View, StyleSheet, FlatList } from 'react-native';
import { Movie } from '../assets/types';

interface Props {
    movies: Movie[]
}

const ListImages = ({ movies }: Props) => {

    return (
        <View
            style= {{
                flexDirection: "row"
            }}
        >
{/*             {
                movies.map(movie => (
                    <Image 
                        style={styles.image} 
                        source={{uri: movie.poster}} 
                        key={movie.id}
                    />
                ))
            } */}

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <Image 
                        style={styles.image} 
                        source={{uri: item.poster}} 
                        key={item.id}
                    />
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