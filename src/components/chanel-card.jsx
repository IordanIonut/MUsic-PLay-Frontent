import React from 'react'
import '../views/home.css'
import { Link } from 'react-router-dom'


const ChanelCard = ({channelDetail, idx}) => {
    return(
      <div className={`music-music `} style={{display: 'flex'}}>
        <Link to={`/channel/${channelDetail?.channelId}`}>
      <div className="button music-line"><span>{idx}</span>
        <img style={{marginLeft: '50px'}}
              alt='11111111111111111111111111111111111111111111111111111111'
              src={channelDetail ? channelDetail?.thumbnail[0]?.url : channelDetail?.thumbnail[1]?.url}
              className="music-image">
          </img>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.channelTitle}</span>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.subscriberCount}</span>
        </div>
        </Link>
      </div>
    )
}

export default ChanelCard