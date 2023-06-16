import React, {useEffect, useState} from 'react'
import Music from "../components/music";
import '../views/home.css'
import '../components/music.css'
import '../componentsHome/VideoBar'
import ChanelCard from '../components/chanel-card';
import { ApiYouTube4, ApiYouTube2, ApiSpotify1, ApiSpotify2, ApiShazam1, ApiDataBaseGet} from '../utils/fetchAPI'
import FeatureCard from '../components/feature-card';

const SearchBar = ({selectedFiltre, mood, idSp}) => {
  const [videos, setVideo] = React.useState([]);
  const [type, setType] = React.useState("video");
  const [arrayDB, setArrayBD] = useState([]);

    useEffect(() =>{
      if(mood === 'youtube'){
        if(type === "video" || type === "playlist" || type === "channel")
          ApiYouTube4(`search?query=${selectedFiltre}&type=${type}`).then((data) => setVideo(data?.data));
        else
          ApiYouTube4(`search?query=${selectedFiltre}&geo=RO&lang=en&features=live`).then((data) => setVideo(data?.data));
      }
      if(mood === 'spotify'){
        let ex;
        if(type === "video")
          ex = 'track';
        if(type === 'playlist')
          ex = 'playlists';
        if(type === 'channel')
          ex = 'artists';
        if(type === 'playlist' || type === 'channel') 
          ApiSpotify1(`search/?q=${selectedFiltre}&type=${ex}`).then((data) => setVideo(data));
        else
          ApiSpotify2(`search/?term=${selectedFiltre}&type=${ex}`).then((data) => setVideo(data));
      }
    },[selectedFiltre,type, mood]);

    useEffect(() =>{
      if(mood === 'appleMusic'){
        ApiShazam1(`search?term=${selectedFiltre}`).then((data) => setVideo(data));
      }
    },[selectedFiltre, mood]);

    const styleChangeOn=((idClass)=>{
      document.getElementById(idClass).classList.add("hoverType");
    });

    useEffect(() =>{
      if(idSp != ''){
        if(type === 'video')
          ApiDataBaseGet(`favorite/search?userId=${idSp}&type=video&mood=${mood}`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log(err?.message)});
        if(type === 'playlist')
          ApiDataBaseGet(`favorite/search?userId=${idSp}&type=playlist&mood=${mood}`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log(err?.message)});
        if(type === 'channel')
          ApiDataBaseGet(`favorite/search?userId=${idSp}&type=channel&mood=${mood}`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log(err?.message)});
        }
    }, [type, idSp, mood]);

    const styleChangeOf=((idClass)=>{
      document.getElementById(idClass).classList.remove("hoverType");
    });

    return (
    <section className="home-seach music-list"style={{display: 'flex', alignContent: 'baseline'}}>
      <span className="home-text62 text">
        <br></br>
        <br></br>
      </span>
        <div className="home-share2 posibili buttonChange" name="music" onClick={() => {setType('video');
            styleChangeOn('video'); styleChangeOf('playlist'); styleChangeOf('channel');styleChangeOf('live1');}}>
            <button id="video" className="home-button22 button account hoverType">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"></path>
              </svg>
            </button>
          </div>
          {mood != 'appleMusic' ? <div className="home-play-list06 posibili buttonChange" name="playlist"  onClick={() => {setType('playlist');
          styleChangeOn('playlist'); styleChangeOf('video'); styleChangeOf('channel');styleChangeOf('live1');}}>
            <button id="playlist"  className="home-button23 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
              </svg>
            </button>
          </div> : null }
          {(mood != 'appleMusic') && (mood != 'spotify') ? <div className="home-play-list06 posibili buttonChange" name="live1" onClick={() => {setType('live');
          styleChangeOn('live1'); styleChangeOf('playlist'); styleChangeOf('video'); styleChangeOf('channel');}}>
            <button id="live1"  className="home-button23 button account">
              <svg xmlns="http://www.w3.org/2000/svg" className="home-icon072" viewBox="0 0 16 16">
                <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a6.785 6.785 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a4.473 4.473 0 0 0 .268-.148 6.75 6.75 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2Z"/>
                <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
              </svg>
            </button>
          </div> : null}
          <div className="home-like2 posibili buttonChange" name="channel" style={{marginRight: '20vh'}} onClick={() => {setType('channel');
          styleChangeOn('channel'); styleChangeOf('video'); styleChangeOf('playlist');styleChangeOf('live1');}}>
            <button id="channel"  className="home-button24 button account">
              <svg xmlns="http://www.w3.org/2000/svg"className="home-icon074" viewBox="0 0 16 16">
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
              </svg>
            </button>
          </div>
          <div className="home-card2 music-card">
          {mood === 'youtube'  && Array.isArray(videos)  && videos.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && (type === 'video' ? {width: '100%'}: null ||
                       type === 'live' ? {width: '100%'}: null ||
                       type === 'channel' ? {width: '100%'}: null ||
                       type === 'playlist' ? {marginLeft: ''} : null)}> 
            {type==='video' && <Music color={arrayDB?.find((s) => s?.content_id?.idPage === item?.videoId)}  video={item} idx={id} page='0'></Music>}
            {type==='live' && <Music color={arrayDB?.find((s) => s?.content_id?.idPage === item?.id)}  video={item} idx={id} page='2'></Music>}
            {type==='channel' && <ChanelCard channelDetail={item} idx={id} ></ChanelCard>}
            {type==='playlist'&& <FeatureCard playlist={item} idx={id} ></FeatureCard>}
            </section>
          ))}
          {mood === 'spotify' &&  Array.isArray(videos?.playlists?.items) && videos?.playlists?.items.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && type === 'playlist' ? {marginLeft: ''} : null}> 
              {type==='playlist'&& <FeatureCard   text={"1"} playlist={item} idx={id} mood={mood}></FeatureCard>}
            </section>
          ))}
          {mood === 'spotify' && Array.isArray(videos?.tracks?.items) && videos?.tracks?.items.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && (type === 'video' ? {width: '100%'}: null)}> 
              {type === 'video' && <Music color={arrayDB?.find((s) => s?.content_id?.idPage === item?.id)} video={item} idx={id} page='0' mood={mood}></Music>}
            </section>
          ))}
          {mood === 'spotify' && Array.isArray(videos?.episodes?.items) && videos?.episodes?.items.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && type === 'live' ? {width: '100%'}: null }> 
              {type==='live' && <Music video={item} idx={id} page='1' mood={mood}></Music>}
            </section>
          ))}
          {mood === 'spotify' && Array.isArray(videos?.artists?.items) && videos?.artists?.items.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && type === 'channel' ? {width: '100%'}: null }> 
              {type==='channel' && <ChanelCard channelDetail={item} idx={id} mood={mood}></ChanelCard>}
            </section>
          ))}
          {mood === 'appleMusic' && type === 'video' && Array.isArray(videos?.tracks?.hits) && videos?.tracks?.hits.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && (type === 'video' ? {width: '100%'}: null)}> 
              {type==='video' && <Music color={arrayDB?.find((s) => s?.content_id?.idPage === item?.key)} video={item} treding={'1'} treding1={'1'} idx={id} page='0' mood={mood}></Music>}
            </section>
          ))}
          {mood === 'appleMusic' && type === 'channel' && Array.isArray(videos?.artist?.hits) && videos?.artist?.hits.map((item, id) => (
            <section key={id} style={{transitionDelay: '1s'} && type === 'channel' ? {width: '100%'}: null }> 
              {type==='channel' && <ChanelCard channelDetail={item?.artist} idx={id} mood={mood}></ChanelCard>}
            </section>
          ))}
          </div>
  </section>
  )
}
export default SearchBar