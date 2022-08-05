import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import ItemList from '../components/ItemList';
import { device } from '../Theme';
import { VideoContext } from '../resources/state/videoContext';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    column-gap: 20px;
    height: 60vh;
        
    @media ${device.mobile} { 
        grid-template-columns: 100%;
    }
`;
const Container = styled.div`
    p{
        margin-top: 10px;
    }
    h3{
        margin-top: 15px;
    }
    iframe{
        width: 100%;
        height: 100%;
    }
`;
const List = styled.div`
    height: 100%;
    display: grid;
    row-gap: 10px;
    align-items: baseline;
    grid-template-rows: repeat(auto-fit, 100px);
    overflow-y: auto;
`;
const Videos = ({data}) => {
    const video = useContext(VideoContext);    
    const [videoInfo, setVideoInfo] = useState(video);

    const selectedVideo = (info, {videoId,channelId}) => {
        const tag = videoId || channelId;    
        setVideoInfo({title: info.snippet.title, description: info.snippet.description, id: tag})
    }

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
