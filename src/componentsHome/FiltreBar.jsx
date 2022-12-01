import React, { useEffect, useState } from 'react'
import FilreCard from "../components/filre-card";
import genres from "../utils/filtre";
import { Home } from '../views/home';
import '../views/home.css'
import '../components/filre-card.css'
import SearchBar from './SearchBar';



const FiltreBar = ({selectedFiltre, setSelectedFiltre})=>(
    <section className="home-filtre" style={{display: 'block', overflow: 'scroll'}}>
          <div className="home-card6 music-card">
            {genres.map((genrey) =>(
                <div
                className={`filre-card-filre-card filtre-card  `}>
                <button 
                className="filre-card-button button" 
                key={genrey.text}
                onClick={() => {setSelectedFiltre(genrey.text);}}
                style={{background: `${genrey.image_alt}`}}>
                 <span className="filre-card-text">{genrey.text}</span>
                  <img
                    alt=''
                    src={genrey.image_src}
                    className="filre-card-image"
                  />
                </button>
              </div>
                ))}
          </div>
    </section>
)    

export default FiltreBar
