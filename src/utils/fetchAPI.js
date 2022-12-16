import axios from 'axios';

const BASE_URL1='https://yt-api.p.rapidapi.com';
const BASE_URL2='https://ytube-videos.p.rapidapi.com';
const BASE_URL3='https://simple-youtube-search.p.rapidapi.com';
const BASE_URL4='https://youtube-v3-alternative.p.rapidapi.com';
const BASE_URL5='https://returnyoutubedislikeapi.com';
const BASE_URL7='https://youtube-video-download-info.p.rapidapi.com'
const BASE_URL8='https://youtube-v31.p.rapidapi.com'

const apiYouTube1 = {
    params: {
      geo: 'RO',
    },
    headers: {
      'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

const apiYouTube2 = {
  params: {
    location: 'RO', 
    type: 'default',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
  }
};

const apiYouTube3 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
  }
};

const apiYouTube4 = {
  params: {
    geo: 'RO', 
    lang: 'ro',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

const apiYouTube5 = {
};

const apiYouTube7 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
  }
};

const apiYouTube8 = {
  params: {
    maxResults: '40',
    part: 'snippet,statistics',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const ApiYouTube1 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL1}/${url}`,apiYouTube1);
  return data;
}

export const ApiYouTube2 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL2}/${url}`,apiYouTube2);
  return data;
}

export const ApiYouTube3 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL3}/${url}`,apiYouTube3);
  return data;
}

export const ApiYouTube4 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL4}/${url}`,apiYouTube4);
  return data;
}

export const ApiYouTube5 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL5}/${url}`,apiYouTube5);
  return data;
}

export const ApiYouTube7 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL7}/${url}`,apiYouTube7);
  return data;
}

export const ApiYouTube8 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL8}/${url}`,apiYouTube8);
  return data;
}

