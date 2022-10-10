import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../assets/constants';

import { Categorie} from "../assets/types"
import ListImages from './ListImages';

interface Props {
    categorie: Categorie
}

const Categories = ({ categorie }: Props) => {
    return (
        <View style={{ marginTop: 15 }}>
            <Text
                style={{
                    color: COLORS.white,
                    fontSize: 19,
                    padding: 3,
                    marginLeft: 10
                }}
            >{categorie.title}</Text>

            <ListImages movies={categorie.movies} />
        </View>
    );
};

export default Categories;