import React from 'react';
import { VideoProvider } from '../state/videoProvider';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Videos from '../pages/Videos';

const App = () => (
    <VideoProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/videos'element={<Videos/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </VideoProvider>
);

export default App;