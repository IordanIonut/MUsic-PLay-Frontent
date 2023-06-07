import React, {useState, useEffect, useRef} from 'react'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import {setDuration, setCurrentTime, toggleMute, playVideo, pauseVideo, setPreview, setNext  } from '../utils/actions';

const PlayerSong = () => {
    const dispatch = useDispatch();
    const playerRef = useRef(null);
    const { urlReactPlayer, playing, muted, loop, currentTime } = useSelector((state) => state);
  
    const handleProgress = ({ playedSeconds }) => {
      dispatch(setCurrentTime(playedSeconds));
    };
  
    const handleDuration = (duration) => {
      dispatch(setDuration(duration));
    };
  
    useEffect(() => {
      if (!playing) {
        dispatch(playVideo());
      }
    }, []);
  
    useEffect(() => {
      if (playerRef?.current && currentTime !== null) {
        const current = playerRef?.current?.getCurrentTime();
        if (Math.abs(current - currentTime) > 1) {
          playerRef?.current?.seekTo(currentTime);
        }
      }
    }, [currentTime]);
  
    return (
      <ReactPlayer
        autoFocus
        playsInline
        volume={1}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        loaded
        className="home-iframe"
        style={{ display: "none", zIndex: 999 }}
        url={`https://www.youtube.com/watch?v=${urlReactPlayer}`}
        ref={playerRef}
        playing={playing}
        muted={muted}
        loop={loop}
        onStart={() => {
          if (currentTime > 0) {
            playerRef.current.seekTo(currentTime);
          }
        }}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
    );
  };
  
  export default PlayerSong;  