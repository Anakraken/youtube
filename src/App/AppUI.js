import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Videos from '../pages/Videos';
import { VideoContext } from '../resources/state/videoContext';

const initialState= {
  id:'',
  title:'',
  description: '',
  theme: false
};

const App = () => {
  const [video, setVideo] = useState(initialState); 

  return (
    <BrowserRouter>
      <VideoContext.Provider value={video}>
        <Layout setTheme={setVideo}>
          <Routes>
            <Route exact path='/' element={<Home setVideo={setVideo}/>}/>
            <Route path='/videos' 
            element={
              <Videos 
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
