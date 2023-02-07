import React from 'react'
import './feature-card.css'
import { Link } from 'react-router-dom'

const FeatureCard = ({playlist, text}) => {

  return (
    <div className={`feature-card-feature-card card-music`} style={playlist?.id && text === '0' ?{opacity: '0.6', transform: 'scale(1.02)', pointerEvents: 'none'}: null}>
      <Link to={ playlist?.playlistId ? `/video/${playlist?.playlistId}` : null || playlist?.id ? `/video/${playlist?.id}` : null || playlist?.[0]?.id?.id ? `/video/${playlist?.[0]?.id?.id}`: null }>
      <button
        id="card-play"
        name="card-play"
        type="button"
        className="button card-play"
      >
        <svg viewBox="0 0 1024 1024" className="feature-card-icon">
          <path d="M342 214l468 298-468 298v-596z" className=""></path>
        </svg>
      </button>
      </Link>
      <img
        src={playlist?.thumbnail?.url  ?  playlist?.thumbnail?.url : null || playlist?.thumbnail  ? playlist?.thumbnail[1]?.url : null ||
          playlist?.[0]?.id?.thumbnail?.url ? playlist?.[0]?.id?.thumbnail?.url : null || playlist?.thumbnails  ? playlist?.thumbnails[1]?.url : null}
        className="feature-card-image"
      />
      <div className="text-card" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
        <span className="feature-card-text1">{playlist?.title ? playlist?.title : null || playlist?.[0]?.id?.title ? playlist?.[0]?.id?.title : null}</span>
        <span id="artist" className="feature-card-text2">
          {playlist?.channelTitle ? playlist?.channelTitle : null || playlist?.channel?.name ? playlist?.channel?.name : null 
          || playlist?.[0]?.id?.channel?.name ? playlist?.[0]?.id?.channel?.name : null }
        </span>
      </div>
      <span className="feature-card-text3" style={{paddingTop: '30px'}}>
        <span className="">{playlist?.videoCount ? playlist?.videoCount : null || playlist?.video_count ? playlist?.video_count : null || 
        playlist?.[0]?.id?.video_count ? playlist?.[0]?.id?.video_count :  null || 
         playlist?.videoCountText ? playlist?.videoCountText.replace('videos','') : null} Videos</span>
       
      </span>
    </div>
  )
}

export default FeatureCard
