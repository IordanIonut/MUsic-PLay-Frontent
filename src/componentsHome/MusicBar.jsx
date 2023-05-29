import React, { useState, useRef, useEffect } from 'react';
import '../views/home.css';
import { Link } from 'react-router-dom';
import { ApiDataBaseGet, ApiDataBasePost } from '../utils/fetchAPI';
import colors from '../utils/colors';
import Cookies from 'js-cookie';
import Slider from '@mui/material/Slider';

export const MusicBar = ({previous, playing, muted, onProgress, onDuration, loop, onPlayStop, onMute, onLoop, handleSeek, url, idSp, id, token, related,
   name, thumbnail, next, onRandome, playlist, mood, urlReactPlayer}) => {
  const currentTimeFormatted = onProgress && typeof onProgress === 'number' ? new Date(onProgress * 1000).toISOString().substr(11, 8) : '00:00:00';
  const durationFormatted = onDuration && typeof onDuration === 'number' ? new Date(onDuration * 1000).toISOString().substr(11, 8) : '00:00:00';
  const [count, setCount] = useState(0);
  const [all, setAll] = useState([]);
  const [sameID, setSameID] = useState('');
  const [check, setCheck] = useState(false);
  const idSongPlayList = Cookies.get('idSongPlayList') || '';
  const [idx, setIdx] = useState('');

  const style=((idClass)=>{
    const element = document.getElementById(idClass);
    if(idClass === 'random')
      if (element.classList.contains("hover111")) {
        document.getElementById(idClass).classList.remove("hover111");
      } else {
        document.getElementById(idClass).classList.add("hover111");
      }
    if(idClass === 'volume')
      if (element.classList.contains("hover111")) {
        document.getElementById(idClass).classList.remove("hover111");
      } else {
        document.getElementById(idClass).classList.add("hover111");
      }
    if(idClass === 'repeat')
      if (element.classList.contains("hover112")) {
        document.getElementById(idClass).classList.remove("hover112");
      } else {
        document.getElementById(idClass).classList.add("hover112");
      }
    if(token){
      if(idClass === 'save'){
        if(check === false && sameID === '' && count === 0){
          document.getElementById(idClass).classList.add("hover113");
          //setCount(1);
          //setCheck(true);
         //console.log("111111111111111111111111111111111");
        }
        if (element.classList.contains("hover113"))  {
          setCheck(false);
          document.getElementById(idClass).classList.add("hover113");
           //console.log('222222222222222222222222222222222');
        }else if(!element.classList.contains("hover113") && check){
          document.getElementById(idClass).classList.remove("hover113");
          setCheck(true);
         // console.log("333333333333333333333333333333333333");
        }
      }
    }
  });
  
  const handleClick = () => {
    if (count % 2 === 0) {
      let ran = Math.floor(Math.random() * 142);
        ApiDataBaseGet(`content/last`).then((data) => {let aa = null;
          if(!id?.includes("|"))
            aa = data?.content_id;
          else
            aa = data?.description?.[0]?.content_id?.content_id;
          const val={content_id: {content_id: aa},  fill: ran, user_id: {user_id: idSp}};
          ApiDataBasePost(`favorite/add`, val).then((data) => {console.log(data);
            ApiDataBaseGet(`favorite/all/user_id/1?user_id=${idSp}`).then((data) =>{setAll(data); //console.log("4444444444444444444444"); 
            setSameID('as'); setCheck(true);})}).catch((err) => {console.log(err?.message)})})
        .catch((err) => {console.log(err)});
    } else {
      ApiDataBaseGet(`content/last`).then((data) => {let val = null;
        if(!id?.includes("|"))
          val = data?.idPage;
        else
          val = data?.description?.[0]?.content_id?.idPage;
      ApiDataBaseGet(`favorite/delete/search?userId=${idSp}&idPage=${val}`).then((data) => {//console.log("delete : 555555555555555555555555555555"); 
      console.log("countqw          "+count);setCheck(false);setCount(0);setAll([]);setSameID('');}).catch((err) => {console.log(err?.message)})});
      setAll([]);setSameID('');
    }
  };

  useEffect(() => {
    const idSong = idSongPlayList.split(',0,');
    if(mood === 'youtube'){
      if(idSongPlayList === '' && playlist === 1){
        if(!id?.includes("|"))
          setIdx(related?.videos?.[0]?.id);
        else
          setIdx(related?.[0]?.content_id?.idPage);
      }else if(idSongPlayList === ''){
        setIdx(id);
      }else{
        setIdx(idSong[0]);
      }
    }
      if(mood === 'spotify'){
        if(idSongPlayList === '' && playlist === 1){
          if(!id?.includes("|")){
            let a = related?.tracks?.items?.[0]?.sharing_info?.uri.split(":");
            setIdx(a?.[2]);
          }else{
            setIdx(related?.[0]?.content_id?.idPage);
          }
        }else if(idSongPlayList === ''){
          setIdx(id);
        }else{
          setIdx(idSong[0]);
        }
      }
  },[idSongPlayList, related]);

  useEffect(() =>{
    if(token){
      if(idx != undefined && check){
        ApiDataBaseGet(`favorite/all/user_id?user_id=${idSp}`).then((data) =>{setAll(data);setSameID('');setCount(0);}).catch((err) =>{console.log(err?.message);});
        style('save');
      console.log("6666666666666666666666666666666");
      }
      else{
       console.log("77777777777777777777777777777");
        ApiDataBaseGet(`favorite/all/user_id?user_id=${idSp}`).then((data) =>{setAll(data);setCount(0);setSameID('')}).catch((err) =>{console.log(err?.message);});
      }
    }
  }, [idx, token, idSongPlayList, related]);

  useEffect(() =>{
    for (let i = 0; i < all?.length; i++) {
        if (all?.[i]?.content_id?.idPage === idx) {
            setSameID(all?.[i]?.fill);
            //console.log("culoare: "+sameID);
            //console.log("count: "+count);
            setCount(1);
            style('save');
           // console.log('8888888888888888888888888888')
          }
        }
  },[idx, sameID, check, all]);



  const [isDragging, setIsDragging] = useState(false);
  const rangeRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = rangeRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = offsetX / rect.width;
    const value = percent * onDuration;
    setProgress(value);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);
