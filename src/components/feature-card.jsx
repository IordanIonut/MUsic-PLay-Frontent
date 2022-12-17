import React from 'react'
import './feature-card.css'
import { Link } from 'react-router-dom'

const FeatureCard = ({playlist}) => {

  return (
    <div className={`feature-card-feature-card card-music`} style={playlist?.id ?{opacity: '0.6', transform: 'scale(1.02)', pointerEvents: 'none'}: null}>
      <Link to={ `/video/${playlist?.playlistId}` || `/video/${playlist?.id}`}>
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
        alt='imageaaaaaaaaaaaaaaaaaa'
        src={playlist?.thumbnail?.url  ?  playlist?.thumbnail?.url : null || playlist?.thumbnail  ? playlist?.thumbnail[1]?.url : null}
        className="feature-card-image"
      />
      <div className="text-card" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
        <span className="feature-card-text1">{playlist?.title}</span>
        <span id="artist" className="feature-card-text2">
          {playlist?.channelTitle || playlist?.channel?.name}
        </span>
      </div>
      <span className="feature-card-text3" style={{paddingTop: '30px'}}>
        <span className="">{playlist?.videoCount || playlist?.video_count} Videos</span>
       
      </span>
    </div>
  )
}

export default FeatureCard
