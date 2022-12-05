import React, { useEffect, useState } from 'react'
import './filre-card.css'
import Home from '../views/home'
import {FiltreBar} from '../componentsHome/FiltreBar'

function FilreCard  (genre,selectedFiltre1,setSelectedFiltre1) {
  return (
    <div
      className={`filre-card-filre-card filtre-card  `}>
      <button 
      className="filre-card-button button" 
      key={genre.text}
      onClick={() => {setSelectedFiltre1(genre.text);
        console.log(selectedFiltre1);}}
      style={{background: `${genre.image_alt}`}}>
       <span className="filre-card-text">{genre.text}</span>
        <img
          alt=''
          src={genre.image_src}
          className="filre-card-image"
        />
      </button>
    </div>
  )
}

/*FilreCard.defaultProps = {
  text: 'Rock',
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1665912210382-47b3b8b73466?ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjY1OTg2MDEx&ixlib=rb-1.2.1&w=200',
}

FilreCard.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}*/

export default FilreCard
