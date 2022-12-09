import React from 'react'
import '../views/home.css'
import { Link } from 'react-router-dom'

const demoURL='/video/GDa8kZLNhJ4';


const ChanelCard = ({channelDetail, idx}) => {
    return(
      <div className={`music-music `} style={{display: 'flex'}}>
        <Link to={`/channel/${channelDetail?.channelId}`}>
      <div className="button music-line"><span>{idx}</span>
        <img style={{marginLeft: '50px'}}
              alt='11111111111111111111111111111111111111111111111111111111'
              src={channelDetail?.channelThumbnail?.url}
              className="music-image">
          </img>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.channelTitle}</span>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.viewCount 
              && (parseInt(channelDetail?.viewCount).toLocaleString())} views</span>
          <br className=""></br>
        </div>
        </Link>
      </div>
    )
}

export default ChanelCard