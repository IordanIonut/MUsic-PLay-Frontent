import React, {useEffect, useState} from 'react'
import Music1 from "../components/music1";
import '../views/home.css'
import ReactPlayer from 'react-player';
import FeatureCard from "../components/feature-card";
import { Link } from 'react-router-dom';
import { ApiYouTube5, ApiYouTube3 } from '../utils/fetchAPI'
import Cookies from 'js-cookie';

const VideoBar = ({videos, id, related, playlist, views}) => {
  const [like, setLike] = useState([]);
  const [icon, setIcon] = useState([]);
  const idSearch=id;

  const idSongPlayList = Cookies.get('idSongPlayList') || '';
  const idSong = idSongPlayList.split(',');

  useEffect(() =>{
   /* if(idSongPlayList === '' && playlist === 1){
      ApiYouTube5(`votes?videoId=${related?.videos?.[0]?.id}`).then((data2) => setLike(data2));
    }else if(idSongPlayList === ''){
      ApiYouTube5(`votes?videoId=${idSearch}`).then((data2) => setLike(data2));
    }else{
      ApiYouTube5(`votes?videoId=${idSong[0]}`).then((data2) => setLike(data2));
    }*/
  },[idSearch,idSong,related]);

  console.log(idSong[1]);
  return (
    <section className="home-video" style={{display: 'flex'}}>
    <div className="home-video1 video">
      <div className="home-container1" style ={{transitionDelay: '4s'}}>
        <ReactPlayer className="home-iframe react-player" autoFocus volume on 
            playsInline frameBorder='0' handleOnReady = {() => setTimeout(() => this.setState({ playing: true }), 100)}
        allow='autoplay; encrypted-media' controls youtube width='100%' height='100%' playing  loaded style={{display: 'flex'}} 
              url={(playlist === 0 ? `https://www.youtube.com/watch?v=${id}` :  undefined || 
                (idSongPlayList === '' && playlist === 1) ? `https://www.youtube.com/watch?v=${related?.videos?.[0]?.id}` :  `https://www.youtube.com/watch?v=${idSong[0]}`)}>
        </ReactPlayer>
        <img style={{display: 'none'}} 
          alt="image"
          src="https://images.unsplash.com/photo-1669158424143-3be4e002b36d?ixid=Mnw5MTMyMXwwfDF8YWxsfDR8fHx8fHwyfHwxNjY5MjI0Nzc0&amp;ixlib=rb-4.0.3&amp;w=300"
          className="home-image3"
        />
      </div>
      <div className="home-test">
        <span className="home-text08">{playlist === 0 ? videos?.title : related?.videos?.author || 
        idSongPlayList === '' && playlist === 1 ? related?.videos?.[0]?.title : views?.title || idSong[2]}
        <br /><br />
        </span>
        <div className="home-share1 posibili buttonChange">
          <button className="home-button15 button account">
            <svg viewBox="0 0 1024 1024" className="home-icon046">
              <path d="M691.797 772.181c1.067-1.408 2.048-2.859 2.987-4.437 0.853-1.493 1.621-3.029 2.304-4.565 3.115-4.608 6.656-8.917 10.581-12.843 15.488-15.488 36.736-25.003 60.331-25.003s44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331c0-13.867 3.285-26.923 9.131-38.485zM695.509 258.389c-0.384-0.725-0.768-1.451-1.195-2.176s-0.853-1.451-1.323-2.133c-6.571-12.075-10.325-25.941-10.325-40.747 0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003c-4.608-4.608-8.704-9.728-12.16-15.275zM328.491 466.944c0.384 0.725 0.768 1.451 1.195 2.176s0.853 1.451 1.323 2.133c6.571 12.075 10.325 25.941 10.325 40.747s-3.755 28.672-10.368 40.789c-0.469 0.683-0.896 1.408-1.323 2.133s-0.811 1.408-1.152 2.133c-3.456 5.547-7.552 10.667-12.16 15.275-15.488 15.488-36.736 25.003-60.331 25.003s-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003c4.608 4.608 8.704 9.728 12.16 15.275zM603.733 259.755l-226.475 132.139c-0.171-0.213-0.384-0.384-0.597-0.597-30.805-30.805-73.557-49.963-120.661-49.963s-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005c0.213-0.213 0.384-0.384 0.597-0.597l226.517 132.011c-4.181 14.805-6.443 30.464-6.443 46.592 0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005c-0.128 0.128-0.299 0.299-0.427 0.427l-226.645-132.053c4.181-14.763 6.4-30.293 6.4-46.379s-2.219-31.659-6.4-46.421l226.475-132.181c0.171 0.213 0.384 0.384 0.597 0.597 30.805 30.848 73.557 50.005 120.661 50.005s89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661c0 16.085 2.219 31.659 6.4 46.421z"></path>
            </svg>
          </button>
        </div>
        <div className="home-play-list01 posibili buttonChange">
          <button className="home-button16 button account">
            <svg viewBox="0 0 1024 1024" className="home-icon048">
              <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
            </svg>
          </button>
        </div>
        <div className="home-like1 posibili buttonChange">
          <button className="home-button17 button account">
            <svg xmlns="http://www.w3.org/2000/svg" className="home-icon050" viewBox="0 0 16 16">
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
            </svg>
          </button>
        </div>
        <div className="home-description posibili buttonChange">
          <button className="home-button18 button account">
            <svg viewBox="0 0 1024 1024" className="home-icon052">
              <path d="M554 384h236l-236-234v234zM682 598v-86h-340v86h340zM682 768v-86h-340v86h340zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"></path>
            </svg>
          </button>
        </div>
      </div>
      <figure className="home-artist artist">
        <div className="home-container2" style ={{transitionDelay: '4s'}}>
          <Link to={playlist === 0 ? `/channel/${videos?.channelid}` : null  || playlist === 1 ? 
                      `/channel/${idSong[5]}`: null }>
          <div className="home-button19 button">
            <img
              alt="image"
              src={ playlist === 0 && views  ? videos?.thumb : null  ||
                idSongPlayList === '' && playlist === 1 ?  related?.videos?.[0]?.thumbnail?.url : idSong[1] }
              className="home-image4"
              loading='eager'
            />
          </div>
          </Link>
          <div className="home-text11" >
            <span className="home-text12">{ playlist === 0 && videos ? videos?.author?.slice(0,20) : videos?.channelTitle?.slice(0,20) || 
                  idSongPlayList === '' && playlist === 1 ? related?.videos?.[0]?.channel?.name?.slice(0,20) : idSong[3].slice(0,20) }</span>
            <span className="home-text12">{videos ? videos?.author?.stats?.subscribersText : null || views ? views?.statistics?.subscriberCount : null}
            </span>
          </div>
        </div>
        <div className="home-view1 posibili">
          <svg viewBox="0 0 1024 1024" className="home-icon054">
            <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
          </svg>
          <span className="home-text14">
            <span>{like?.viewCount}</span>
            <br></br>
          </span>
        </div>
        <div className="home-time posibili">
          <svg viewBox="0 0 1024 1024" className="home-icon056">
            <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <span className="home-text17">{playlist === 0 ? videos?.length : null ||
          idSongPlayList === '' && playlist === 1 ? related?.videos?.[0]?.duration_formatted : idSong[4]}</span>
        </div>
        <div className="home-rating posibili">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="home-icon058"
          >
            <path d="M146.286 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM804.571 438.857c0-38.857-34.857-73.143-73.143-73.143h-201.143c0-66.857 54.857-115.429 54.857-182.857 0-66.857-13.143-109.714-91.429-109.714-36.571 37.143-17.714 124.571-73.143 182.857-16 16.571-29.714 34.286-44 52-25.714 33.143-93.714 130.857-138.857 130.857h-18.286v365.714h18.286c32 0 84.571 20.571 115.429 31.429 62.857 21.714 128 41.714 195.429 41.714h69.143c64.571 0 109.714-25.714 109.714-95.429 0-10.857-1.143-21.714-2.857-32 24-13.143 37.143-45.714 37.143-72 0-13.714-3.429-27.429-10.286-39.429 19.429-18.286 30.286-41.143 30.286-68 0-18.286-8-45.143-20-58.857 26.857-0.571 42.857-52 42.857-73.143zM877.714 438.286c0 33.143-9.714 65.714-28 93.143 3.429 12.571 5.143 26.286 5.143 39.429 0 28.571-7.429 57.143-21.714 82.286 1.143 8 1.714 16.571 1.714 24.571 0 36.571-12 73.143-34.286 101.714 1.143 108-72.571 171.429-178.286 171.429h-73.714c-81.143 0-156.571-24-232-50.286-16.571-5.714-62.857-22.857-78.857-22.857h-164.571c-40.571 0-73.143-32.571-73.143-73.143v-365.714c0-40.571 32.571-73.143 73.143-73.143h156.571c22.286-14.857 61.143-66.286 78.286-88.571 19.429-25.143 39.429-49.714 61.143-73.143 34.286-36.571 16-126.857 73.143-182.857 13.714-13.143 32-21.143 51.429-21.143 59.429 0 116.571 21.143 144.571 76.571 17.714 34.857 20 68 20 106.286 0 40-10.286 74.286-27.429 109.714h100.571c78.857 0 146.286 66.857 146.286 145.714z"></path>
          </svg>
          <span className="home-text18">{like?.likes}</span>
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="home-icon060"
          >
            <path d="M146.286 256c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM804.571 585.143c0-21.143-16-72.571-42.857-73.143 12-13.714 20-40.571 20-58.857 0-26.857-10.857-49.714-30.286-68 6.857-12 10.286-25.714 10.286-39.429 0-26.286-13.143-58.857-37.143-72 1.714-10.286 2.857-21.143 2.857-32 0-66.857-42.286-95.429-105.714-95.429h-73.143c-67.429 0-132.571 20-195.429 41.714-30.857 10.857-83.429 31.429-115.429 31.429h-18.286v365.714h18.286c45.143 0 113.143 97.714 138.857 130.857 14.286 17.714 28 35.429 44 52 55.429 58.286 36.571 145.714 73.143 182.857 78.286 0 91.429-42.857 91.429-109.714 0-67.429-54.857-116-54.857-182.857h201.143c38.286 0 73.143-34.286 73.143-73.143zM877.714 585.714c0 78.857-67.429 145.714-146.286 145.714h-100.571c17.143 35.429 27.429 69.714 27.429 109.714 0 37.714-2.286 72-20 106.286-28 55.429-85.143 76.571-144.571 76.571-19.429 0-37.714-8-51.429-21.143-57.143-56-39.429-146.286-73.143-183.429-21.714-22.857-41.714-47.429-61.143-72.571-17.143-22.286-56-73.714-78.286-88.571h-156.571c-40.571 0-73.143-32.571-73.143-73.143v-365.714c0-40.571 32.571-73.143 73.143-73.143h164.571c16 0 62.286-17.143 78.857-22.857 82.286-28.571 153.714-50.286 241.714-50.286h64c104 0 178.857 61.714 178.286 168.571v2.857c22.286 28.571 34.286 65.143 34.286 101.714 0 8-0.571 16.571-1.714 24.571 14.286 25.143 21.714 53.714 21.714 82.286 0 13.143-1.714 26.857-5.143 39.429 18.286 27.429 28 60 28 93.143z"></path>
          </svg>
          <span className="home-text19">{like?.dislikes}</span>
        </div>
      </figure>
    </div>
    <div className="home-play-list02 music-card" style={{display: 'flex'}}>
      {playlist === 1 && <FeatureCard playlist={videos} ></FeatureCard>}
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
      <FeatureCard></FeatureCard>
    </div>
    <div className="home-list1 music-list" >
    {playlist === 0 && <Music1 video={videos} idx={-1} pointerEvents='none'></Music1>}
      {playlist === 0 ? Array.isArray(related) && related.map((item, idx) => (
        <div key={idx} style={{width: '100%' }}> 
        {  <Music1 video={item} idx={idx}></Music1>}
        </div>
      )) : Array.isArray(related.videos) && related.videos.map((item, idx) => (
        <div key={idx} style={{width: '100%' }}> 
        {  <Music1 video={item} idx={idx} idSearch={idSearch}></Music1>}
        </div>
      ))}
    </div>
  </section>
  )
}
export default VideoBar