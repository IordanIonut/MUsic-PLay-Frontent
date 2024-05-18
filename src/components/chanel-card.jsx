import React from 'react'
import '../views/home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const ChanelCard = ({channelDetail, idx, mood, text, moood}) => {
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

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(0)+ 'M';
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(0) + 'K';
    } else {
      return num?.toString();
    }
  }

  return(
      <div className={`music-music `} style={{display: 'flex'}}>
        <Link to={channelDetail?.channelId ? `/channel/${channelDetail?.channelId}` : null ||
           channelDetail?.[0]?.id?.id ? `/channel/${channelDetail?.[0]?.id?.id}` : null ||
           channelDetail?.id ? `/channel/${channelDetail?.id}` : null ||
           channelDetail?.data?.uri ? `/channel/${id}` : null ||
           channelDetail?.adam_id ? `/channel/${channelDetail?.adam_id}` : null || 
           channelDetail?.adamid ? `/channel/${channelDetail?.adamid}` : null }
           onClick={() => moood != undefined ? Cookies.set('mood',moood) : null}>
      <div className="button music-line"><span>{idx}</span>
        <img style={{marginLeft: '50px'}}
              src={channelDetail?.snippet?.thumbnails?.default?.url ? channelDetail?.snippet?.thumbnails?.default?.url : null ||
                channelDetail?.snippet?.thumbnails?.medium?.url ? channelDetail?.snippet?.thumbnails?.medium?.url : null ||
                channelDetail?.snippet?.thumbnails?.high?.url ? channelDetail?.snippet?.thumbnails?.high?.url : null ||
                channelDetail?.thumbnail?.[3]?.url ? channelDetail?.thumbnail?.[3]?.url : null || 
                channelDetail?.thumbnail?.[2]?.url ? channelDetail?.thumbnail?.[2]?.url : null ||
                channelDetail?.thumbnail?.[1]?.url ? channelDetail?.thumbnail?.[1]?.url : null || 
                channelDetail?.thumbnail?.[0]?.url  ? channelDetail?.thumbnail?.[0]?.url  : null ||
                channelDetail?.snippet?.thumbnails?.default?.url ? channelDetail?.snippet?.thumbnails?.default?.url : null ||
                image ? image : null ||
                channelDetail?.brandingSettings?.image?.bannerExternalUrl ? channelDetail?.brandingSettings?.image?.bannerExternalUrl : null ||
                channelDetail?.visuals?.avatarImage?.sources?.[0]?.url ? channelDetail?.visuals?.avatarImage?.sources?.[0]?.url : null ||
                channelDetail?.data?.visuals?.avatarImage?.sources?.[1]?.url ? channelDetail?.data?.visuals?.avatarImage?.sources?.[1]?.url : null ||
                channelDetail?.avatar ? channelDetail?.avatar : null }
              className="music-image">
          </img>
        <span className="music-text04" style={{marginLeft: '50px'}}>{channelDetail?.channelTitle  || channelDetail?.attributes?.name|| channelDetail?.[0]?.id?.snippet?.title || channelDetail?.snippet?.title ||
                channelDetail?.data?.profile?.name || channelDetail?.name || channelDetail?.profile?.name}</span>
        <span className="music-text04" style={{marginLeft: '50px'}}>{formatNumber(channelDetail?.subscriberCount) || 
        formatNumber(channelDetail?.statistics?.subscriberCount) ||
        formatNumber(channelDetail?.stats?.followers) || formatNumber(channelDetail?.[0]?.id?.statistics?.subscriberCount)}</span>
        </div>
        </Link>
      </div>
    )
}

export default ChanelCard