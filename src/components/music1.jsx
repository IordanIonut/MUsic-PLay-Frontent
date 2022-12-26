import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './music1.css'
import Cookies from 'js-cookie'

const Music1 = ({video, idx, idSearch,pointerEvents}) => {
 
  return (
    <div className="music1-music" style={video?.videoId ? {opacity: '0.6', marginLeft: '0px', marginRight: '0px'} : null || {pointerEvents}}>
      <Link to={video?.videoId ? `/video/${video?.videoId}` : null || video?.id ? `/video/${idSearch}` : null}
      className="button music-line music1-line"
           onClick={() => { !video?.videoId  ?  (Cookies.set('idSongPlayList',[video?.id, video?.thumbnail?.url, video?.title, video?.channel?.name, 
                                                                video?.duration_formatted, video?.channel?.id]),Cookies.set('idChannel', video?.id),
                   Cookies.set('playlistActivate', '1')) : null}}>
        <span id="number" className="music1-text">#{++idx }
        </span>
        <img
          alt='sadasda'
          src={video?.thumbnail?.[0]?.url || video?.thumbnail?.url  || video?.thumb}
          className="music1-image"
        />
        <span id="song" className="music1-text01">
          <span>
          {video?.channelTitle || video?.author || video?.channel?.name}
          </span>
          <br></br>
        </span>
        <span className="music1-text04">
          <span >{ video?.title ? video?.title.slice(0,50) : null}</span>
          <br></br>
        </span>
        <svg viewBox="0 0 1024 1024" className="music1-icon">
          <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
        </svg>
        <span className="music1-text07">{video?.viewCount || video?.duration || video?.view_count }</span>
        <svg viewBox="0 0 1024 1024" className="music1-icon2">
          <path d="M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"></path>
        </svg>
        <span className="music1-text08">
          <span>{ video?.lengthText || video?.length  || video?.duration_formatted || video?.view_count}</span>
          <br></br>
        </span>
      </Link>
      <button className="music1-button button favorite">
        <svg viewBox="0 0 1024 1024" className="music1-icon4">
          <path d="M512 910l-62-56q-106-96-154-142t-107-114-81-123-22-113q0-98 67-166t167-68q116 0 192 90 76-90 192-90 100 0 167 68t67 166q0 78-52 162t-113 146-199 186z"></path>
        </svg>
      </button>
      <button className="music1-button1 button favorite">
        <svg viewBox="0 0 1024 1024" className="music1-icon6">
          <path d="M512 682q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM512 342q-34 0-60-26t-26-60 26-60 60-26 60 26 26 60-26 60-60 26z"></path>
        </svg>
      </button>
    </div>
  )
}


export default Music1
