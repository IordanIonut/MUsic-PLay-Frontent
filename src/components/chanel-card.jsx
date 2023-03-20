import React from 'react'
import '../views/home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const ChanelCard = ({channelDetail, idx, mood, text}) => {
  const [id, setId] = useState('');
  const [image, setImage] = React.useState('');

  useEffect(() =>{
    if(mood === 'spotify'){
      if(text === undefined){
        let c = channelDetail?.data?.uri?.split(':');
        setId(c[2]);
      }
  }
  },[mood]);

  useEffect(()=>{
    if(mood === 'appleMusic' && text === "1"){
      if(channelDetail !== undefined){
        const a = channelDetail?.attributes?.artwork?.url?.split('{w}x{h}');
        setImage(a?.[0] + "2400x2400" + a?.[1]);
      }
    }
  },[channelDetail]);

  return(
      <div className={`music-music `} style={{display: 'flex'}}>
        <Link to={channelDetail?.channelId ? `/channel/${channelDetail?.channelId}` : null ||
           channelDetail?.[0]?.id?.id ? `/channel/${channelDetail?.[0]?.id?.id}` : null ||
           channelDetail?.id ? `/channel/${channelDetail?.id}` : null ||
           channelDetail?.data?.uri ? `/channel/${id}` : null ||
           channelDetail?.adamid ? `/channel/${channelDetail?.adamid}` : null }>
      <div className="button music-line"><span>{idx}</span>
        <img style={{marginLeft: '50px'}}
              src={channelDetail?.[0]?.id?.snippet?.thumbnails?.high?.url ? channelDetail?.[0]?.id?.snippet?.thumbnails?.high?.url  : null ||
                channelDetail?.snippet?.thumbnails?.high?.url ? channelDetail?.snippet?.thumbnails?.high?.url : null ||
                channelDetail?.thumbnail?.[1]?.url ? channelDetail?.thumbnail?.[1]?.url : null || 
                channelDetail?.thumbnail?.[0]?.url  ? channelDetail?.thumbnail?.[0]?.url  : null ||
                image ? image : null ||
                channelDetail?.visuals?.avatarImage?.sources?.[0]?.url ? channelDetail?.visuals?.avatarImage?.sources?.[0]?.url : null ||
                channelDetail?.data?.visuals?.avatarImage?.sources?.[1]?.url ? channelDetail?.data?.visuals?.avatarImage?.sources?.[1]?.url : null ||
                channelDetail?.avatar ? channelDetail?.avatar : null }
              className="music-image">
          </img>
        <span className="music-text04" style={{marginLeft: '50px'}}>{channelDetail?.channelTitle  || channelDetail?.attributes?.name|| channelDetail?.[0]?.id?.snippet?.title || channelDetail?.snippet?.title ||
                channelDetail?.data?.profile?.name || channelDetail?.name || channelDetail?.profile?.name}</span>
        <span className="music-text04" style={{marginLeft: '50px'}}>{channelDetail?.subscriberCount || channelDetail?.statistics?.subscriberCount ||
            channelDetail?.stats?.followers || channelDetail?.[0]?.id?.statistics?.subscriberCount}</span>
        </div>
        </Link>
      </div>
    )
}

export default ChanelCard