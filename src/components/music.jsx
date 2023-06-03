import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiYouTube9 } from '../utils/fetchAPI'
import Cookies from 'js-cookie';
import colors from "../utils/colors";
import './music.css'

const Music = ({video, idx, color, page, mood, treding, treding1, moood}) => {
  const [like, setLike] = useState([]);
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

  function toTime(seconds) {
    var date = new Date(null);
    date?.setSeconds(seconds);
    return date?.toISOString()?.substr(11, 8);
  }

  function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const hours = date?.getUTCHours()?.toString()?.padStart(2, '0');
    const minutes = date?.getUTCMinutes()?.toString()?.padStart(2, '0');
    const seconds = date?.getUTCSeconds()?.toString()?.padStart(2, '0');
    const milliseconds1 = date?.getUTCMilliseconds()?.toString()?.padStart(3, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math?.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000)?.toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  const idxx = video?.trackMetadata?.trackUri.split(':') || '';

  useEffect(() =>{
    if(like && page === '1'&& mood !== 'spotify')
      ApiYouTube9(`video?id=${video?.id}`).then((data2) => setLike(data2));
  },[video?.id]);

  useEffect(()=>{
    if(mood === 'appleMusic'){
      if(video !== undefined){
        const a = video?.artwork?.url.split('{w}x{h}');
        setImage(a?.[0] + "3000x3000" + a?.[1]);
      }
    }
  },[video]);
  
  return (
    <div className={`music-music `} style={{display: 'flex'}}>
      <Link to={video?.video?.videoId ? `/video/${video?.video?.videoId}` : null ||
          video?.id ? `/video/${video?.id}` : null ||
          video?.id?.videoId ? `/video/${video?.id?.videoId}` : null ||
          video?.videoId ? `/video/${video?.videoId}` : null ||
          video?.[0]?.id?.id ? `/video/${video?.[0]?.id?.id}` : null ||
          video?.data?.uri ? `/video/${video?.data?.id}` : null ||
          video?.track?.id ? `/video/${video?.track?.id}` : null ||
          video?.[0]?.id ? `/video/${video?.[0]?.id}` : null ||
          video?.id ? `/video/${video?.id}` : null ||
          video?.trackMetadata?.trackUri ? `/video/${idxx?.[2]}` : null ||
          video?.key ? `/video/${video?.key}` : null ||
          video?.playParams?.id ? `/video/${video?.playParams?.id}` : null} 
          onClick={() =>(mood != undefined || moood != undefined ? Cookies.set('mood',mood || moood) : null) &&
              video?.id ? video?.id && Cookies.set('spotifyType', "123:"+video?.type+':'+video?.id) : null ||
              video?.track?.uri ? video?.track?.uri && Cookies.set('spotifyType', video?.track?.uri) : null || 
              video?.trackMetadata?.trackUri ? video?.trackMetadata?.trackUri && Cookies.set('spotifyType', video?.trackMetadata?.trackUri)  : null ||
              video?.key ? video?.key && Cookies.set('spotifyType', "123:"+video?.type+':'+ video?.key) : null ||
              video?.playParams?.id ? video?.playParams?.id && Cookies.set('spotifyType', "123:"+video?.playParams?.kind+':'+ video?.playParams?.id) : null}>
      <div className="button music-line">
      <span id="number" className="music-text" >#{++idx}</span>
        <img
           alt='imageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' 
           src={video?.video?.thumbnails ?  video?.video?.thumbnails[1]?.url : null || 
                video?.videoThumbnails ? video?.videoThumbnails[1]?.url : null || 
                video?.thumbnail?.[3]?.url ? video?.thumbnail?.[3]?.url : null ||
                video?.thumbnail && page === '1' ? video?.thumbnail  : null || 
                video?.thumbnail?.[1]?.url  ? video?.thumbnail[1]?.url : null ||
                video?.thumbnail?.url ? video?.thumbnail?.url : null || 
                video?.[0]?.id?.thumb  ? video?.[0]?.id?.thumb : null ||
                video?.thumbnail?.[0]?.url && page === '2' ? video?.thumbnail?.[0]?.url : null ||
                video?.thumbnail?.[1]?.url && page === '2' ? video?.thumbnail?.[1]?.url : null ||
                video?.thumbnail?.[3]?.url ? video?.thumbnail?.[3]?.url : null ||
                video?.thumbnail?.[0]?.url ? video?.thumbnail?.[0]?.url : null ||
                video?.[0]?.id?.thumbnail?.url ? video?.[0]?.id?.thumbnail?.url : null ||
                video?.data?.albumOfTrack?.coverArt?.sources?.[2]?.url ? video?.data?.albumOfTrack?.coverArt?.sources?.[2]?.url : null ||
                video?.data?.coverArt?.sources?.[2]?.url ? video?.data?.coverArt?.sources?.[2]?.url : null || 
                video?.album?.cover?.[2]?.url ? video?.album?.cover?.[2]?.url : null || 
                video?.podcast?.cover?.[2]?.url ? video?.podcast?.cover?.[2]?.url : null || 
                video?.track?.album?.coverArt?.sources?.[2]?.url ? video?.track?.album?.coverArt?.sources?.[2]?.url : null ||
                video?.trackMetadata?.displayImageUri ? video?.trackMetadata?.displayImageUri : null ||
                video?.[0]?.album?.images?.[0]?.url ? video?.[0]?.album?.images?.[0]?.url : null ||
                video?.track?.album?.images?.[0]?.url ? video?.track?.album?.images?.[0]?.url : null ||
                video?.album?.images?.[0]?.url ? video?.album?.images?.[0]?.url : null ||
                video?.images?.coverarthq ? video?.images?.coverarthq : null ||
                video?.images?.default ? video?.images?.default : null ||
                image ? image : null}
          className="music-image"
        />
        <span id="song" className="music-text01">
          <span className="">
            {video?.video?.video?.title ? video?.video?.title.slice(0,50) : null || 
             video?.author ? video?.author.slice(0,50) : video?.channelTitle || 
             video?.channelTitle ? video?.channelTitle.slice(0,50) : null || 
             like && page === '1'&& mood !== 'spotify' ? like?.videoDetails?.author : null||
             video?.snippet ? video?.snippet?.title.slice(0,50) : null || 
             video?.channel?.name ? video?.channel?.name : null ||
             video?.video?.channelName ? video?.video?.channelName : null ||
             video?.publishedText ? video?.publishedText.slice(0,50) : null ||
             video?.[0]?.id?.author ? video?.[0]?.id?.author : null || 
             video?.[0]?.album?.artists?.[0]?.name ? video?.[0]?.album?.artists?.[0]?.name : null ||
             video?.track?.album?.artists?.[0]?.name ? video?.track?.album?.artists?.[0]?.name : null ||
             video?.[0]?.id?.channel?.name ? video?.[0]?.id?.channel?.name : null ||
             video?.data?.artists?.items?.[0]?.profile?.name ? video?.data?.artists?.items?.[0]?.profile?.name : null ||
             video?.artists?.[0]?.name ? video?.artists?.[0]?.name : null ||
             video?.heading?.subtitle ? video?.heading?.subtitle : null ||
             page === '1'&& mood === 'spotify' && video?.podcast?.publisherName ? video?.podcast?.publisherName : null ||
             video?.trackMetadata?.artists?.[0]?.name ? video?.trackMetadata?.artists?.[0]?.name : null || 
             video?.subtitle ? video?.subtitle : null}
          </span>
        </span>
        <span className="music-text04">
          <span className="">{video?.video ? video?.video?.title.slice(0,50) : null || 
          video?.title ? video?.title.slice(0,50) : null ||  
          video?.snippet ? null : null || 
          video?.[0]?.id?.title ? video?.[0]?.id?.title : null || 
          video?.data?.name ? video?.data?.name : null || 
          video?.name ? video?.name : null ||
          video?.[0]?.name ? video?.[0]?.name : null ||
          video?.track?.name ? video?.track?.name : null ||
          video?.heading?.title ? video?.heading?.title : null ||
          video?.track?.name ? video?.track?.name : null || 
          video?.trackMetadata?.trackName ? video?.trackMetadata?.trackName : null}</span>
          <br className=""></br>
        </span>
         {treding === undefined ? <svg viewBox="0 0 1024 1024" className="music-icon">
          <path
            d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"
            className=""
          ></path>
        </svg> : null}
        <span className="music-text07">{video?.video?.stats?.views ? formatNumber(video?.video?.stats?.views) : null ||  video?.views ? formatNumber(video?.views) : null ||
              video?.viewCount ?  formatNumber(video?.viewCount) : null || video?.[0]?.id?.views ? formatNumber(video?.[0]?.id?.views) : null 
                ||like?.videoDetails?.viewCount ?  formatNumber(like?.videoDetails?.viewCount) : null || 
                video?.[0]?.id?.view_count ? formatNumber(video?.[0]?.id?.view_count) : null || 
                video?.video?.viewCountText ? video?.video?.viewCountText : null ||
                video?.track?.playcount ? formatNumber(video?.track?.playcount) : null}</span>    
        {treding1 === undefined ? <svg viewBox="0 0 1024 1024" className="music-icon2">
          <path
            d="M658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254zM512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"
            className=""
          ></path>
        </svg> : null}
        <span className="music-text08">
          <span className="">{video?.video?.lengthSeconds ? toTime(video?.video?.lengthSeconds) : null ||
                video?.[0]?.duration_ms ? millisToMinutesAndSeconds(video?.[0]?.duration_ms) : null ||
                video?.lengthSeconds ? toTime(video?.lengthSeconds) : null || 
                video?.[0]?.id?.length ? video?.[0]?.id?.length : null ||
                video?.lengthText ? video?.lengthText || 'Live' : null ||
                video?.video?.lengthText ? video?.video?.lengthText : null ||
                video?.duration ? formatTime(video?.duration) : null ||
                video?.[0]?.id?.duration_formatted ? video?.[0]?.id?.duration_formatted : null ||
                mood === 'youtube' && video?.timeText ? video?.timeText || 'Live' : null ||
                mood === 'youtube' && video?.durationText ? video?.durationText : null ||
                video?.track?.duration_ms ? millisToMinutesAndSeconds(video?.track?.duration_ms) : null ||
                video?.data?.duration?.totalMilliseconds ? toTime(video?.data?.duration?.totalMilliseconds) : null ||
                video?.track?.duration?.totalMilliseconds ? millisToMinutesAndSeconds(video?.track?.duration?.totalMilliseconds) : null ||
                video?.trackMetadata?.releaseDate ? video?.trackMetadata?.releaseDate : null}</span>
          <br className=""></br>
        </span>
      </div>
      <button className="button favorite music-button">
        <svg viewBox="0 0 1024 1024" style={{fill: colors?.[color]?.hex || colors?.[color?.fill]?.hex}} className="music-icon6">
          <path
            d="M512 910l-62-56q-106-96-154-142t-107-114-81-123-22-113q0-98 67-166t167-68q116 0 192 90 76-90 192-90 100 0 167 68t67 166q0 78-52 162t-113 146-199 186z"
            className=""
          ></path>
        </svg>
      </button>
      </Link>
    </div>
  )
}
export default Music
