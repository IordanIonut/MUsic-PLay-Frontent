import React from 'react'
import '../views/home.css'
import { Link } from 'react-router-dom'


const ChanelCard = ({channelDetail, idx}) => {
    return(
      <div className={`music-music `} style={{display: 'flex'}}>
        <Link to={channelDetail?.channelId ? `/channel/${channelDetail?.channelId}` : null || channelDetail?.[0]?.id?.id ? `/channel/${channelDetail?.[0]?.id?.id}` : null}>
      <div className="button music-line"><span>{idx}</span>
        <img style={{marginLeft: '50px'}}
              alt='11111111111111111111111111111111111111111111111111111111'
              src={channelDetail?.[0]?.id?.snippet?.thumbnails?.high?.url ? channelDetail?.[0]?.id?.snippet?.thumbnails?.high?.url  : null ||
                channelDetail?.thumbnail?.[1]?.url ? channelDetail?.thumbnail?.[1]?.url : null || 
                channelDetail?.thumbnail?.[0]?.url  ? channelDetail?.thumbnail?.[0]?.url  : null}
              className="music-image">
          </img>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.channelTitle || channelDetail?.[0]?.id?.snippet?.title}</span>
        <span className="home-text12" style={{marginLeft: '50px'}}>{channelDetail?.subscriberCount || channelDetail?.[0]?.id?.statistics?.subscriberCount}</span>
        </div>
        </Link>
      </div>
    )
}

export default ChanelCard