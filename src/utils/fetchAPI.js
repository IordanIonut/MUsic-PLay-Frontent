const axios = require("axios");

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const homeBarApiYouTube = {
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, 
            homeBarApiYouTube);
    return data;
}