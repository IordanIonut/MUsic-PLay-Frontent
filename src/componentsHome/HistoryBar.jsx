import React, { useEffect, useState } from "react";
import '../views/home.css'
import '../views/home.css'
import '../components/music.css'
import '../componentsHome/VideoBar'
import Music from "../components/music";
import FeatureCard from "../components/feature-card";
import ChanelCard from "../components/chanel-card";
import { ApiDataBaseGet } from "../utils/fetchAPI";
import moment from 'moment';

const HistoryBar = ({mood, idSp, userDate, setButtonYoutube, setButtonSpotify, setButtonAppleMusic})=>{
  const [type, setType] = React.useState("video");
  const appleMusic_video=JSON.parse(localStorage.getItem('appleMusic_video')) || [];
  const appleMusic_playlist=JSON.parse(localStorage.getItem('appleMusic_playlist'))|| [];
  const appleMusic_channel = JSON.parse(localStorage.getItem('appleMusic_channel'))|| [];
  const youtube_video=JSON.parse(localStorage.getItem('youtube_video'))|| [];
  const youtube_playlist=JSON.parse(localStorage.getItem('youtube_playlist'))|| [];
  const youtube_channel = JSON.parse(localStorage.getItem('youtube_channel'))|| [];
  const spotify_video=JSON.parse(localStorage.getItem('spotify_video'))|| [];
  const spotify_playlist=JSON.parse(localStorage.getItem('spotify_playlist'))|| [];
  const spotify_channel = JSON.parse(localStorage.getItem('spotify_channel'))|| [];
  const [arrayDB, setArrayBD] = useState([]);
  const [same, setSame] = useState([]);
  setButtonYoutube(true);
  setButtonSpotify(true);
  setButtonAppleMusic(true);
  const [combinedArrayBD, setCombinedArrayBD] = useState([]);

  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hoverType");
  });

  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hoverType");
  });

  useEffect(() =>{
    if(idSp != ''){
      if(type === 'video'){
        ApiDataBaseGet(`history/search/all?user_id=${idSp}&type=video`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log("err1")});
        ApiDataBaseGet(`favorite/search?userId=${idSp}&type=video&mood=${mood}`).then((data) =>{setSame(data)}).catch((err) =>{console.log(err?.message)});
      }
      if(type === 'playlist'){
        ApiDataBaseGet(`history/search/all?user_id=${idSp}&type=playlist`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log("err2")});;
        ApiDataBaseGet(`favorite/search?userId=${idSp}&type=playlist&mood=${mood}`).then((data) =>{setSame(data)}).catch((err) =>{console.log(err?.message)});
      }
      if(type === 'channel'){
        ApiDataBaseGet(`history/search/all?user_id=${idSp}&type=channel`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log("err3")});;
        ApiDataBaseGet(`favorite/search?userId=${idSp}&type=channel&mood=${mood}`).then((data) =>{setSame(data)}).catch((err) =>{console.log(err?.message)});
      }
    }else{
      if (type === 'video') {
        const order = [...youtube_video, ...spotify_video, ...appleMusic_video] || [];
        order.sort((a, b) => {
          const dateA = moment(a?.data, 'DD.MM.YYYY, HH:mm:ss');
          const dateB = moment(b?.data, 'DD.MM.YYYY, HH:mm:ss');
          if (!dateA.isValid() || !dateB.isValid()) {
            return dateA.isValid() ? 1 : -1;
          }
          return dateB.diff(dateA);
        });
        setCombinedArrayBD(order);
      }
      if(type === 'playlist'){
        const order = [...youtube_playlist, ...spotify_playlist, ...appleMusic_playlist] || [];
        order.sort((a, b) => {
          const dateA = moment(a?.data, 'DD.MM.YYYY, HH:mm:ss');
          const dateB = moment(b?.data, 'DD.MM.YYYY, HH:mm:ss');
          if (!dateA.isValid() || !dateB.isValid()) {
            return dateA.isValid() ? 1 : -1;
          }
          return dateB.diff(dateA);
        });
        setCombinedArrayBD(order);
      }
      if(type === 'channel'){
        const order = [...youtube_channel, ...spotify_channel, ...appleMusic_channel] || [];
        order.sort((a, b) => {
          console.log(a?.[0]);
          const dateA = moment(a?.[0]?.data, 'DD.MM.YYYY, HH:mm:ss');
          const dateB = moment(b?.[0]?.data, 'DD.MM.YYYY, HH:mm:ss');
          if (!dateA.isValid() || !dateB.isValid()) {
            return dateA.isValid() ? 1 : -1;
          }
          return dateB.diff(dateA);
        });
        setCombinedArrayBD(order);
      }
    }
  }, [type, idSp, mood]);

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
          {idSp && type === 'video' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
              {Array.isArray(arrayDB)  &&  item?.content_id?.mood === 'youtube' ? <Music moood={item?.content_id?.mood} color={same?.find((s) => s?.content_id?.idPage === item?.content_id?.idPage)}  video={item?.content_id?.description} idx={idx}></Music> : null ||
                item?.content_id?.mood === 'spotify' ? <Music moood={item?.content_id?.mood} color={same?.find((s) => s?.content_id?.idPage === item?.content_id?.description?.[0]?.id)} video={item?.content_id?.description?.[0]} idx={idx}></Music> : null ||
                item?.content_id?.mood === 'appleMusic' ? <Music moood={item?.content_id?.mood} video={item?.content_id?.description} idx={idx} color={same?.find((s) => s?.content_id?.idPage === item?.content_id?.description?.key)}></Music> : null }
            </section>
          ))}
          {idSp && type === 'playlist' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}>
              {Array.isArray(arrayDB) && item?.content_id?.mood === 'youtube' ? <FeatureCard moood={item?.content_id?.mood} playlist={item?.content_id?.description} idx={idx}></FeatureCard> : null ||
                item?.content_id?.mood === 'spotify' ? <FeatureCard moood={item?.content_id?.mood} text={'2'} playlist={item?.content_id?.description} idx={idx} mood={mood}></FeatureCard> : null ||
                item?.content_id?.mood === 'appleMusic' ? <FeatureCard moood={item?.content_id?.mood} text={'1'} playlist={item?.content_id?.description?.data?.[0]} idx={idx} mood={mood}></FeatureCard>: null}
            </section>
          ))}
          {idSp && type === 'channel' && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
              {Array.isArray(arrayDB) && item?.content_id?.mood === 'youtube' ?  <ChanelCard moood={item?.content_id?.mood} channelDetail={item?.content_id?.description} idx={idx}></ChanelCard> : null||
                item?.content_id?.mood === 'spotify' ? <ChanelCard moood={item?.content_id?.mood} channelDetail={item?.content_id?.description?.data?.artist} text={"1"} mood={mood} idx={idx}></ChanelCard> : null ||
                item?.content_id?.mood === 'appleMusic' ? <ChanelCard moood={item?.content_id?.mood} channelDetail={item?.content_id?.description} text={"1"} mood={mood} idx={idx}></ChanelCard> :null }
            </section>
          ))}
          {idSp === '' && type === 'video' && Array.isArray(combinedArrayBD) && combinedArrayBD.map((item, idx) => (
            <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
            { item?.mood === 'youtube' ? <Music moood={item?.[0]?.mood} video={item?.id} idx={idx} mood={'youtube'}></Music>: null ||
              item?.mood === 'appleMusic' ? <Music moood={item?.[0]?.mood} video={item?.id} idx={idx} mood={'appleMusic'}></Music> : null ||
              item?.mood === 'spotify' ? <Music moood={item?.[0]?.mood} video={item?.id?.[0]} idx={idx} mood={'spotify'}></Music>: null
            }
            </section>
          ))}
          {idSp === '' && type === 'playlist' && Array.isArray(combinedArrayBD) && combinedArrayBD.map((item, idx) => (
            <section key={idx} style={{marginLeft: '', transitionDelay: '1s'}}> 
            { item?.mood === 'youtube' ?  <FeatureCard moood={item?.[0]?.mood} playlist={item?.id} idx={idx} mood={'youtube'}></FeatureCard> : null ||
              item?.mood === 'spotify' ? <FeatureCard moood={item?.[0]?.mood} text={'1'} playlist={item?.id} idx={idx} mood={'spotify'}></FeatureCard> : null ||
              item?.mood === 'appleMusic' ? <FeatureCard moood={item?.[0]?.mood} text={'1'} playlist={item?.id?.data?.[0]} idx={idx} mood={'appleMusic'}></FeatureCard> : null
            }
            </section>
          ))}
          {idSp === '' && type === 'channel' && Array.isArray(combinedArrayBD) && combinedArrayBD.map((item, idx) => (
            <section key={idx} style={{width: '99%' , transitionDelay: '1s' }}> 
            { item?.[0]?.mood === 'youtube' ?<ChanelCard moood={item?.[0]?.mood} channelDetail={item?.[0]?.id} idx={idx} mood={'youtube'}></ChanelCard> : null ||
              item?.[0]?.mood === 'spotify' ? <ChanelCard moood={item?.[0]?.mood} channelDetail={item?.[0]?.id?.data?.artist} text={"1"} mood={'spotify'} idx={idx}></ChanelCard> : null ||
              item?.[0]?.mood === 'appleMusic' ? <ChanelCard moood={item?.[0]?.mood} channelDetail={item?.[0]?.id} text={"1"} mood={'appleMusic'} idx={idx}></ChanelCard> : null
            }
            </section>
          ))}
          </div>
        </section>
    )
}
export default HistoryBar
