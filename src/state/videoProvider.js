import React, {createContext,  useEffect,  useState} from 'react';
import useAPI from './useAPI';

const VideoContext = createContext()

const initialState= {
    id:'',
    title:'',
    description: '',
    theme: false
  };


const VideoProvider = ({children, videos, TodoContext}) => {
    const {
        data,
        loading,
        error
      } = useAPI();

      useEffect(()=>{
          console.log("DATA", data)
      },[data])

//   const [video, setVideo] = useState(initialState);
//   const [searcher, setSearcher] = useState('dinosaur');
//   const [searchValue, setSearchValue] = useState('');
  
//   let searcher = [];
//   if(!searchValue.length >= 1) {
//     searcher = videos;
//   } else {
//     searcher = videos.filter(todo => {
//       const todoText = todo.text.toLowerCase();
//       const searchText = searchValue.toLowerCase();

//       return todoText.includes(searchText);

//     })
//   }

  return (
    <TodoContext.Provider 
    // value={{
    //   searchValue,
    //   setSearchValue,
    //   searcher,
    // }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export {
    VideoContext, 
    VideoProvider
};
