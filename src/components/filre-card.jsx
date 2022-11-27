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

FilreCard.defaultProps = {
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
}

export default FilreCard
