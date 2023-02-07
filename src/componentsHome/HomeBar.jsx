import React, { useState, useEffect } from 'react';
import '../views/home.css';
import '../style.css';
import start from "../utils/startSong";
import startPlayList from "../utils/startPlayList";
import Music from '../components/music';
import FeatureCard from '../components/feature-card';

const HomeBar = ()=>{
  const [type, setType] = React.useState("video");
  const [homeSong, setHomeSong] = useState([]);
  const [homePlayList, setHomePlayList] = useState([]);
  const songStart = start;
  const playlistStart = startPlayList;
  const video=JSON.parse(localStorage.getItem('video'));
  const playlist=JSON.parse(localStorage.getItem('playlist'));
  const channel = JSON.parse(localStorage.getItem('channel'));


    function handleGetRandomNumbers(aaa, bbb) {
      const result = [];
      let original1 = aaa;
      let original2 = bbb;
      let count = 0;
      let coverage = 0;
      let number = original2.length / 5 - 1;
      while (count < 30){
        const newRandomNumber = Math.floor(Math.random() * 2);
        if(newRandomNumber === 0) {
          if (!original1.length) continue;
          const randomIndex = Math.floor(Math.random() * original1.length);
          const randomElement = original1[randomIndex];
          result.push(randomElement);
          original1.splice(randomIndex, 1);
        }
        else if(newRandomNumber === 1) {
          if (!original2.length) continue;
          if (number > coverage)
            coverage++;
          else continue;
          const randomIndex = Math.floor(Math.random() * original2.length);
          const randomElement = original2[randomIndex];
          result.push(randomElement);
          original2.splice(randomIndex, 1);
        }
        count++;
      }
              setHomeSong(result);
    }

  const styleChangeOn=((idClass)=>{
    console.log(idClass);
    if(idClass === 'video'){
      handleGetRandomNumbers(songStart, video);
    }
    else if(idClass === 'playlist'){
      handleGetRandomNumbers(playlistStart, playlist);
    }
    document.getElementById(idClass).classList.add("hoverType1");
  });

  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hoverType1");
  });

    return(
        <section className="home-home scroll scroll5" style={{display: 'flex'}}>
       <span className="home-text62 text">
        <br></br>
        <br></br>
      </span>
      <div className="home-share2 posibili buttonChange" name="music" onClick={() => {setType('video');
            styleChangeOn('video'); styleChangeOf('playlist'); styleChangeOf('live1');}}>
            <button id="video" className="home-button22 button account hoverType">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"></path>
              </svg>
            </button>
          </div>
          <div className="home-play-list06 posibili buttonChange" name="playlist"  onClick={() => {setType('playlist');
          styleChangeOn('playlist'); styleChangeOf('video'); styleChangeOf('live1');}}>
            <button id="playlist"  className="home-button23 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
              </svg>
            </button>
          </div>
          <div className="home-play-list06 posibili buttonChange" name="live1" style={{marginRight: '20vh'}} onClick={() => {setType('live');
          styleChangeOn('live1'); styleChangeOf('playlist'); styleChangeOf('video'); }}>
            <button id="live1"  className="home-button23 button account">
              <svg xmlns="http://www.w3.org/2000/svg" className="home-icon072" viewBox="0 0 16 16">
                <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a6.785 6.785 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a4.473 4.473 0 0 0 .268-.148 6.75 6.75 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2Z"/>
                <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
              </svg>
            </button>
          </div>
          <div className="home-card2 music-card">
          {homeSong.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && (type === 'video' ? {width: '100%'}: null ||
                       type === 'live' ? {width: '100%'}: null ||
                       type === 'channel' ? {width: '100%'}: null ||
                       type === 'playlist' ? {marginLeft: ''} : null)}> 
            {type==='video' && <Music video={item} idx={id} page='0'></Music>}
            {type==='channel' && <ChanelCard channelDetail={item} idx={id} ></ChanelCard>}
            {type==='playlist'&& <FeatureCard playlist={item} idx={id} ></FeatureCard>}
            </section>
          ))}
          </div>
      </section> 
    )
}
export default HomeBar
