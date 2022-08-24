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
import useAPI from './state/useAPI';

const initialState= {
  id:'',
  title:'',
  description: '',
  theme: false
};

const App = () => {
  const [video, setVideo] = useState(initialState);
  const [searcher, setSearcher] = useState('dinosaur');
  
  const {
    data,
    loading,
    error
  } = useAPI(searcher);

  useEffect(()=>{
      console.log("loading", loading)
  },[loading])


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
