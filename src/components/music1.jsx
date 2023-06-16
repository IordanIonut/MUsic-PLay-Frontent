import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './music1.css'
import Cookies from 'js-cookie'
import colors from '../utils/colors';

const Music1 = ({video, color, idx, idSearch,pointerEvents, text, mood, albums, playlist, idArtist, imArtist, moood}) => {
  const [image, setImage] = React.useState('');

  function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000)?.toFixed(2) + ' B';
    } else if (num >= 1000000) {
      return (num / 1000000)?.toFixed(2) + ' M';
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(2) + ' K';
    } else {
      return num?.toString();
    }
  }

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math?.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000)?.toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  useEffect(()=>{
    if(mood === 'appleMusic'){
        const a = video?.artwork?.url.split('{w}x{h}') || video?.attributes?.artwork?.url.split('{w}x{h}');
        setImage(a?.[0] + "1425x1425" + a?.[1]);
    }
  },[playlist]);

  return (
    <div className="music1-music" style={video?.videoId ? {opacity: '0.6', marginLeft: '0px', marginRight: '0px'} : null || {pointerEvents}}>
      <Link id={video?.id} to={mood === 'youtube' ? (video?.videoId !== undefined && playlist === '0' ? `/video/${video?.videoId}` : null || 
                video?.id !== undefined && playlist === '0'  ? `/video/${idSearch}` : null) : null || 
          mood === 'spotify' ? (video?.id && playlist === '0'  ? `/video/${video?.id}` : null) : null ||
          mood === 'appleMusic' ? (video?.id && playlist === '0' ? `/video/${video?.id}` : playlist === '0' && video?.attributes?.playParams?.id === undefined && 
                video?.key === undefined && `/video/${video?.idSearch}`) : null}
        className="button music-line music1-line"
          onClick={() => {(mood != undefined || moood != undefined ? Cookies.set('mood',mood || moood) : null) && (
                  mood ==='youtube' ?  (video?.id ? (Cookies.set('idSongPlayList',[video?.id,"0", video?.thumbnail?.url,"0", video?.title,"0",
                          video?.channel?.name,"0", video?.duration_formatted,"0", video?.channel?.id]),Cookies.set('idChannel', video?.id), Cookies.set('playlistActivate', '1')): null) :null||
                  mood === 'spotify' ? (playlist === '0' && video?.id ? Cookies.set('spotifyType', '123:'+video?.type+":"+video?.id) :
                          (Cookies.set('idSongPlayList',[video?.id || video?.track?.id || video?.[0]?.id,"0", 
                          video?.album?.images?.[0]?.url || video?.track?.album?.images?.[0]?.url || video?.[0]?.album?.images?.[0]?.url,"0", 
                          video?.name || video?.track?.name  || video?.[0]?.name ,"0", 
                          video?.artists?.[0]?.name || video?.track?.artists?.[0]?.name || video?.[0]?.artists?.[0]?.name,"0",
                          millisToMinutesAndSeconds(video?.duration_ms || video?.track?.duration_ms || video?.[0]?.duration_ms),"0", 
                          video?.album?.artists?.[0]?.id || video?.track?.album?.artists?.[0]?.id || video?.[0]?.album?.artists?.[0]?.id,"0",
                          video?.popularity || video?.track?.popularity || video?.[0]?.popularity]),Cookies.set('idChannel', video?.album?.artists?.[0]?.id), Cookies.set('playlistActivate', '1'))) : null ||
                  mood === 'appleMusic' ? (playlist === '0' && video?.id ? video?.id &&  Cookies.set('spotifyType', '123:'+video?.value?.attributes?.type+":"+video?.id) : (Cookies.set('idSongPlayList',
                    [video?.playParams?.id || video?.key || video?.attributes?.playParams?.id,"0", imArtist || video?.images?.coverart || image,"0", 
                    video?.name || video?.subtitle || video?.attributes?.artistName,"0", 
                    video?.artistName || video?.title || video?.attributes?.name,"0", video?.releaseDate || video?.releasedate || video?.attributes?.releaseDate,"0", idArtist || video?.artists?.[0]?.adamid]),
                    Cookies.set('idChannel', idArtist || video?.artists?.[0]?.adamid), Cookies.set('playlistActivate', '1'))) : null)}}>
        <span id="number" className="music1-text">#{++idx }
        </span>
        <img
          alt='sadasda'
          src={video?.thumbnail?.[0]?.url || video?.thumbnail?.url || video?.track?.album?.images?.[0]?.url || video?.[0]?.album?.images?.[0]?.url || video?.images?.[0]?.url ||
            video?.thumb || albums || video?.album?.images?.[0]?.url || video?.images?.coverarthq || video?.value?.attributes?.images?.coverArtHq || image}
          className="music1-image"
        />
        <span id="song" className="music1-text01">
          <span> {video?.channelTitle || video?.author || video?.channel?.name || video?.track?.artists?.[0]?.name || video?.artists?.[0]?.name || video?.[0]?.artists?.[0]?.name || video?.subtitle || 
            video?.artistName || video?.value?.attributes?.primaryArtist || video?.attributes?.artistName}
          </span>
          <br></br>
        </span>
        <span className="music1-text04">
          <span >{ video?.title ? video?.title.slice(0,50) : null || video?.name || video?.track?.name || video?.[0]?.name || video?.value?.attributes?.title || video?.attributes?.name}</span>
          <br></br>
        </span>
        { mood != 'appleMusic' && mood != 'spotify' ? <svg viewBox="0 0 1024 1024" className="music1-icon">
          <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
        </svg> : null}
        <span className="music1-text07">{formatNumber(video?.viewCount) || formatNumber(video?.duration) || formatNumber(video?.view_count) }</span>
        <svg viewBox="0 0 1024 1024" className="music1-icon2">
          <path d="M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"></path>
        </svg> : null 
        <span className="music1-text08">
          <span>{video?.releasedate ? video?.releasedate : null || video?.attributes?.releaseDate ? video?.attributes?.releaseDate : null ||
            mood === 'youtube' ? (video?.lengthText || video?.length  || video?.duration_formatted || video?.view_count) : null ||
            mood === 'spotify' ?  (video?.[0]?.duration_ms ? millisToMinutesAndSeconds(video?.[0]?.duration_ms) : null ||
            video?.track?.duration_ms ? millisToMinutesAndSeconds(video?.track?.duration_ms) : null || video?.duration_ms ? millisToMinutesAndSeconds(video?.duration_ms) : null) : null}</span>
          <br></br>
        </span> 
      </Link>
      <button className="button favorite music-button">
        <svg viewBox="0 0 1024 1024" style={{fill: colors?.[color]?.hex || colors?.[color?.fill]?.hex || '#999999'}} className="music-icon6">
          <path
            d="M512 910l-62-56q-106-96-154-142t-107-114-81-123-22-113q0-98 67-166t167-68q116 0 192 90 76-90 192-90 100 0 167 68t67 166q0 78-52 162t-113 146-199 186z"
            className=""
          ></path>
        </svg>
      </button>
    </div>
  )
}


export default Music1
