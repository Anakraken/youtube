import { useState, useEffect }  from 'react';

const YOUTUBE_API_URL= 'https://www.googleapis.com/youtube/v3/search';
const KEY = 'AIzaSyDcmvhajFZY_7MjXmJJVAkHxBXy1gsR3Ps';

const useAPI = (searcher) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const url = `${YOUTUBE_API_URL}?part=snippet&q=${searcher}&type=video&key=${KEY}`;
    const [data, setData] = useState();

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setData(responseJSON);
    }

    useEffect(()=>{
        try{
            fetchApi();
            setLoading(false);
            console.log(data)
        }catch(error) {
            setError(error)
        }
    },[searcher])
     
  
    return{
        data, 
        loading,
        error
    };
  }

  export default useAPI;