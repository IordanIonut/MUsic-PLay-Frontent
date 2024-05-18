import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { ApiAllPlatforms } from '../utils/fetchAPI';

export const QrBar = ({setButtonYoutube, setButtonSpotify, setButtonAppleMusic, qr, name}) => {
  setButtonYoutube(false);
  setButtonSpotify(false);
  setButtonAppleMusic(false);

  const handleChange = async (mood) => {
    let color = null;
    if(mood === 'youtube')
      color = '#FF0000';
    else if(mood === 'spotify')
      color = '#18D860';
    else if(mood === 'appleMusic')
      color = '#FD4960';
    const val = { 
      track: name,
      artist: '',
      type: 'track',
      sources: [ 'spotify', 'appleMusic', 'youtube']
    };
    ApiAllPlatforms(`public/search`,val).then((data) => {
      let text = '';
      if(mood === 'youtube'){
        text = 'https://www.youtube.com/watch?v=' + data?.tracks?.[1]?.data?.externalId;
      }
      if(mood === 'spotify'){
        text = data?.tracks?.[0]?.data?.url;
      }
      if(mood === 'appleMusic'){
        text = data?.tracks?.[1]?.data?.url;
      }
      axios.get(`https://custom-qr-code1.p.rapidapi.com/custom`,{
        params: {
          data: text,
          bgColor: '#131313',
          bodyColor: color,
          eyeTopLeft: '#FF0000',
          eyeTopRight: '#18D860',
          eyeBottomLeft: 'FD4960',
          bodyStyle: 'square',
          eyeStyle: 'frame9',
          eyeballStyle: 'ball13',
          size: '2000',
          file: 'PNG'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'custom-qr-code1.p.rapidapi.com'
        },
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(imageBlob);
        Swal.fire({
          title: 'Scanner with phone',
          imageUrl: imageUrl,
          imageAlt: 'Scanner with phone',
          showConfirmButton: false,
          showCancelButton: false,
          imageWidth: 300,
          imageHeight: 300,
          showDenyButton: false,
          customClass: {
            container: 'blur-background popup ',
            validationMessage: 'blur-background-i popup'
          }
        });
      })
      .catch((err) => {
        console.log(err?.message);
      }); 
    }).catch((err) => {console.log(err);});
  };
  
  //custom logo de incercat cu post pe link : https://rapidapi.com/belchiorarkad-FqvHs2EDOtP/api/custom-qr-code-with-logo2 

  return (
    <section className="home-qr" style={{display: 'flex'}}>
      <div className="home-posibili posibili" style={{width: '60%', height: '30%', backgroundColor: 'transparent'}}>
        <button id="youtube" className="home-button button account1" onClick={() => {handleChange("youtube");
          }}>
            <svg id='youtube1' viewBox="0 0 1024 1024" className="home-icon002 accoun2">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </button>
          <button id="spotify" className="home-button button account1" onClick={() => {handleChange("spotify");
            }}>
            <svg id ='spotify1' viewBox="0 0 877.7142857142857 1024" className="home-icon002 accoun3">
              <path d="M644 691.429c0-16-6.286-22.286-17.143-29.143-73.714-44-159.429-65.714-255.429-65.714-56 0-109.714 7.429-164 19.429-13.143 2.857-24 11.429-24 29.714 0 14.286 10.857 28 28 28 5.143 0 14.286-2.857 21.143-4.571 44.571-9.143 91.429-15.429 138.857-15.429 84 0 163.429 20.571 226.857 58.857 6.857 4 11.429 6.286 18.857 6.286 14.286 0 26.857-11.429 26.857-27.429zM698.857 568.571c0-15.429-5.714-26.286-20-34.857-87.429-52-198.286-80.571-313.143-80.571-73.714 0-124 10.286-173.143 24-18.286 5.143-27.429 17.714-27.429 36.571s15.429 34.286 34.286 34.286c8 0 12.571-2.286 21.143-4.571 40-10.857 88-18.857 143.429-18.857 108.571 0 207.429 28.571 278.857 70.857 6.286 3.429 12.571 7.429 21.714 7.429 19.429 0 34.286-15.429 34.286-34.286zM760.571 426.857c0-21.143-9.143-32-22.857-40-98.857-57.714-234.286-84.571-363.429-84.571-76 0-145.714 8.571-208 26.857-16 4.571-30.857 18.286-30.857 42.286 0 23.429 17.714 41.714 41.143 41.714 8.571 0 16.571-2.857 22.857-4.571 55.429-15.429 115.429-21.143 175.429-21.143 118.857 0 242.286 26.286 321.714 73.714 8 4.571 13.714 6.857 22.857 6.857 21.714 0 41.143-17.143 41.143-41.143zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
          </button>
          <button id="appleMusic" className="home-button button account1" onClick={() => {handleChange("appleMusic");
            }}>
          <svg id='appleMusic1' className="home-icon002 accoun5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> 
            <path d="M31.995 8.167c0-0.984-0.083-1.964-0.318-2.922-0.422-1.745-1.417-3.078-2.906-4.057-0.766-0.5-1.609-0.807-2.505-0.969-0.688-0.125-1.385-0.182-2.083-0.198-0.052-0.005-0.109-0.016-0.167-0.021h-16.031c-0.203 0.016-0.406 0.026-0.609 0.036-0.995 0.057-1.984 0.161-2.922 0.536-1.781 0.703-3.068 1.932-3.818 3.703-0.26 0.599-0.391 1.234-0.484 1.88-0.078 0.521-0.12 1.047-0.135 1.573 0 0.042-0.010 0.083-0.010 0.125v16.297c0.010 0.188 0.021 0.375 0.031 0.563 0.068 1.089 0.208 2.167 0.667 3.167 0.865 1.891 2.318 3.135 4.313 3.734 0.557 0.172 1.141 0.25 1.724 0.302 0.74 0.073 1.479 0.083 2.219 0.083h14.708c0.698 0 1.396-0.047 2.094-0.135 1.099-0.141 2.13-0.464 3.063-1.078 1.12-0.74 1.964-1.719 2.505-2.943 0.25-0.563 0.391-1.161 0.495-1.766 0.151-0.901 0.182-1.813 0.182-2.724-0.005-5.063 0-10.125-0.005-15.188zM23.432 13.484v7.615c0 0.557-0.078 1.104-0.328 1.609-0.385 0.786-1.010 1.281-1.849 1.521-0.464 0.135-0.943 0.208-1.427 0.229-1.266 0.063-2.365-0.797-2.589-2.047-0.193-1.031 0.302-2.167 1.385-2.698 0.427-0.208 0.891-0.333 1.354-0.427 0.505-0.109 1.010-0.208 1.51-0.323 0.37-0.083 0.609-0.307 0.682-0.688 0.021-0.083 0.026-0.172 0.026-0.255 0-2.422 0-4.844 0-7.26 0-0.083-0.016-0.167-0.036-0.245-0.052-0.203-0.198-0.323-0.406-0.313-0.214 0.010-0.422 0.047-0.63 0.089-1.016 0.198-2.031 0.401-3.042 0.609l-4.932 0.995c-0.021 0.005-0.047 0.016-0.068 0.016-0.37 0.104-0.5 0.271-0.516 0.656-0.005 0.057 0 0.115 0 0.172-0.005 3.469 0 6.938-0.005 10.406 0 0.563-0.063 1.115-0.286 1.635-0.37 0.854-1.026 1.391-1.911 1.646-0.469 0.135-0.948 0.214-1.438 0.229-1.276 0.047-2.339-0.802-2.557-2.057-0.188-1.083 0.307-2.25 1.536-2.771 0.479-0.198 0.974-0.307 1.479-0.411 0.38-0.078 0.766-0.156 1.146-0.234 0.51-0.109 0.776-0.432 0.802-0.953v-0.198c0-3.948 0-7.896 0-11.844 0-0.167 0.021-0.333 0.057-0.495 0.094-0.38 0.365-0.599 0.729-0.688 0.339-0.089 0.688-0.151 1.031-0.224 0.979-0.198 1.953-0.396 2.932-0.589l3.026-0.615c0.896-0.177 1.786-0.359 2.682-0.536 0.292-0.057 0.589-0.12 0.885-0.141 0.411-0.036 0.698 0.224 0.74 0.641 0.010 0.099 0.016 0.198 0.016 0.297 0 2.547 0 5.094 0 7.641z">
            </path> 
          </svg>
          </button>
        </div>
  </section>
  )
}
