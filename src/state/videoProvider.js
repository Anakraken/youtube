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
  
  return (
    <VideoContext.Provider 
    value={{
      searcher,
      setSearcher,
      data,
      loading,
      error
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
