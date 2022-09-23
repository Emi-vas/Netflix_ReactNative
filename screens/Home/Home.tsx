import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import { styles } from './style';
import categories from '../../assets/data/categories';
import Categories from '../../components/Categories';

const Home = () => {
      /*   categories.items.map(item => <Categories categorie={item} key={item.id}/>) */
    return (
        <View style={{marginBottom: 60}}>
            <FlatList
                data={categories.items}
                renderItem={({ item }) => <Categories categorie={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Home;