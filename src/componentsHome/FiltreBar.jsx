import React, { useEffect, useState } from 'react'
import FilreCard from "../components/filre-card";
import genres from "../utils/filtre";
import { Home } from '../views/home';
import '../views/home.css'
import '../components/filre-card.css'
import SearchBar from './SearchBar';


const FiltreBar = ({selectedFiltre, setSelectedFiltre,setStatusFiltreButtons,setStatusSearchButtons})=>{
  return(
    <section className="home-filtre" style={{display: 'block', overflowY: 'scroll'}}>
          <div className="home-card6 music-card">
            {genres.map((genrey) =>(
                  <div
                  className={`filre-card-filre-card filtre-card  `}>
                  <button 
                  className="filre-card-button button" 
                  key={genrey.text}
                  onClick={() => {
                    setSelectedFiltre(genrey.text);
                    console.log(selectedFiltre);
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
                  
                </div>
               ))};
          </div>
    </section>
    )}
  
/*
<div
                <FilreCard
               text={genrey.text}
               selectedFiltre={selectedFiltre}
               setSelectedFiltre={setSelectedFiltre}
               onChange={(value) => setSelectedFiltre(value)}
               image_src={genrey.image_src}
               image_alt={genrey.image_alt}
               ></FilreCard>




               <div
               className={`filre-card-filre-card filtre-card  `}>
               <button 
               className="filre-card-button button" 
               key={genrey.text}
               onClick={() => {setSelectedFiltre(genrey.text);
                 console.log(selectedFiltre);}}
               style={{background: `${genrey.image_alt}`}}>
                <span className="filre-card-text">{genrey.text}</span>
                 <img
                   alt=''
                   src={genrey.image_src}
                   className="filre-card-image"
                 />
               </button>
             </div>
*/
export default FiltreBar
