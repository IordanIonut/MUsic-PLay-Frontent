import React,{useState, useEffect} from 'react'
import './feature-card.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';

const FeatureCard = ({playlist, text, mood, idxx}) => {
  const [id, setId] = useState('');

  useEffect(() =>{
    if(mood === 'spotify'){
      let c = playlist?.data?.uri.split(':');
      setId(c[2]);
  }
  },[]);

  return (
    <div className={`feature-card-feature-card card-music`} style={playlist?.id && text === '0' ?{opacity: '0.6', transform: 'scale(1.02)', pointerEvents: 'none'}: null}>
      <Link to={ playlist?.playlistId ? `/video/${playlist?.playlistId}` : null || playlist?.id ? `/video/${playlist?.id}` : null ||
       playlist?.[0]?.id?.id ? `/video/${playlist?.[0]?.id?.id}`: null || playlist?.data?.id?.id ? `/video/${playlist?.data?.id}` : null ||
       playlist?.data?.uri ? `/video/${id}` : null ||
       playlist?.releases?.items?.[0]?.id ? `/video/${playlist?.releases?.items?.[0]?.id}` : null ||
       idxx ? idxx : null} onClick={() => playlist?.data?.uri ? playlist?.data?.uri && Cookies.set('spotifyType', playlist?.data?.uri) : null || 
          playlist?.releases?.items?.[0]?.uri ? playlist?.releases?.items?.[0]?.uri && Cookies.set('spotifyType', playlist?.releases?.items?.[0]?.uri) : null ||
          playlist?.uri ? playlist?.uri && Cookies.set('spotifyType', playlist?.uri) : null}>
      <button
        id="card-play"
        name="card-play"
        type="button"
        className="button card-play">
        <svg viewBox="0 0 1024 1024" className="feature-card-icon">
          <path d="M342 214l468 298-468 298v-596z" className=""></path>
        </svg>
      </button>
      </Link>
      <img src={playlist?.thumbnail?.url  ?  playlist?.thumbnail?.url : null ||
           playlist?.thumbnail?.[1]?.url  ? playlist?.thumbnail[1]?.url : null ||
          playlist?.[0]?.id?.thumbnail?.url ? playlist?.[0]?.id?.thumbnail?.url : null ||
           playlist?.thumbnails  ? playlist?.thumbnails[1]?.url : null || 
          playlist?.thumbnail?.[0]?.url ? playlist?.thumbnail?.[0]?.url : null ||
          playlist?.data?.images?.items?.[0]?.sources?.[0]?.url ? playlist?.data?.images?.items?.[0]?.sources?.[0]?.url : null ||
          playlist?.images?.items?.[0]?.sources?.[0]?.url ? playlist?.images?.items?.[0]?.sources?.[0]?.url : null ||
          playlist?.releases?.items?.[0]?.coverArt?.sources?.[2]?.url ? playlist?.releases?.items?.[0]?.coverArt?.sources?.[2]?.url : null || 
          playlist?.images?.[0]?.url ? playlist?.images?.[0]?.url : null }
        className="feature-card-image"
      />
      <div className="text-card" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
        <span className="feature-card-text1">{playlist?.title ? playlist?.title : null || 
        playlist?.[0]?.id?.title ? playlist?.[0]?.id?.title : null ||
        playlist?.data?.name ? playlist?.data?.name : null || 
        playlist?.name ? playlist?.name : null ||
        playlist?.releases?.items?.[0]?.name ? playlist?.releases?.items?.[0]?.name : null}</span>
        <span id="artist" className="feature-card-text2">
          {playlist?.channelTitle ? playlist?.channelTitle : null || 
          playlist?.channel?.name ? playlist?.channel?.name : null ||
          playlist?.[0]?.id?.channel?.name ? playlist?.[0]?.id?.channel?.name : null ||
           playlist?.owner?.name ? playlist?.owner?.name : null ||  
          playlist?.data?.owner?.name ? playlist?.data?.owner?.name : null  ||
          playlist?.owner?.display_name ? playlist?.owner?.display_name : null}
        </span>
      </div>
      <span className="feature-card-text3" style={{paddingTop: '30px'}}>
        <span className="">{playlist?.videoCount ? playlist?.videoCount : null || playlist?.video_count ? playlist?.video_count : null || 
        playlist?.[0]?.id?.video_count ? playlist?.[0]?.id?.video_count :  null || playlist?.tracks?.total ? playlist?.tracks?.total : null || 
         playlist?.videoCountText ? playlist?.videoCountText.replace('videos','') : null} Videos</span>
      </span>
    </div>
  )
}

export default FeatureCard