/**
 *  <input
            type="range"
            className="home-container7"
            min={0}
            max={onDuration}
            value={onProgress}
            onChange={handleSeek}
            step={0.01}
          />


          
 */

  
  return (
    <section className="home-bar bar" style={{  opacity: 0.8    }}>
        <div className="home-music-play">
          <div className="home-music music-bar">
            <Link to={`/video/${url}`} className="home-button35 button">
              <img
                alt="image"
                src={thumbnail}
                className="home-image7"/>
            </Link>
            <span className="home-text66">
              <span>{name}</span>
              <br></br>
            </span>
            <button id="random" className="navbar button music account" onClick={() => {onRandome();style('random')}}>
              <svg viewBox="0 0 1024 1024" className="home-icon108">
                <path d="M632 572l134 134 88-88v236h-236l88-88-134-134zM618 170h236v236l-88-88-536 536-60-60 536-536zM452 392l-60 60-222-222 60-60z"></path>
              </svg>
            </button>
            <button id="last" className="navbar button music account home-button37" onClick={() => {previous();}}>
              <svg viewBox="0 0 1024 1024" className="home-icon110">
                <path d="M490 512l364-256v512zM470 768l-364-256 364-256v512z"></path>
              </svg>
            </button>
            <span className="home-text69 minutes">{currentTimeFormatted}</span>
            <button id="play" className="home-button38 navbar button music account" onClick={()=>{onPlayStop();}}>
            {playing ? <svg viewBox="0 0 877.7142857142857 1024" className="home-icon112">
                <path d="M877.714 109.714v804.571c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-804.571c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"></path>
              </svg> :
              <svg viewBox="0 0 808.5942857142857 1024" className="home-icon114">
                <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
              </svg>}
            </button>
            <span className="home-text70 minutes"><span>{durationFormatted}</span>
              <br></br>
              <br></br>
            </span>
            <button id="next" className="navbar button music1 account home-button39" onClick={() => {next();}}>
              <svg viewBox="0 0 1024 1024" className="home-icon116">
                <path d="M554 256l364 256-364 256v-512zM170 768v-512l364 256z"></path>
              </svg>
            </button>
            <button id="repeat" className="navbar button music1 account home-button40" onClick={()=>{onLoop();style('repeat')}}>
              <svg viewBox="0 0 1024 1024" className="home-icon118">
                <path d="M726 726v-172h84v256h-512v128l-170-170 170-170v128h428zM298 298v172h-84v-256h512v-128l170 170-170 170v-128h-428z"></path>
              </svg>
            </button>
            {token != undefined ? <button id="save" className="home-button41 navbar button music1 account hover113" onClick={()=>{handleClick();}}>
              <svg viewBox="0 0 1024 1024"  className="home-icon120">
                <path fill={colors?.[sameID]?.hex} d="M512 910l-62-56q-106-96-154-142t-107-114-81-123-22-113q0-98 67-166t167-68q116 0 192 90 76-90 192-90 100 0 167 68t67 166q0 78-52 162t-113 146-199 186z"></path>
              </svg> 
            </button> : null}
            <button id="volume" className="home-button42 navbar button music account hover111" onClick={()=>{onMute();style('volume')}}>
              {muted ? <svg  viewBox="0 0 16 16" className="home-icon122">
                <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
              </svg> : <svg className="home-icon122" viewBox="0 0 16 16">
                <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
              </svg>}
            </button>
          </div>
          <div
            className="range-container"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              const percent = offsetX / rect.width;
              const value = percent * onDuration;
              handleSeek(value);
            }}
          >
            <div
              className="range-progress"
              style={{
                height: '100%',
                borderRadius: '30px',
                backgroundColor: '#1e2b38',
                width: `${(onProgress / onDuration) * 100}%`,
                position: 'absolute',
                top: '0',
                left: '0'
              }}
            />
          </div>
        </div>
      </section>
  )
}
export default MusicBar
