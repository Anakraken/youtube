import React, {createContext, useEffect, useState} from 'react';
import useAPI from '../state/useAPI';

const VideoContext = createContext()

const VideoProvider = ({children}) => {
  const [searcher, setSearcher] = useState('pizza');

  const {
    data,
    loading,
    error
  } = useAPI(searcher);

  const initialState= {
    id:'',
    title:'',
    description: '',
    theme: false
  };
  const [video, setVideo] = useState(initialState); 
  
  return (
    <VideoContext.Provider 
    value={{
      searcher,
      setSearcher,
      data,
      loading,
      error,
      video,
      setVideo
    }}
    >
      {children}
    </VideoContext.Provider>
  )
}

export {
    VideoContext, 
    VideoProvider,
};
