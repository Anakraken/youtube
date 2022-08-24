import React from 'react';
import { VideoProvider } from '../state/videoProvider';
import AppUi from './AppUI';

function App() {
  
  return (
    <VideoProvider>
      <AppUi />
    </VideoProvider>
  );
}

export default App;