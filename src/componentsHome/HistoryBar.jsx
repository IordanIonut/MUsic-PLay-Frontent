import React, { useEffect, useState } from "react";
import '../views/home.css'
import '../views/home.css'
import '../components/music.css'
import '../componentsHome/VideoBar'
import Music from "../components/music";
import FeatureCard from "../components/feature-card";
import ChanelCard from "../components/chanel-card";
import { ApiDataBaseGet } from "../utils/fetchAPI";

const HistoryBar = ({mood, idSp, userDate})=>{
  const [type, setType] = React.useState("video");
  const appleMusic_video=JSON.parse(localStorage.getItem('appleMusic_video'));
  const appleMusic_playlist=JSON.parse(localStorage.getItem('appleMusic_playlist'));
  const appleMusic_channel = JSON.parse(localStorage.getItem('appleMusic_channel'));
  const youtube_video=JSON.parse(localStorage.getItem('youtube_video'));
  const youtube_playlist=JSON.parse(localStorage.getItem('youtube_playlist'));
  const youtube_channel = JSON.parse(localStorage.getItem('youtube_channel'));
  const spotify_video=JSON.parse(localStorage.getItem('spotify_video'));
  const spotify_playlist=JSON.parse(localStorage.getItem('spotify_playlist'));
  const spotify_channel = JSON.parse(localStorage.getItem('spotify_channel'));
  const [arrayDB, setArrayBD] = useState([]);
  const [same, setSame] = useState([]);

  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hoverType");
  });

  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hoverType");
  });

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
console.log(arrayDB);
  return(
        <section className="home-history"style={{display: 'flex', alignContent: 'baseline'}}>
          <span className="home-text29 text"></span>
          <div className="home-share2 posibili buttonChange" name="music">
            <button id="video" className="home-button22 button account hoverType" onClick={() => {setType('video');
            styleChangeOn('video'); styleChangeOf('playlist'); styleChangeOf('channel');}}>
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"></path>
              </svg>
            </button>
          </div>
          <div className="home-play-list06 posibili buttonChange" name="playlist">
            <button id="playlist"  className="home-button23 button account"  onClick={() => {setType('playlist');
            styleChangeOn('playlist'); styleChangeOf('video'); styleChangeOf('channel');}}>
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
              </svg>
            </button>
          </div>
          <div className="home-like2 posibili buttonChange" name="channel" style={{marginRight: '20vh'}} >
            <button id="channel"  className="home-button24 button account" onClick={() => {setType('channel');
          styleChangeOn('channel'); styleChangeOf('video'); styleChangeOf('playlist');}}>
              <svg xmlns="http://www.w3.org/2000/svg"className="home-icon074" viewBox="0 0 16 16">
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
              </svg>
            </button>
          </div>
          <div className="home-card2 music-card">
          {mood === 'youtube' && idSp === '' && type === 'video' && Array.isArray(youtube_video) && youtube_video.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
            { Array.isArray(youtube_video?.[idx])  && <Music video={item} idx={idx}></Music> }
            </section>
          ))}
          {mood === 'youtube'  && idSp === '' && type === 'playlist' && Array.isArray(youtube_playlist) && youtube_playlist.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            {Array.isArray(youtube_playlist?.[idx]) &&  <FeatureCard playlist={item} idx={idx}></FeatureCard> }
            </section>
          ))}
          {mood === 'youtube'  && idSp === '' && type === 'channel' && Array.isArray(youtube_channel) && youtube_channel.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
            {Array.isArray(youtube_channel?.[idx])  &&  <ChanelCard channelDetail={item} idx={idx}></ChanelCard> }
            </section>
          ))}
          {mood === 'youtube' && idSp && type === 'video' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
            {  Array.isArray(arrayDB)  &&  <Music color={same?.find((s) => s?.content_id?.idPage === item?.content_id?.idPage)}  video={item?.content_id?.description} idx={idx}></Music> }
            </section>
          ))}
           {mood === 'youtube'  && idSp && type === 'playlist' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            {Array.isArray(arrayDB)&&  <FeatureCard playlist={item?.content_id?.description} idx={idx}></FeatureCard> }
            </section>
          ))}
          {mood === 'youtube'  && idSp && type === 'channel' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
            {Array.isArray(arrayDB)&&  <ChanelCard channelDetail={item?.content_id?.description} idx={idx}></ChanelCard> }
            </section>
          ))}
          {mood === 'appleMusic' && idSp === '' && type === 'video' && Array.isArray(appleMusic_video) && appleMusic_video.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
            { Array.isArray(appleMusic_video?.[idx])&&  <Music video={item?.[0]?.id} idx={idx}></Music> }
            </section>
          ))}
          {mood === 'appleMusic'  && idSp === '' && type === 'playlist' && Array.isArray(appleMusic_playlist) && appleMusic_playlist.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            {Array.isArray(appleMusic_playlist?.[idx])&&  <FeatureCard text={'1'} playlist={item?.[0]?.id?.data?.[0]} idx={idx} mood={mood}></FeatureCard> }
            </section>
          ))}
          {mood === 'appleMusic'  && idSp === '' && type === 'channel' && Array.isArray(appleMusic_channel) && appleMusic_channel.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
            {Array.isArray(appleMusic_channel?.[idx])&&  <ChanelCard channelDetail={item?.[0]?.id} text={"1"} mood={mood} idx={idx}></ChanelCard> }
            </section>
          ))}
          {mood === 'spotify' && idSp === '' && type === 'video' && Array.isArray(spotify_video) && spotify_video.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
            { Array.isArray(spotify_video?.[idx])&&  <Music video={item?.[0]?.id?.[0]} idx={idx}></Music> }
            </section>
          ))}
          {mood === 'spotify'  && idSp === '' && type === 'playlist' && Array.isArray(spotify_playlist) && spotify_playlist.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            {Array.isArray(spotify_playlist?.[idx])&&  <FeatureCard text={'1'} playlist={item?.[0]?.id} idx={idx} mood={mood}></FeatureCard> }
            </section>
          ))}
          {mood === 'spotify'  && idSp === '' && type === 'channel' && Array.isArray(spotify_channel) && spotify_channel.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
            {Array.isArray(spotify_channel?.[idx])&&  <ChanelCard channelDetail={item?.[0]?.id?.data?.artist} text={"1"} mood={mood} idx={idx}></ChanelCard> }
            </section>
          ))}
           {mood === 'spotify' && idSp  && type === 'video' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
            { Array.isArray(arrayDB)&&  <Music color={same?.find((s) => s?.content_id?.idPage === item?.content_id?.description?.[0]?.id)} video={item?.content_id?.description?.[0]} idx={idx}></Music> }
            </section>
          ))}
          {mood === 'spotify'  && idSp && type === 'playlist' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            {Array.isArray(arrayDB)&&  <FeatureCard text={'2'} playlist={item?.content_id?.description} idx={idx} mood={mood}></FeatureCard> }
            </section>
          ))}
          {mood === 'spotify'  && idSp  && type === 'channel' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
            {Array.isArray(arrayDB)&&  <ChanelCard channelDetail={item?.content_id?.description?.data?.artist} text={"1"} mood={mood} idx={idx}></ChanelCard> }
            </section>
          ))}
          {mood === 'appleMusic' && idSp  && type === 'video' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
            { Array.isArray(arrayDB)&&  <Music video={item?.content_id?.description} idx={idx}></Music> }
            </section>
          ))}
          {mood === 'appleMusic'  && idSp && type === 'playlist' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            {Array.isArray(arrayDB)&&  <FeatureCard text={'1'} playlist={item?.content_id?.description?.data?.[0]} idx={idx} mood={mood}></FeatureCard> }
            </section>
          ))}
          {mood === 'appleMusic'  && idSp  && type === 'channel' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
            {Array.isArray(arrayDB)&&  <ChanelCard channelDetail={item?.content_id?.description} text={"1"} mood={mood} idx={idx}></ChanelCard> }
            </section>
          ))}
          </div>
        </section>
    )
}
export default HistoryBar
