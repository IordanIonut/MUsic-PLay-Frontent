import React from 'react'
import { Helmet } from 'react-helmet'
import FeatureCard from '../components/feature-card'
import Music from '../components/music'
import FilreCard from '../components/filre-card'
import Music1 from '../components/music1'
import './home.css'
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

const Home = (props) => {
  const [statusHomeButton, setStatusHomeButton] = React.useState(true)
  const [statusTredingButton, setStatusTredingButton] = React.useState(false)
  const [statusFavoriteButton, setStatusFavoriteButton] = React.useState(false)
  const [statusPlayListButton, setStatusPlayListButton] = React.useState(false)
  const [statusHistoryButton, setStatusHistoryButton] = React.useState(false)
  const [statusLiveButton, setStatusLiveButtons] = React.useState(false)
  const [statusQrButton, setStatusQrButtons] = React.useState(false)
  const [statusSendButton, setStatusSendButtons] = React.useState(false)
  
  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hover");
    document.getElementById(idClass).firstElementChild.style.display='block';
    document.getElementById(idClass).lastElementChild.style.display='none';
  })
  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hover");
    document.getElementById(idClass).lastElementChild.style.display='flex';
    document.getElementById(idClass).firstElementChild.style.display='none';
  })

  return (
    <div className="home-container">
      <Helmet>
        <title>MusicPLay</title>
        <meta property="og:title" content="MusicPLay" />
      </Helmet>
      <div className="home-up up">
        <img 
          alt="image"
          src="/playground_assets/1-removebg-preview-1500h.png"
          className="home-image"
        />
        <img
          alt="image"
          src="/playground_assets/2-removebg-preview-1500h.png"
          className="home-image1"
        />
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          required
          autoFocus
          placeholder="Search..."
          autoComplete="on"
          className="home-search-bar input search-bar"
        />
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
          <button id="home" className="home-button05 navbar button account" onClick={()=>{
                          setStatusHomeButton(true);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(false);
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
            <svg viewBox="0 0 1024 1024" name='img1' className="home-icon010">
              <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
            </svg>
           <svg viewBox="0 0 1024 1024" name='img2'   className="home-icon008">
              <path d="M101.803 350.336c-10.069 7.851-16.469 20.011-16.469 33.664v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-469.333c-0.043-12.8-5.717-25.301-16.469-33.664l-384-298.667c-15.275-11.733-36.736-12.16-52.395 0zM682.667 896v-384c0-23.552-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667v384h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-448.469l341.333-265.472 341.333 265.472v448.469c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM426.667 896v-341.333h170.667v341.333z"></path>
            </svg>
          </button>
          <button id="treding" className="home-button05 navbar button account" onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(true);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(false);
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
                 <svg xmlns="http://www.w3.org/2000/svg" name='img2' className="home-icon014" viewBox="0 0 16 16">
                    <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
                  </svg>
                <svg xmlns="http://www.w3.org/2000/svg" name='img1' className="home-icon012" viewBox="0 0 16 16">
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                </svg>
          </button>
          <button id="favorite" className="home-button06 navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(true);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(false);
                          setStatusSendButtons(false);
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
          <button id="playList" className="home-button07 navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(true);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
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
            <svg viewBox="0 0 1024 1024" name='img2'className="home-icon020">
              <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
            </svg>
          </button>
          <button id="history" className="navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(true);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(false);
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
          <button id="live" className="navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(true);
                          setStatusQrButtons(false);
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
            <svg viewBox="0 0 1024 1024" name='img2' className="home-icon030">
              <path d="M1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512c0 220.054 138.836 407.664 333.686 480.068l-13.686 31.932h384l-13.686-31.932c194.85-72.404 333.686-260.014 333.686-480.068zM486.79 634.826c-22.808-9.788-38.79-32.436-38.79-58.826 0-35.346 28.654-64 64-64s64 28.654 64 64c0 26.39-15.978 49.044-38.786 58.834l-25.214-58.834-25.21 58.826zM538.268 637.292c58.092-12.118 101.732-63.602 101.732-125.292 0-70.694-57.306-128-128-128-70.692 0-128 57.306-128 128 0 61.692 43.662 113.122 101.76 125.228l-74.624 174.122c-91.23-39.15-155.136-129.784-155.136-235.35 0-141.384 114.616-268 256-268s256 126.616 256 268c0 105.566-63.906 196.2-155.136 235.35l-74.596-174.058zM688.448 987.708l-73.924-172.486c126.446-42.738 217.476-162.346 217.476-303.222 0-176.73-143.268-320-320-320-176.73 0-320 143.27-320 320 0 140.876 91.030 260.484 217.476 303.222l-73.924 172.486c-159.594-68.488-271.386-227.034-271.386-411.708 0-247.332 200.502-459.834 447.834-459.834s447.834 212.502 447.834 459.834c0 184.674-111.792 343.22-271.386 411.708z"></path>
            </svg>
          </button>
          <button id="qr" className="home-button10 navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(true);
                          setStatusSendButtons(false);
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
            <svg viewBox="0 0 804.5714285714286 1024" name='img2' className="home-icon034">
              <path d="M219.429 658.286v73.143h-73.143v-73.143h73.143zM219.429 219.429v73.143h-73.143v-73.143h73.143zM658.286 219.429v73.143h-73.143v-73.143h73.143zM73.143 804h219.429v-218.857h-219.429v218.857zM73.143 365.714h219.429v-219.429h-219.429v219.429zM512 365.714h219.429v-219.429h-219.429v219.429zM365.714 512v365.714h-365.714v-365.714h365.714zM658.286 804.571v73.143h-73.143v-73.143h73.143zM804.571 804.571v73.143h-73.143v-73.143h73.143zM804.571 512v219.429h-219.429v-73.143h-73.143v219.429h-73.143v-365.714h219.429v73.143h73.143v-73.143h73.143zM365.714 73.143v365.714h-365.714v-365.714h365.714zM804.571 73.143v365.714h-365.714v-365.714h365.714z"></path>
            </svg>

          </button>
          <button id="send" className="home-button11 navbar button account"onClick={()=>{
                          setStatusHomeButton(false);
                          setStatusTredingButton(false);
                          setStatusFavoriteButton(false);
                          setStatusPlayListButton(false);
                          setStatusHistoryButton(false);
                          setStatusLiveButtons(false);
                          setStatusQrButtons(false);
                          setStatusSendButtons(true);
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
        </section>
            {statusHomeButton? <HomeBar></HomeBar> :null}
            {statusTredingButton? <TredingBar></TredingBar>  :null}
            {statusFavoriteButton? <FavoriteBar></FavoriteBar> :null}
            {statusPlayListButton? <PlayListBar></PlayListBar> :null}
            {statusHistoryButton? <HistoryBar></HistoryBar> :null}
            {statusLiveButton? <LiveBar></LiveBar> :null}
            {statusQrButton? <QrBar></QrBar> :null}
            {statusSendButton? <SendBar></SendBar> :null}
        <section className="home-video" style={{display: 'none'}}>
          <div className="home-video1 video">
            <div className="home-container1">
              <iframe
                src="https://www.youtube.com/embed/DeQkMK5LME4"
                className="home-iframe"
              ></iframe>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1669158424143-3be4e002b36d?ixid=Mnw5MTMyMXwwfDF8YWxsfDR8fHx8fHwyfHwxNjY5MjI0Nzc0&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-image3"
              />
            </div>
            <div className="home-test">
              <span className="home-text08">
                <span>
                  asdsadssadsadasdaddddssd
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
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
                  <svg viewBox="0 0 1024 1024" className="home-icon050">
                    <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
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
              <div className="home-container2">
                <button className="home-button19 button">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1667802869841-d53a38d2ba53?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY2Nzg0MTAyNQ&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image4"
                  />
                </button>
                <div className="home-text11">
                  <span className="home-text12">asdasdsaasdasasd</span>
                  <span className="home-text13">123123123123</span>
                </div>
              </div>
              <div className="home-view1 posibili">
                <svg viewBox="0 0 1024 1024" className="home-icon054">
                  <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                </svg>
                <span className="home-text14">
                  <span>123123123213123</span>
                  <br></br>
                </span>
              </div>
              <div className="home-time posibili">
                <svg viewBox="0 0 1024 1024" className="home-icon056">
                  <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                </svg>
                <span className="home-text17">16.04.2001</span>
              </div>
              <div className="home-rating posibili">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon058"
                >
                  <path d="M146.286 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM804.571 438.857c0-38.857-34.857-73.143-73.143-73.143h-201.143c0-66.857 54.857-115.429 54.857-182.857 0-66.857-13.143-109.714-91.429-109.714-36.571 37.143-17.714 124.571-73.143 182.857-16 16.571-29.714 34.286-44 52-25.714 33.143-93.714 130.857-138.857 130.857h-18.286v365.714h18.286c32 0 84.571 20.571 115.429 31.429 62.857 21.714 128 41.714 195.429 41.714h69.143c64.571 0 109.714-25.714 109.714-95.429 0-10.857-1.143-21.714-2.857-32 24-13.143 37.143-45.714 37.143-72 0-13.714-3.429-27.429-10.286-39.429 19.429-18.286 30.286-41.143 30.286-68 0-18.286-8-45.143-20-58.857 26.857-0.571 42.857-52 42.857-73.143zM877.714 438.286c0 33.143-9.714 65.714-28 93.143 3.429 12.571 5.143 26.286 5.143 39.429 0 28.571-7.429 57.143-21.714 82.286 1.143 8 1.714 16.571 1.714 24.571 0 36.571-12 73.143-34.286 101.714 1.143 108-72.571 171.429-178.286 171.429h-73.714c-81.143 0-156.571-24-232-50.286-16.571-5.714-62.857-22.857-78.857-22.857h-164.571c-40.571 0-73.143-32.571-73.143-73.143v-365.714c0-40.571 32.571-73.143 73.143-73.143h156.571c22.286-14.857 61.143-66.286 78.286-88.571 19.429-25.143 39.429-49.714 61.143-73.143 34.286-36.571 16-126.857 73.143-182.857 13.714-13.143 32-21.143 51.429-21.143 59.429 0 116.571 21.143 144.571 76.571 17.714 34.857 20 68 20 106.286 0 40-10.286 74.286-27.429 109.714h100.571c78.857 0 146.286 66.857 146.286 145.714z"></path>
                </svg>
                <span className="home-text18">32131231</span>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon060"
                >
                  <path d="M146.286 256c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM804.571 585.143c0-21.143-16-72.571-42.857-73.143 12-13.714 20-40.571 20-58.857 0-26.857-10.857-49.714-30.286-68 6.857-12 10.286-25.714 10.286-39.429 0-26.286-13.143-58.857-37.143-72 1.714-10.286 2.857-21.143 2.857-32 0-66.857-42.286-95.429-105.714-95.429h-73.143c-67.429 0-132.571 20-195.429 41.714-30.857 10.857-83.429 31.429-115.429 31.429h-18.286v365.714h18.286c45.143 0 113.143 97.714 138.857 130.857 14.286 17.714 28 35.429 44 52 55.429 58.286 36.571 145.714 73.143 182.857 78.286 0 91.429-42.857 91.429-109.714 0-67.429-54.857-116-54.857-182.857h201.143c38.286 0 73.143-34.286 73.143-73.143zM877.714 585.714c0 78.857-67.429 145.714-146.286 145.714h-100.571c17.143 35.429 27.429 69.714 27.429 109.714 0 37.714-2.286 72-20 106.286-28 55.429-85.143 76.571-144.571 76.571-19.429 0-37.714-8-51.429-21.143-57.143-56-39.429-146.286-73.143-183.429-21.714-22.857-41.714-47.429-61.143-72.571-17.143-22.286-56-73.714-78.286-88.571h-156.571c-40.571 0-73.143-32.571-73.143-73.143v-365.714c0-40.571 32.571-73.143 73.143-73.143h164.571c16 0 62.286-17.143 78.857-22.857 82.286-28.571 153.714-50.286 241.714-50.286h64c104 0 178.857 61.714 178.286 168.571v2.857c22.286 28.571 34.286 65.143 34.286 101.714 0 8-0.571 16.571-1.714 24.571 14.286 25.143 21.714 53.714 21.714 82.286 0 13.143-1.714 26.857-5.143 39.429 18.286 27.429 28 60 28 93.143z"></path>
                </svg>
                <span className="home-text19">123123123</span>
              </div>
            </figure>
          </div>
          <div className="home-play-list02 music-card">
            <FeatureCard rootClassName="feature-card-root-class-name"></FeatureCard>
            <FeatureCard rootClassName="feature-card-root-class-name"></FeatureCard>
            <FeatureCard rootClassName="feature-card-root-class-name"></FeatureCard>
            <FeatureCard rootClassName="feature-card-root-class-name"></FeatureCard>
          </div>
          <div className="home-list1 music-list">
            <Music1></Music1>
            <Music1></Music1>
            <Music1></Music1>
            <Music1></Music1>
          </div>
        </section>
        <section className="home-chanel"style={{display: 'none'}}>
          <div className="home-artist1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1667935764607-73fca1a86555?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY2ODAxNzYwNQ&amp;ixlib=rb-4.0.3&amp;w=1500"
              loading="lazy"
              className="home-image5"
            />
            <div className="home-container3">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1667976368812-31e7a836158b?ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjY4MDE3NjA1&amp;ixlib=rb-4.0.3&amp;w=200"
                loading="eager"
                className="home-image6"
              />
              <span className="home-text20 text">Smyle</span>
              <div className="home-view2 posibili">
                <svg viewBox="0 0 1024 1024" className="home-icon062">
                  <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                </svg>
                <span className="home-text21">
                  <span>123123123213123</span>
                  <br></br>
                </span>
              </div>
              <div className="home-video2 posibili buttonChange">
                <svg viewBox="0 0 1024 1024" className="home-icon064">
                  <path d="M384 426l298 172-298 170v-342zM896 854v-512h-768v512h768zM896 256q36 0 61 25t25 61v512q0 34-26 59t-60 25h-768q-34 0-60-25t-26-59v-512q0-36 25-61t61-25h324l-140-140 30-30 170 170 170-170 30 30-140 140h324z"></path>
                </svg>
              </div>
              <div className="home-play-list03 posibili buttonChange">
                <button className="home-button20 button account">
                  <svg viewBox="0 0 1024 1024" className="home-icon066">
                    <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
                  </svg>
                </button>
              </div>
              <div className="home-play-list04 posibili buttonChange">
                <button className="home-button21 button account">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon068"
                  >
                    <path d="M877.714 128v640c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-306.857l-438.857 135.429v405.143c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-552.571c0-24 16-45.143 38.857-52.571l475.429-146.286c5.143-1.714 10.286-2.286 16-2.286 30.286 0 54.857 24.571 54.857 54.857z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="home-play-list05 music-card">
            <span className="home-text24 text">Playlist</span>
            <FeatureCard rootClassName="feature-card-root-class-name4"></FeatureCard>
            <FeatureCard rootClassName="feature-card-root-class-name4"></FeatureCard>
            <FeatureCard rootClassName="feature-card-root-class-name4"></FeatureCard>
            <FeatureCard rootClassName="feature-card-root-class-name4"></FeatureCard>
            <FeatureCard rootClassName="feature-card-root-class-name4"></FeatureCard>
          </div>
          <div className="home-list2 music-list">
            <span className="home-text25 text">
              <span className="home-text26">Music</span>
              <br></br>
              <br></br>
            </span>
            <Music rootClassName="music-root-class-name"></Music>
            <Music rootClassName="music-root-class-name"></Music>
            <Music rootClassName="music-root-class-name"></Music>
            <Music rootClassName="music-root-class-name"></Music>
            <Music rootClassName="music-root-class-name"></Music>
            <Music rootClassName="music-root-class-name"></Music>
          </div>
        </section>
        <section className="home-seach music-list"style={{display: 'none'}}>
          <span className="home-text62 text">
            <span>aAS</span>
            <br></br>
            <br></br>
          </span>
          <div className="home-share6 posibili buttonChange">
            <button className="home-button32 button">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon102"
              >
                <path d="M877.714 128v640c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-306.857l-438.857 135.429v405.143c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-552.571c0-24 16-45.143 38.857-52.571l475.429-146.286c5.143-1.714 10.286-2.286 16-2.286 30.286 0 54.857 24.571 54.857 54.857z"></path>
              </svg>
            </button>
          </div>
          <div className="home-play-list10 posibili buttonChange">
            <button className="home-button33 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon104">
                <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
              </svg>
            </button>
          </div>
          <div className="home-like5 posibili buttonChange">
            <button className="home-button34 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon106">
                <path d="M384 426l298 172-298 170v-342zM896 854v-512h-768v512h768zM896 256q36 0 61 25t25 61v512q0 34-26 59t-60 25h-768q-34 0-60-25t-26-59v-512q0-36 25-61t61-25h324l-140-140 30-30 170 170 170-170 30 30-140 140h324z"></path>
              </svg>
            </button>
          </div>
          <Music rootClassName="music-root-class-name26"></Music>
          <Music rootClassName="music-root-class-name26"></Music>
          <Music rootClassName="music-root-class-name26"></Music>
        </section>
      </div>
      <MusicBar></MusicBar>
    </div>
  )
}

export default Home
