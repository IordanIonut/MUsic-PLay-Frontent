import React, { useState, useEffect, useRef } from 'react';
import '../views/home.css';
import '../style.css';
import startYoutube from "../utils/startSong";
import playlistYoutube from "../utils/startPlayList";
import Music from '../components/music';
import FeatureCard from '../components/feature-card';
import { ApiDataBaseGet } from '../utils/fetchAPI';
import axios from 'axios';
import Swal from 'sweetalert2';

const HomeBar = ({mood, token, idSp, setButtonYoutube, setButtonSpotify, setButtonAppleMusic})=>{
  const [type, setType] = React.useState("video");
  const [homeSong, setHomeSong] = useState([]);
  const [homePlaylist, setPlaylist] = useState([]);
  const songStart = startYoutube;
  const playlistStart = playlistYoutube;
  const appleMusic_video=JSON.parse(localStorage.getItem('appleMusic_video'));
  const appleMusic_playlist=JSON.parse(localStorage.getItem('appleMusic_playlist'));
  const youtube_video=JSON.parse(localStorage.getItem('youtube_video'));
  const youtube_playlist=JSON.parse(localStorage.getItem('youtube_playlist'));
  const [arrayDB, setArrayBD] = useState([]);
  const [same, setSame] = useState([]);
  setButtonYoutube(true);
  setButtonSpotify(true);
  setButtonAppleMusic(true);

    function handleGetRandomNumbers(aaa, bbb, text) {
      const result = [];
      const set = new Set();
      let original1 = aaa;
      let original2 = bbb;
      let coverage = 0;
      let count = 0; 
      if(original2?.length === null){
        original2 = original1.splice();
      }
      const number = original2?.length / 4 - 1;
      const randomNumbers = [];
      for (let i = 0; i < 400; i++) {
        randomNumbers.push(Math.floor(Math.random() * 3));
      }
      for (let i = 0; i < 200; i++) {
        if(randomNumbers[i]  === 0) {
          if (!original1.length) 
            continue;
          const randomIndex = Math.floor(Math.random() * original1.length);
          const randomElement = original1[randomIndex];
          if (!set.has(randomElement)) {
            result.push(randomElement);
            set.add(randomElement);
            count++;
          }
        }
        else if(randomNumbers[i] === 1 || randomNumbers[i] === 2) {
          if (!original2?.length) continue;
          if (coverage < number) {
            coverage++;
            const randomIndex = Math.floor(Math.random() * original2.length);
            const randomElement = original2[randomIndex];
            if (!set.has(randomElement)) {
              result.push(randomElement);
              set.add(randomElement);
              count++;
            }
          }
        }
        if(count === 40)
          break;
      }
      if(text === "video")
        setHomeSong(result);
      if(text === "playlist")
        setPlaylist(result);
    }

    useEffect(() =>{
      if(idSp !== ''){
        if(type === 'video')
          ApiDataBaseGet(`history/search/all?user_id=${idSp}&mood=${mood}&type=video`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log("err1")});
        if(type === 'playlist')
          ApiDataBaseGet(`history/search/all?user_id=${idSp}&mood=${mood}&type=playlist`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log("err2")});;
        if(type === 'channel')
          ApiDataBaseGet(`history/search/all?user_id=${idSp}&mood=${mood}&type=channel`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log("err3")});;
      }
    }, [type, idSp, mood]);

    useEffect(() =>{
      if(idSp != ''){
        if(type === 'video')
          ApiDataBaseGet(`favorite/search?userId=${idSp}&type=video&mood=${mood}`).then((data) =>{setSame(data)}).catch((err) =>{console.log(err?.message)});
        if(type === 'playlist')
          ApiDataBaseGet(`favorite/search?userId=${idSp}&type=playlist&mood=${mood}`).then((data) =>{setSame(data)}).catch((err) =>{console.log(err?.message)});
        if(type === 'channel')
          ApiDataBaseGet(`favorite/search?userId=${idSp}&type=channel&mood=${mood}`).then((data) =>{setSame(data)}).catch((err) =>{console.log(err?.message)});
        }
    }, [arrayDB]);

    useEffect(() =>{
    if(token != undefined){
      if(mood === 'youtube'){
        handleGetRandomNumbers(songStart, arrayDB, "video");
        handleGetRandomNumbers(playlistStart, arrayDB, "playlist");
      }else if(mood === 'spotify'){
      }
    }
    if(token === undefined){
      if(mood === 'youtube'){
        handleGetRandomNumbers(songStart, youtube_video, "video");
        handleGetRandomNumbers(playlistStart, youtube_playlist, "playlist");
      }
    }
   },[mood]);

   const styleChangeOn=((idClass)=>{
    if(mood === 'youtube'){
      if(idClass === 'video'){
        handleGetRandomNumbers1(songStart, video);
      }
      else if(idClass === 'playlist'){
        handleGetRandomNumbers1(playlistStart, playlist);
      }
    }else if (mood === 'spotify'){

    }
    document.getElementById(idClass).classList.add("hoverType1");
  });

  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hoverType1");
  });

  return(
      <section className="home-seach music-list"style={{display: 'flex', alignContent: 'baseline'}}>
       <span className="home-text29 text">
        <br></br>
        <br></br>
      </span>
      <div className="home-share2 posibili buttonChange" name="music" onClick={() => {setType('video');
            styleChangeOn('video'); styleChangeOf('playlist');}}>
            <button id="video" className="home-button22 button account hoverType">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"></path>
              </svg>
            </button>
          </div>
          <div className="home-play-list06 posibili buttonChange" name="playlist" style={{marginRight: '20vh'}}  onClick={() => {setType('playlist');
          styleChangeOn('playlist'); styleChangeOf('video');}}>
            <button id="playlist"  className="home-button23 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
              </svg>
            </button>
          </div>
          <div className="home-card2 music-card">
          { mood === 'youtube' ? mood === 'youtube' &&  Array.isArray(homeSong) &&  homeSong.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && (type === 'video' ? {width: '100%'}: null)}>
            {type==='video' && <Music color={same?.find((s) => s?.content_id?.idPage === item?.[0]?.id?.id)} video={item} idx={id} page='0'></Music>}
            </section>
          )) : null } 
             { mood === 'youtube' ? mood === 'youtube' &&  Array.isArray(homePlaylist) &&  homePlaylist.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && (type === 'playlist' ? {marginLeft: ''} : null)}> 
            {type==='playlist'&& <FeatureCard playlist={item} idx={id} ></FeatureCard>}
            </section>
          )) : null } 
          {mood === 'spotify' && <p>De implementat Spotify</p>}
          {mood === 'appleMusic' && <p>De implementat AppleMusic</p>} 
           {mood === 'shazam' &&         <p>asdasdsaaaa</p>   }
          </div>
      </section> 
    )
}
export default HomeBar
