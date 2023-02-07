import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './home.css'
import {useParams} from 'react-router-dom';
import '../style.css'
import HomeBar from '../componentsHome/HomeBar'
import TredingBar from '../componentsHome/TredingBar'
import FavoriteBar from '../componentsHome/FavoriteBar'
import PlayListBar from '../componentsHome/PlayListBar'
import HistoryBar from '../componentsHome/HistoryBar'
import LiveBar from '../componentsHome/LiveBar'
import {QrBar}  from '../componentsHome/QrBar'
import SendBar from '../componentsHome/SendBar'
import MusicBar from '../componentsHome/MusicBar'
import FiltreBar from '../componentsHome/FiltreBar'
import SearchBar from '../componentsHome/SearchBar'
import VideoBar from '../componentsHome/VideoBar'
import { ApiYouTube2, ApiYouTube10 } from '../utils/fetchAPI'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

const Home = () => {
  const [statusHomeButton, setStatusHomeButton] = React.useState(false);
  const [statusTredingButton, setStatusTredingButton] = React.useState(false);
  const [statusFavoriteButton, setStatusFavoriteButton] = React.useState(false);
  const [statusPlayListButton, setStatusPlayListButton] = React.useState(false);
  const [statusHistoryButton, setStatusHistoryButton] = React.useState(false);
  const [statusLiveButton, setStatusLiveButtons] = React.useState(false);
  const [statusQrButton, setStatusQrButtons] = React.useState(false);
  const [statusSendButton, setStatusSendButtons] = React.useState(false);
  const [statusChanelButton, setStatusChanelButtons] = React.useState(false);
  const [statusFiltreButton, setStatusFiltreButtons] = React.useState(false);
  const [statusSearcheButton, setStatusSearchButtons] = React.useState(false);
  const [statusVideoButton, setStatusVideoButtons] = React.useState(false);

  const [selectedFiltre, setSelectedFiltre] = React.useState(' ');
  const [trending, setTrending] = React.useState([]);
  const [home, sethome] = useState([])
  const {id} = useParams();
  const [seachText, setseachText] = useState('');
  const [auto, setAuto] = useState([]);
  const [activate, setactivate] = useState(false);
  const history = useHistory();

  
  Cookies.remove("idSongPlayList");
  Cookies.remove("playlistActivate");
  Cookies.remove("idChannel");
  localStorage.removeItem("check");

  const handleSubmit =(e) => {
    e.preventDefault();
    e.stopPropagation();
    if(seachText){
      history.push(`/search/${seachText}`);
      setseachText('');
    }
  };

  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hover");
    document.getElementById(idClass).firstElementChild.style.display='block';
    document.getElementById(idClass).lastElementChild.style.display='none';
  });

  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hover");
    document.getElementById(idClass).lastElementChild.style.display='flex';
    document.getElementById(idClass).firstElementChild.style.display='none';
  });

  useEffect(() =>{
    ApiYouTube2(`trending`).then((data2) => setTrending(data2));
    ApiYouTube10(``).then((data2) => sethome(data2));
    if(id === 'home'){
      setStatusHomeButton(true);
      styleChangeOn('home');
    }
    else if(id === 'treding'){
      setStatusTredingButton(true);
      styleChangeOn('treding');
    }
    else if(id === 'favorite'){
     setStatusFavoriteButton(true);
     styleChangeOn('favorite');
    }
    else if(id === 'palyList'){
      setStatusPlayListButton(true);
      styleChangeOn('palyList');
    }
    else if(id === 'history'){
      setStatusHistoryButton(true);
      styleChangeOn('history');
    }
    else if(id === 'live'){
      setStatusLiveButtons(true);
      styleChangeOn('live');
    }
    else if(id === 'qr'){
      setStatusQrButtons(true);
      styleChangeOn('qr');
    }
    else if(id === 'send'){
      setStatusSendButtons(true);
      styleChangeOn('send');
    }
    else if(id === 'filtre' && selectedFiltre == ' '){
        setStatusFiltreButtons(true);
    }
    else if(id === 'filtre' && selectedFiltre === ' '){
      setStatusFiltreButtons(true);
  }
  },[selectedFiltre]);

  useEffect(() =>{
   // ApiYouTube2(`sugestions?q=${seachText}`).then((data) => setAuto(data));
  },[seachText]);

  return (
    <div className="home-container">
      <Helmet>
        <title>MusicPLay</title>
        <meta property="og:title" content="MusicPLay" />
      </Helmet>
      <div className="home-up up">
        <img 
          alt="image"
          src={process.env.PUBLIC_URL+`/playground_assets/1-removebg-preview-1500h.png`}
          className="home-image"
        />
        <img
          alt="image"
          src={process.env.PUBLIC_URL+"/playground_assets/2-removebg-preview-1500h.png"}
          className="home-image1"
        />
        <form onSubmit={handleSubmit} style={{width: '90vh',margin: 'auto'}}> 
          <input
            style={{width: '90vh'}}
            type="text"
            id="search"
            value={seachText}
            onClick={() =>{
                            setStatusHomeButton(false);
                            setStatusTredingButton(false);
                            setStatusFavoriteButton(false);
                            setStatusPlayListButton(false);
                            setStatusHistoryButton(false);
                            setStatusLiveButtons(false);
                            setStatusQrButtons(false);
                            setStatusSendButtons(false);
                            setStatusChanelButtons(false);
                            setStatusSearchButtons(false);
                            setStatusVideoButtons(false);
                            setStatusFiltreButtons(true);
                            styleChangeOf('home');
                            styleChangeOf('treding');
                            styleChangeOf('favorite');
                            styleChangeOf('playList');
                            styleChangeOf('history');
                            styleChangeOf('live');
                            styleChangeOf('send');
                            styleChangeOf('qr');   
                            history.push(`/filtre`);
                    }}
            onChange={(e) =>{ setseachText(e.target.value); setAuto(e.target.value); setactivate(true); }}
            placeholder="Search..."
            autoComplete='off'
            className="home-search-bar input search-bar"   
          />
       {(Array.isArray(auto)  && activate===true )? (auto  && auto.map((item, id) => (
            <button name='suggestion' key={id} style={{width: '90vh', paddingLeft: '20px'}} className=" home-search-bar search-bar suggestion" 
              onClick={() => seachText ? setseachText(item) : null}>{item}</button>
          ))) : activate === false}
        </form>
        <div className="home-posibili posibili">
          <button className="home-button button account">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </button>
          <button className="home-button01 button account">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon002"  >
              <path d="M644 691.429c0-16-6.286-22.286-17.143-29.143-73.714-44-159.429-65.714-255.429-65.714-56 0-109.714 7.429-164 19.429-13.143 2.857-24 11.429-24 29.714 0 14.286 10.857 28 28 28 5.143 0 14.286-2.857 21.143-4.571 44.571-9.143 91.429-15.429 138.857-15.429 84 0 163.429 20.571 226.857 58.857 6.857 4 11.429 6.286 18.857 6.286 14.286 0 26.857-11.429 26.857-27.429zM698.857 568.571c0-15.429-5.714-26.286-20-34.857-87.429-52-198.286-80.571-313.143-80.571-73.714 0-124 10.286-173.143 24-18.286 5.143-27.429 17.714-27.429 36.571s15.429 34.286 34.286 34.286c8 0 12.571-2.286 21.143-4.571 40-10.857 88-18.857 143.429-18.857 108.571 0 207.429 28.571 278.857 70.857 6.286 3.429 12.571 7.429 21.714 7.429 19.429 0 34.286-15.429 34.286-34.286zM760.571 426.857c0-21.143-9.143-32-22.857-40-98.857-57.714-234.286-84.571-363.429-84.571-76 0-145.714 8.571-208 26.857-16 4.571-30.857 18.286-30.857 42.286 0 23.429 17.714 41.714 41.143 41.714 8.571 0 16.571-2.857 22.857-4.571 55.429-15.429 115.429-21.143 175.429-21.143 118.857 0 242.286 26.286 321.714 73.714 8 4.571 13.714 6.857 22.857 6.857 21.714 0 41.143-17.143 41.143-41.143zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
          </button>
          <button className="button account home-button02">
          <svg xmlns="http://www.w3.org/2000/svg" className="home-icon004" viewBox="0 0 50 50">
            <path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M14.23,30.74c-3.51-3.51-3.51-9.24,0-12.73 l7.55-7.56c0.34-0.35,0.8-0.55,1.29-0.58c0.54-0.01,1.04,0.19,1.41,0.58c0.74,0.75,0.71,1.94-0.03,2.67l-7.55,7.55 c-2.06,2.06-2.06,5.34,0,7.4c2.05,2.06,5.33,2.06,7.39,0l3.78-3.77c0.02-0.03,0.03-0.04,0.06-0.06c0.75-0.72,1.94-0.7,2.67,0.06 c0.72,0.75,0.69,1.94-0.06,2.67l-3.78,3.77C23.47,34.24,17.73,34.24,14.23,30.74z M35.77,32l-7.55,7.55 c-0.01,0.02-0.03,0.03-0.06,0.06c-0.74,0.71-1.94,0.69-2.66-0.06c-0.73-0.76-0.7-1.95,0.05-2.68l7.55-7.54 c2.06-2.06,2.06-5.35,0-7.41c-2.05-2.04-5.33-2.04-7.39,0l-3.78,3.79c-0.02,0.01-0.03,0.04-0.06,0.05 c-0.75,0.72-1.94,0.69-2.67-0.05c-0.72-0.76-0.69-1.95,0.06-2.67l3.78-3.78c1.74-1.76,4.06-2.63,6.37-2.63 c2.3,0,4.61,0.87,6.36,2.63C39.28,22.76,39.28,28.5,35.77,32z"></path>
          </svg>
          </button>
        </div>
        <div className="home-account posibili">
          <button
            id="account"
            name="account"
            type="button"
            disabled
            autoFocus
            className="home-button03 button account"
          >
            <svg viewBox="0 0 1024 1024" className="home-icon006">
              <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
            </svg>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixid=Mnw5MTMyMXwxfDF8YWxsfDZ8fHx8fHwyfHwxNjY3MTQwMzQ1&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-image2"
            />
          </button>
        </div>
      </div>
      <div className="home-view content">
        <section className="home-left-bar">
          <Link to={`/home`}>
          <button  id="home" className="home-button05 navbar button account" onClick={()=>{
                          setStatusHomeButton(true);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(false);
                          setStatusChanelButtons(false);
                          setStatusSearchButtons(false);
                          setStatusVideoButtons(false);
                          setStatusFiltreButtons(false);
                          setStatusSendButtons(false);
                          styleChangeOn('home');
                          styleChangeOf('treding');
                          styleChangeOf('favorite');
                          styleChangeOf('playList');
                          styleChangeOf('history');
                          styleChangeOf('live');
                          styleChangeOf('send');
                          styleChangeOf('qr');
                          }}>
             <svg xmlns="http://www.w3.org/2000/svg"  name='img2'  className="home-icon014" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" name='img1'  className="home-icon012" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
              </svg>
          </button>
          </Link>
          <Link to={`/treding`}>
          <button id="treding" className="home-button05 navbar button account" onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(true);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusChanelButtons(false);
                          setStatusSearchButtons(false);
                          setStatusVideoButtons(false);
                          setStatusQrButtons(false);
                          setStatusFiltreButtons(false);
                          setStatusSendButtons(false);
                          styleChangeOn('treding');
                          styleChangeOf('home');
                          styleChangeOf('favorite');
                          styleChangeOf('playList');
                          styleChangeOf('history');
                          styleChangeOf('live');
                          styleChangeOf('send');
                          styleChangeOf('qr');
                        }}>
                 <svg xmlns="http://www.w3.org/2000/svg" name='img1' className="home-icon014" viewBox="0 0 16 16">
                    <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
                  </svg>
                <svg xmlns="http://www.w3.org/2000/svg" name='img2' className="home-icon012" viewBox="0 0 16 16">
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                </svg>
          </button>
          </Link>
          <Link to={`/favorite`}>
          <button id="favorite" className="home-button06 navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(true);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusChanelButtons(false);
                          setStatusSearchButtons(false);
                          setStatusVideoButtons(false);
                          setStatusQrButtons(false);
                          setStatusSendButtons(false);
                          setStatusFiltreButtons(false);
                          styleChangeOn('favorite');
                          styleChangeOf('home');
                          styleChangeOf('treding');
                          styleChangeOf('playList');
                          styleChangeOf('history');
                          styleChangeOf('live');
                          styleChangeOf('send');
                          styleChangeOf('qr');
                        }}>
            <svg viewBox="0 0 1024 1024" name='img1' className="home-icon016">
              <path d="M512 910l-62-56q-106-96-154-142t-107-114-81-123-22-113q0-98 67-166t167-68q116 0 192 90 76-90 192-90 100 0 167 68t67 166q0 78-52 162t-113 146-199 186z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" name='img2' className="home-icon018">
              <path d="M516 792q96-86 142-130t100-104 75-106 21-90q0-64-43-106t-107-42q-50 0-93 28t-59 72h-80q-16-44-59-72t-93-28q-64 0-107 42t-43 106q0 44 21 90t75 106 100 104 142 130l4 4zM704 128q100 0 167 68t67 166q0 58-22 113t-81 123-107 114-154 142l-62 56-62-54q-138-124-199-186t-113-146-52-162q0-98 67-166t167-68q116 0 192 90 76-90 192-90z"></path>
            </svg>
          </button>
          </Link>
          <Link to={`/playList`}>
          <button id="playList" className="home-button07 navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(true);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusFiltreButtons(false);
                          setStatusChanelButtons(false);
                          setStatusSearchButtons(false);
                          setStatusVideoButtons(false);
                          setStatusQrButtons(false);
                          setStatusSendButtons(false);
                          styleChangeOn('playList');
                          styleChangeOf('home');
                          styleChangeOf('treding');
                          styleChangeOf('favorite');
                          styleChangeOf('history');
                          styleChangeOf('live');
                          styleChangeOf('send');
                          styleChangeOf('qr');
                        }}>
            <svg viewBox="0 0 1024 1024" name='img1' className="home-icon022">
              <path d="M918 490l64 64-298 300-194-192 64-64 130 128zM86 682v-84h340v84h-340zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" name='img2' className="home-icon020">
              <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
            </svg>
          </button>
          </Link>
          <Link to={`/history`}>
          <button id="history" className="navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(true);
                          setStatusLiveButtons(false);
                          setStatusChanelButtons(false);
                          setStatusSearchButtons(false);
                          setStatusVideoButtons(false);
                          setStatusQrButtons(false);
                          setStatusFiltreButtons(false);
                          setStatusSendButtons(false);
                          styleChangeOn('history');
                          styleChangeOf('home');
                          styleChangeOf('treding');
                          styleChangeOf('favorite');
                          styleChangeOf('playList');
                          styleChangeOf('live');
                          styleChangeOf('send');
                          styleChangeOf('qr');
                        }}>
            <svg xmlns="http://www.w3.org/2000/svg" name='img2' className="home-icon024" viewBox="0 0 16 16">
              <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" name='img1' className="home-icon026" viewBox="0 0 16 16">
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
            </svg>
          </button>
          </Link>
          <Link to={`/live`}>
          <button id="live" className="navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(true);
                          setStatusQrButtons(false);
                          setStatusChanelButtons(false);
                          setStatusSearchButtons(false);
                          setStatusVideoButtons(false);
                          setStatusFiltreButtons(false);
                          setStatusSendButtons(false);
                          styleChangeOn('live');
                          styleChangeOf('home');
                          styleChangeOf('treding');
                          styleChangeOf('favorite');
                          styleChangeOf('playList');
                          styleChangeOf('history');
                          styleChangeOf('send');
                          styleChangeOf('qr');
                        }}>
            <svg viewBox="0 0 1024 1024" name='img1' className="home-icon028">
              <path d="M384 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM664.348 230.526c99.852 54.158 167.652 159.898 167.652 281.474s-67.8 227.316-167.652 281.474c44.066-70.126 71.652-170.27 71.652-281.474s-27.586-211.348-71.652-281.474zM288 512c0 111.204 27.584 211.348 71.652 281.474-99.852-54.16-167.652-159.898-167.652-281.474s67.8-227.314 167.652-281.474c-44.068 70.126-71.652 170.27-71.652 281.474zM96 512c0 171.9 54.404 326.184 140.652 431.722-142.302-90.948-236.652-250.314-236.652-431.722s94.35-340.774 236.652-431.722c-86.248 105.538-140.652 259.822-140.652 431.722zM787.352 80.28c142.298 90.946 236.648 250.312 236.648 431.72s-94.35 340.774-236.648 431.72c86.244-105.536 140.648-259.82 140.648-431.72s-54.404-326.184-140.648-431.72z"></path>
            </svg>
          
            <svg xmlns="http://www.w3.org/2000/svg" name='img2' className="home-icon030" viewBox="0 0 16 16">
              <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
            </svg>
          </button>
          </Link>
          <Link to={`/qr`}>
          <button id="qr" className="home-button10 navbar button account"onClick={()=>{
                           setStatusHomeButton(false);
                           setStatusTredingButton(false);
                           setStatusFavoriteButton(false);
                           setStatusPlayListButton(false);
                           setStatusHistoryButton(false);
                           setStatusLiveButtons(false);
                           setStatusQrButtons(true);
                           setStatusSendButtons(false);
                           setStatusFiltreButtons(false);
                           setStatusChanelButtons(false);
                           setStatusSearchButtons(false);
                           setStatusVideoButtons(false);
                           styleChangeOn('qr');
                           styleChangeOf('home');
                           styleChangeOf('treding');
                           styleChangeOf('favorite');
                           styleChangeOf('playList');
                           styleChangeOf('history');
                           styleChangeOf('live');
                           styleChangeOf('send');
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" name='img2' className="home-icon034" viewBox="0 0 16 16">
                            <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                            <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                            <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                            <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                            <path d="M12 9h2V8h-2v1Z"/>
                          </svg>          
            <svg viewBox="0 0 804.5714285714286 1024" style={{display: 'flex'}} name='img2' className="home-icon034">
              <path d="M219.429 658.286v73.143h-73.143v-73.143h73.143zM219.429 219.429v73.143h-73.143v-73.143h73.143zM658.286 219.429v73.143h-73.143v-73.143h73.143zM73.143 804h219.429v-218.857h-219.429v218.857zM73.143 365.714h219.429v-219.429h-219.429v219.429zM512 365.714h219.429v-219.429h-219.429v219.429zM365.714 512v365.714h-365.714v-365.714h365.714zM658.286 804.571v73.143h-73.143v-73.143h73.143zM804.571 804.571v73.143h-73.143v-73.143h73.143zM804.571 512v219.429h-219.429v-73.143h-73.143v219.429h-73.143v-365.714h219.429v73.143h73.143v-73.143h73.143zM365.714 73.143v365.714h-365.714v-365.714h365.714zM804.571 73.143v365.714h-365.714v-365.714h365.714z"></path>
            </svg>
          </button>
          </Link>
          <Link to={`/send`}>
          <button id="send" className="home-button11 navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(false);
                          setStatusSendButtons(true);
                          setStatusFiltreButtons(false);
                          setStatusChanelButtons(false);
                          setStatusSearchButtons(false);
                          setStatusVideoButtons(false);
                          styleChangeOn('send');
                          styleChangeOf('home');
                          styleChangeOf('treding');
                          styleChangeOf('favorite');
                          styleChangeOf('playList');
                          styleChangeOf('history');
                          styleChangeOf('live');
                          styleChangeOf('qr');
                        }}>
            <svg viewBox="0 0 1025.1702857142857 1024" name='img1' className="home-icon036">
              <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
            </svg>
            <svg viewBox="0 0 1024.5851428571427 1024" name='img2' className="home-icon038">
              <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
            </svg>
          </button>
          </Link>
        </section>
            {statusHomeButton? <HomeBar></HomeBar>:null}
            {statusTredingButton? <TredingBar trending={trending}></TredingBar>  :null}
            {statusFavoriteButton? <FavoriteBar></FavoriteBar> :null}
            {statusPlayListButton? <PlayListBar></PlayListBar> :null}
            {statusHistoryButton? <HistoryBar></HistoryBar> :null}
            {statusLiveButton? <LiveBar></LiveBar> :null}
            {statusQrButton? <QrBar></QrBar> :null}
            {statusSendButton? <SendBar></SendBar> :null}
            {statusFiltreButton? <FiltreBar
                    selectedFiltre={selectedFiltre}
                    setStatusSearchButtons={setStatusSearchButtons}
                    setStatusFiltreButtons={setStatusFiltreButtons}
                    setSelectedFiltre={setSelectedFiltre}>
                    </FiltreBar> :null}
            {statusSearcheButton? <SearchBar selectedFiltre={selectedFiltre}></SearchBar> :null}
            {statusVideoButton? <VideoBar></VideoBar> :null}

      </div>
      <MusicBar></MusicBar>
    </div>
  )
}
export default Home
