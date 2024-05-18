import axios from 'axios';

const BASE_URL1='https://yt-api.p.rapidapi.com';
const BASE_URL2='https://youtube-media-downloader.p.rapidapi.com/v2';//block
const BASE_URL3='https://youtube-v38.p.rapidapi.com';
const BASE_URL4='https://youtube-v3-alternative.p.rapidapi.com';
const BASE_URL5='https://returnyoutubedislikeapi.com';
const BASE_URL7='https://youtube-video-download-info.p.rapidapi.com'
const BASE_URL8='https://youtube-v31.p.rapidapi.com'
const BASE_URL9='https://youtube-search-and-download.p.rapidapi.com';
const BASE_URL10='https://youtube-media-downloader.p.rapidapi.com/v2/video';
const BASE_URL11='https://youtube-mp3-download1.p.rapidapi.com';
const BASE_URL12='https://spotify81.p.rapidapi.com';
const BASE_URL13='https://spotify-scraper.p.rapidapi.com/v1';
const BASE_URL14='https://spotify81.p.rapidapi.com';
const BASE_URL15='https://spotify117.p.rapidapi.com';
const BASE_URL16='https://spotify23.p.rapidapi.com';
const BASE_URL17='https://spotify-data.p.rapidapi.com';
const BASE_URL18='https://shazam-api7.p.rapidapi.com';
const BASE_URL19='https://shazam.p.rapidapi.com';
const BASE_URL20='https://shazam8.p.rapidapi.com';
const BASE_URL21='http://localhost:8080/api';
const BASE_URL22 ='https://shazam-core7.p.rapidapi.com';
const BASE_URL23 ='https://youtube-data8.p.rapidapi.com';
const BASE_URL24 = "https://musicapi13.p.rapidapi.com";

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
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
  }
};

const apiYouTube3 = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

const apiYouTube4 = {
  params: {
    geo: 'RO', 
    lang: 'en',
    sort_by: 'relevance'
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
    maxResults: '50',
    part: 'snippet,statistics',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const apiYouTube9 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


const apiYouTube10 = {
  params: {
    lang: 'en-RO',
  },
  headers: {
    'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
  }
};

const apiYouTube11 = {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
    }
};

const apiSpotify1 = {
  params: {
    offset: '0',
    limit: '30',
    numberOfTopResults: '20',},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  }
};

const apiSpotify2 = {
  params: {
    limit: '30',},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
};

const apiSpotify3 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
  }
};

const apiSpotify4 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
  }
};

const apiSpotify5 = {
  headers: {
    'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

const apiSpotify6 = {
  headers: {
    'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

const apiShazam1 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
  }
};

const apiShazam2 = {
  params: {
    l: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

const apiShazam3 = {
  headers: {
    'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'shazam8.p.rapidapi.com'
  }
};

const apiShazam4 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
  }
};

const apiDataBase = {
};

const apiYouTube12 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com',
  }
};

const apiAllPlatforms = {
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com'
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

export const ApiYouTube9 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL9}/${url}`,apiYouTube9);
  return data;
}

export const ApiYouTube10 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL10}/${url}`,apiYouTube10);
  return data;
}

export const ApiYouTube11 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL11}/${url}`,apiYouTube11);
  return data;
}

export const ApiSpotify1 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL12}/${url}`,apiSpotify1);
  return data;
}

export const ApiSpotify2 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL13}/${url}`,apiSpotify2);
  return data;
}

export const ApiSpotify3 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL14}/${url}`,apiSpotify3);
  return data;
}

export const ApiSpotify4 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL15}/${url}`,apiSpotify4);
  return data;
}

export const ApiSpotify5 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL16}/${url}`,apiSpotify5);
  return data;
}

export const ApiSpotify6 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL17}/${url}`,apiSpotify6);
  return data;
}

export const ApiShazam1 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL18}/${url}`,apiShazam1);
  return data;
}

export const ApiShazam2 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL19}/${url}`,apiShazam2);
  return data;
}

export const ApiShazam3 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL20}/${url}`,apiShazam3);
  return data;
}

export const ApiShazam4 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL22}/${url}`,apiShazam4);
  return data;
}

export const ApiDataBaseGet = async(url) =>{
  const {data} = await axios.get(`${BASE_URL21}/${url}`,apiDataBase);
  return data;
}

export const ApiDataBasePost = async (url, postData) => {
  const { data } = await axios.post(`${BASE_URL21}/${url}`, postData, apiDataBase);
  return data;
};

export const ApiDataBasePut = async (url, putData) => {
  const { data } = await axios.put(`${BASE_URL21}/${url}`, putData, apiDataBase);
  return data;
};

export const ApiDataBaseDelete = async (url) => {
  const { data } = await axios.delete(`${BASE_URL21}/${url}`, apiDataBase);
  return data;
};

export const ApiYouTube12 = async(url) =>{
  const {data} = await axios.get(`${BASE_URL23}/${url}`,apiYouTube12);
  return data;
};

export const ApiAllPlatforms = async (url, postData) => {
  const { data } = await axios.post(`${BASE_URL24}/${url}`, postData, apiAllPlatforms);
  return data;
};