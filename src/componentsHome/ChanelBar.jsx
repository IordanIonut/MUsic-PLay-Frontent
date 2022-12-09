import React, { useEffect, useState } from 'react'
import Music from "../components/music";
import '../views/home.css'
import {useParams} from 'react-router-dom';
import { ApiYouTube1 } from '../utils/fetchAPI'
import FeatureCard from '../components/feature-card';
import  ChanelCard from '../components/chanel-card';
import '../style.css'

const ChanelBar = ({videos, channelDetail}) => {

  return ( 
    <section className="home-chanel"style={{display: 'flex'}}>    
    <div className="home-artist1">
      <img
        alt="image"
        src={channelDetail?.banner?.desktop[0]?.url}
        loading="lazy"
        className="home-image5"
      />
      <div className="home-container3">
        <img
          alt="image"
          src={channelDetail?.avatar[0]?.url}
          loading="eager"
          className="home-image6"
        />
        <span className="home-text20 text">{channelDetail?.title}</span>
        <div className="home-view2 posibili">
          <svg viewBox="0 0 1024 1024" className="home-icon062">
            <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
          </svg>
          <span className="home-text21">
            <span>{channelDetail?.stats?.subscribersText}</span>
            <br></br>
          </span>
        </div>
        <div className="home-video2 posibili buttonChange">
          <svg viewBox="0 0 1024 1024" className="home-icon064">
            <path d="M384 426l298 172-298 170v-342zM896 854v-512h-768v512h768zM896 256q36 0 61 25t25 61v512q0 34-26 59t-60 25h-768q-34 0-60-25t-26-59v-512q0-36 25-61t61-25h324l-140-140 30-30 170 170 170-170 30 30-140 140h324z"></path>
          </svg>
        </div>
        <div className="home-play-list03 posibili buttonChange">
          <button className="home-button20 button account">
            <svg viewBox="0 0 1024 1024" className="home-icon066">
              <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
            </svg>
          </button>
        </div>
        <div className="home-play-list04 posibili buttonChange">
          <button className="home-button21 button account">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-icon068"
            >
              <path d="M877.714 128v640c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-306.857l-438.857 135.429v405.143c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-552.571c0-24 16-45.143 38.857-52.571l475.429-146.286c5.143-1.714 10.286-2.286 16-2.286 30.286 0 54.857 24.571 54.857 54.857z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="home-play-list05 music-card">
      <span className="home-text24 text">Playlist FeatureCard rootClassName="feature-card-root-class-name4"</span>
    </div>
  
    <div className="home-list2 music-list">
      <span className="home-text25 text">
        <br></br>
        <br></br>
      </span> 
      {videos.map((item, idx) => (
      <div key={idx} style={{width: '100%' }}> 
      {  <Music video={item} idx={idx}></Music>}
      </div>
    ))}
    </div>
  </section>
  )
}
export default ChanelBar
