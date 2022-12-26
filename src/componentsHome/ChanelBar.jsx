import React from 'react'
import Music from "../components/music";
import '../views/home.css'
import '../style.css'

const ChanelBar = ({channelDetail,videos}) => {
  return ( 
    <section className="home-chanel"style={{display: 'flex', transitionDelay: '4s', alignContent: 'baseline'}}>    
    <div className="home-artist1">
      <img
        alt="image"
        src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
        loading="lazy"
        className="home-image5"
      />
      <div className="home-container3" style={{display: 'flex'}}>
        <div style={{display: 'flex',alignItems: 'center'}}>
          <img
            alt="image"
            src={ channelDetail?.snippet?.thumbnails?.high?.url}
            loading="eager"
            className="home-image6"
          />
          <span className="home-text20 text">{channelDetail?.snippet?.title}</span>
        </div>
        <div className="home-view2 posibili" >
          <svg xmlns="http://www.w3.org/2000/svg" className="home-icon062" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
          </svg>
          <span className="home-text21">
            <span>{channelDetail?.statistics?.subscriberCount}</span>
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
    <div className="home-card2 music-card">
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
