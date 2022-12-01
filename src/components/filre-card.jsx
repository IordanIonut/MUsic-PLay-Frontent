import React from 'react'

import PropTypes from 'prop-types'

import './filre-card.css'

const FilreCard = (props) => {
  return (
    <div
      className={`filre-card-filre-card filtre-card ${props.rootClassName} `}
    >
      <button className="filre-card-button button">
        <span className="filre-card-text">{props.text}</span>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="filre-card-image"
        />
      </button>
    </div>
  )
}


FilreCard.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FilreCard
