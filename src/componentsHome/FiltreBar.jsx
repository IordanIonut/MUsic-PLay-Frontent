import React, { useEffect, useState } from 'react'
import genres from "../utils/filtre";
import '../views/home.css'
import '../components/filre-card.css'
import { Link } from 'react-router-dom';

const FiltreBar = ({selectedFiltre, setSelectedFiltre,setStatusFiltreButtons,setStatusSearchButtons, setButtonYoutube, setButtonSpotify, setButtonAppleMusic})=>{
  setButtonYoutube(false);
  setButtonSpotify(false);
  setButtonAppleMusic(false);
  
  return(
    <section className="home-filtre" style={{display: 'block', overflowY: 'scroll'}}>
        <div className="home-card2 music-card" style={{width: '99%',display: 'flex'}}>
            {genres.map((genrey) =>(
                  <Link to={`/filtre`}
                  className={`filre-card-filre-card filtre-card  `}>
                  <button 
                  className="filre-card-button button" 
                  key={genrey.text}
                  onClick={() => {
                    setSelectedFiltre(genrey.text);
                    setStatusSearchButtons(true);
                    setStatusFiltreButtons(false);
                  }}
                  style={{background: `${genrey.image_alt}`}}>
                   <span className="filre-card-text">{genrey.text}</span>
                    <img
                      alt=''
                      src={genrey.image_src}
                      className="filre-card-image"
                    />
                  </button>
                </Link>
               ))};
          </div>
    </section>
    )}
export default FiltreBar
