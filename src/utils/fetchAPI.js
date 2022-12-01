import axios, * as others from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const homeBarApiYouTube = {
    params: {  
      maxResults: '10'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,homeBarApiYouTube);
    return data;
}
 
