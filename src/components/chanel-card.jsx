import React from 'react'
import '../views/home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ChanelCard = ({channelDetail, idx, mood}) => {
  const [id, setId] = useState('');

  useEffect(() =>{
    if(mood === 'spotify'){
      let c = channelDetail?.data?.uri.split(':');
      setId(c[2]);
  }
  },[mood]);

  return(
      <div className={`music-music `} style={{display: 'flex'}}>
        <Link to={channelDetail?.channelId ? `/channel/${channelDetail?.channelId}` : null ||
           channelDetail?.[0]?.id?.id ? `/channel/${channelDetail?.[0]?.id?.id}` : null ||
           channelDetail?.id ? `/channel/${channelDetail?.id}` : null ||
           channelDetail?.data?.uri ? `/channel/${id}` : null ||
           channelDetail?.adamid ? `/channel/${channelDetail?.adamid}` : null }>
      <div className="button music-line"><span>{idx}</span>
        <img style={{marginLeft: '50px'}}
              alt='11111111111111111111111111111111111111111111111111111111'
              src={channelDetail?.[0]?.id?.snippet?.thumbnails?.high?.url ? channelDetail?.[0]?.id?.snippet?.thumbnails?.high?.url  : null ||
                channelDetail?.snippet?.thumbnails?.high?.url ? channelDetail?.snippet?.thumbnails?.high?.url : null ||
                channelDetail?.thumbnail?.[1]?.url ? channelDetail?.thumbnail?.[1]?.url : null || 
                channelDetail?.thumbnail?.[0]?.url  ? channelDetail?.thumbnail?.[0]?.url  : null ||
                channelDetail?.data?.visuals?.avatarImage?.sources[1]?.url ? channelDetail?.data?.visuals?.avatarImage?.sources[1]?.url : null ||
                channelDetail?.avatar ? channelDetail?.avatar : null}
              className="music-image">
          </img>
        <span className="music-text04" style={{marginLeft: '50px'}}>{channelDetail?.channelTitle || channelDetail?.[0]?.id?.snippet?.title || channelDetail?.snippet?.title ||
                channelDetail?.data?.profile?.name || channelDetail?.name}</span>
        <span className="music-text04" style={{marginLeft: '50px'}}>{channelDetail?.subscriberCount || channelDetail?.statistics?.subscriberCount || channelDetail?.[0]?.id?.statistics?.subscriberCount}</span>
        </div>
        </Link>
      </div>
    )
}

export default ChanelCard