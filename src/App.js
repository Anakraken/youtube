import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './containers/Layout';
import Home from './pages/Home';
import Videos from './pages/Videos';
import { VideoContext } from './resources/state/videoContext';

const YOUTUBE_API_URL= 'https://www.googleapis.com/youtube/v3/search';
const KEY = 'AIzaSyDcmvhajFZY_7MjXmJJVAkHxBXy1gsR3Ps';

const initialState= {
  id:'',
  title:'',
  description: '',
  theme: false
};

const App = () => {
  const [data, setData] = useState();
  const [video, setVideo] = useState(initialState);
  const [searcher, setSearcher] = useState('dinosaur');

  const url = `${YOUTUBE_API_URL}?part=snippet&q=${searcher}&type=video&key=${KEY}`;

  useEffect(() => {      
    fetch(url).then((res)=> res.json()).then((elements) =>  setData({...elements, pageInfo: {totalResults: 1000000,resultsPerPage: 20}}));    
  }, []);

  return (
    <BrowserRouter>
      <VideoContext.Provider value={video}>
        <Layout setTheme={setVideo} searcher={searcher} setSearcher={setSearcher}>
          <Routes>
            <Route exact path='/' element={<Home data={data} setVideo={setVideo}/>}/>
            <Route path='/videos' 
            element={
              <Videos 
              data={data} 
              video={video} 
              setVideo={setVideo}
              />
            }/>
          </Routes>
        </Layout>
      </VideoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
