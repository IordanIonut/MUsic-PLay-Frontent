import React, { useEffect, useState } from "react";
import '../views/home.css'
import '../views/home.css'
import '../components/music.css'
import '../componentsHome/VideoBar'
import Music from "../components/music";
import FeatureCard from "../components/feature-card";
import ChanelCard from "../components/chanel-card";

const HistoryBar = ()=>{
  const [type, setType] = React.useState("video");
  const video=JSON.parse(localStorage.getItem('video'));
  const playlist=JSON.parse(localStorage.getItem('playlist'));
  const channel = JSON.parse(localStorage.getItem('channel'));
 
  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hoverType");
  });
  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hoverType");
  });

    console.log(video);
    console.log(playlist);
    console.log(channel);
  return(
        <section className="home-history"style={{display: 'flex'}}>
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
          <div className="home-like2 posibili buttonChange" name="channel" style={{marginRight: '50vh'}} >
            <button id="channel"  className="home-button24 button account" onClick={() => {setType('channel');
          styleChangeOn('channel'); styleChangeOf('video'); styleChangeOf('playlist');}}>
              <svg xmlns="http://www.w3.org/2000/svg"className="home-icon074" viewBox="0 0 16 16">
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
              </svg>
            </button>
          </div>
          <div className="home-card2 music-card">
          {type === 'video' && Array.isArray(video) && video.map((item, idx) => (
            <section  key={idx} style={{width: '100%', transitionDelay: '1s' }}> 
            {  <Music video={item} idx={idx}></Music>}
            </section>
          ))}
          {type === 'playlist' && Array.isArray(playlist) && playlist.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            {  <FeatureCard playlist={item} idx={idx}></FeatureCard>}
            </section>
          ))}
          {type === 'channel' && Array.isArray(channel) && channel.map((item, idx) => (
            <section key={idx} style={{width: '100%' , transitionDelay: '1s'}}> 
            {  <ChanelCard channelDetail={item} idx={idx}></ChanelCard>}
            </section>
          ))}
          
          </div>
        </section>
    )
}
export default HistoryBar
