import { useContext } from 'react';
import Card from '../../components/Card';
import { VideoContext } from '../../state/videoProvider';
import {
  Container,
  Grid
} from './styles';

const Home = () => {
  const {data, setVideo} = useContext(VideoContext);
    
  const handleData = (info) => {
    const tag = info.id.videoId || info.id.channelId;
    const newInfo = {
      title: info.snippet.title, 
      description: info.snippet.description, 
      id: tag 
    };     
    setVideo(newInfo);
  }

  return (
    <>
      <Container >
        <h1>Welcome to the Challenge!</h1>
      </Container>

      <Grid>
      {!!data && data?.items.filter((item)=> {return !!item.id.videoId}).map(item => (
          <Card 
          data={item.snippet} 
          key={item.etag} 
          onSubmit={()=>handleData(item)}
          /> 
          ))
        }
      </Grid>
    </>
  );
}

export default Home;
