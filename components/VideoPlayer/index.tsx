import React from 'react';
import { View, Text } from 'react-native';
import { Episode } from '../../assets/types';
import { Video } from "expo-av"
import { styles } from './styles';

interface Props {
    episode: Episode
}

const VideoPlayer = ({ episode }: Props) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: episode.video,
                }}
                useNativeControls
                posterSource={{
                    uri: episode.poster
                }}
                posterStyle={styles.poster}
                usePoster={true}
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    );
};

export default VideoPlayer;