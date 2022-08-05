import Card from '../components/Card';
import styled from 'styled-components';
import { device } from '../Theme';

const Container = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 20px;
    justify-content: center;
    width: 100%;

    @media ${device.tablet} { 
      grid-template-columns: repeat(auto-fill, 280px);
    }
`;
const Home = ({ data, setVideo }) => {
    
  const handleData = (info) => {
    const tag = info.id.videoId || info.id.channelId;    
    setVideo({title: info.snippet.title, description: info.snippet.description, id: tag })
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
