import React, {useContext, useState} from 'react';
import ItemList from '../../components/ItemList';
import { VideoContext } from '../../state/videoProvider';
import {
    Grid,
    Container,
    List
} from './styles';

const Videos = () => {
    const {data, video} = useContext(VideoContext);    
    
    const [videoInfo, setVideoInfo] = useState(video);

    const selectedVideo = (info, {videoId,channelId}) => {
        const tag = videoId || channelId; 
        const newInfo = {
            title: info.snippet.title, 
            description: info.snippet.description, 
            id: tag
        };   
        setVideoInfo(newInfo);
    };

    return (
        <Grid>
            <Container>
                <iframe 
                src={`https://www.youtube.com/embed/${videoInfo.id}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                allowFullScreen>    
                </iframe>
                <h3>{videoInfo.title}</h3>
                <p>{videoInfo.description}</p>
            </Container>

            <List>
                {
                !!data && data.items.filter((item)=> {return !!item.id.videoId}).map(item => 
                    <ItemList
                    key={item.etag}
                    title={item.snippet.title} 
                    description={item.snippet.description}
                    img={item.snippet.thumbnails.high.url}
                    onClick={() => selectedVideo(item, item.id)}
                    />)
                }
            </List>
        </Grid>
    )
}

export default Videos
