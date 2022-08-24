import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Videos from '../pages/Videos';
import { VideoContext } from '../state/videoContext';

const App = () => {  
    
  return (
    <>TEST</>
    // <BrowserRouter>
    //   <VideoContext.Provider value={video}>
    //     <Layout setTheme={setVideo} searcher={searcher} setSearcher={setSearcher}>
    //       <Routes>
    //         <Route exact path='/' element={<Home data={data} setVideo={setVideo}/>}/>
    //         <Route path='/videos' 
    //         element={
    //           <Videos 
    //           data={data} 
    //           video={video} 
    //           setVideo={setVideo}
    //           />
    //         }/>
    //       </Routes>
    //     </Layout>
    //   </VideoContext.Provider>
    // </BrowserRouter>
  );
}

export default App;
