import React from 'react'
import Music from "../components/music";
import '../views/home.css'
import '../style.css'
import FeatureCard from '../components/feature-card';

const ChanelBar = ({channelDetail,videos, live, playlist, mood}) => {
  const [type, setType] = React.useState("video");
  
  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hoverType");
  });
  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hoverType");
  });

  return ( 
    <section className="home-seach music-list"style={{display: 'flex', alignContent: 'baseline'}}>
    <div className="home-artist1">
      <img
        alt="image"
        src={channelDetail?.brandingSettings?.image?.bannerExternalUrl || channelDetail?.data?.artist?.visuals?.avatarImage?.sources?.[0]?.url}
        loading="lazy"
        className="home-image5"
      />
      <div className="home-container3" style={{display: 'flex'}}>
        <div style={{display: 'flex',alignItems: 'center'}}>
          <img
            alt="image"
            src={ channelDetail?.snippet?.thumbnails?.high?.url || channelDetail?.data?.artist?.visuals?.avatarImage?.sources?.[0]?.url}
            loading="eager"
            className="home-image6"
          />
          <span className="home-text20 text">{channelDetail?.snippet?.title || channelDetail?.data?.artist?.profile?.name}</span>
        </div>
        <div className="home-view2 posibili" >
          <svg xmlns="http://www.w3.org/2000/svg" className="home-icon062" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
          </svg>
          <span className="home-text21">
            <span>{channelDetail?.statistics?.subscriberCount || channelDetail?.data?.artist?.stats?.followers}</span>
            <br></br>
          </span>
        </div>
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
          <div className="home-play-list06 posibili buttonChange" name="live1" onClick={() => {setType('live');
          styleChangeOn('live1'); styleChangeOf('playlist'); styleChangeOf('video');}}>
            <button id="live1"  className="home-button23 button account">
              <svg xmlns="http://www.w3.org/2000/svg" className="home-icon072" viewBox="0 0 16 16">
                <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.269c.144.162.33.324.531.475a6.785 6.785 0 0 0 .907.57l.014.006.003.002A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.003-.002.014-.007a4.473 4.473 0 0 0 .268-.148 6.75 6.75 0 0 0 .639-.421c.2-.15.387-.313.531-.475H2a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2Z"/>
                <path d="M8 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
              </svg>
            </button>
          </div>
      </div>
    </div>
      <div className="home-card2 music-card">
      {mood==='youtube' && type === 'video' && Array.isArray(videos) && videos.map((item, idx) => (
            <section key={idx} style={{transitionDelay: '1s'} && (type === 'video' ? {width: '100%'}: null)}>
              <Music video={item} idx={idx} page='0'></Music>
            </section>
          ))}
      {mood==='youtube' && type === 'playlist' && Array.isArray(playlist) && playlist.map((item, idx) => (
            <section key={idx} style={{transitionDelay: '1s'} && (type === 'playlist' ? {marginLeft: ''} : null)}>
              <FeatureCard playlist={item} idx={idx} ></FeatureCard>
            </section>
      ))}
      {mood==='youtube' && type === 'live' && Array.isArray(live) && live.map((item, idx) => (
            <section key={idx} style={{transitionDelay: '1s'} && (type === 'live' ? {width: '100%'}: null)}>
              <Music video={item} idx={idx} page='1'></Music>
            </section>
      ))}
      {mood==='spotify' && type === 'video' && Array.isArray(videos?.data?.artist?.discography?.topTracks?.items) && videos?.data?.artist?.discography?.topTracks?.items.map((item, idx) => (
            <section key={idx} style={{transitionDelay: '1s'} && (type === 'video' ? {width: '100%'}: null)}>
              <Music video={item} idx={idx} page='0' mood={mood}></Music>
            </section>
          ))}
      {mood==='spotify' && type === 'live' && Array.isArray(channelDetail?.data?.artist?.relatedContent?.discoveredOn?.items) && channelDetail?.data?.artist?.relatedContent?.discoveredOn?.items.map((item, idx) => (
            <section key={idx} style={{transitionDelay: '1s'} && (type === 'live' ? {marginLeft: ''}  : null)}>
              <FeatureCard playlist={item} idx={idx}></FeatureCard>
            </section>
      ))}
      {mood==='spotify' && type === 'playlist'  && Array.isArray(videos?.data?.artist?.discography?.popularReleases?.items)  && videos?.data?.artist?.discography?.popularReleases?.items.map((item, idx) => (
            <section key={idx} style={{transitionDelay: '1s'} && (type === 'playlist' ? {marginLeft: ''} : null)}>
              <FeatureCard playlist={item} idx={idx} ></FeatureCard>
            </section>
      ))}
      </div>
  </section>
  )
}
export default ChanelBar
