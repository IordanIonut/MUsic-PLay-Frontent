import React from 'react'
import '../views/home.css'
import { Link } from 'react-router-dom'

const demoURL='/video/GDa8kZLNhJ4';


const ChanelCard = ({channelDetail}) => {
    return(
      <div className={`music-music `} style={{display: 'flex'}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className="button music-line">
        <img style={{marginLeft: '50px'}}
              alt={channelDetail?.snippet?.thumbnails?.high?.url}
              src={channelDetail?.snippet?.thumbnails?.high?.url}
              className="music-image">
          </img>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.snippet.title}</span>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.statistics?.subscriberCount && (parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString())} views</span>
          <br className=""></br>
        </div>
        </Link>
      </div>
    )
}

export default ChanelCard