import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div
      className={`feature-card-feature-card card-music ${props.rootClassName} `}
    >
      <button
        id="card-play"
        name="card-play"
        type="button"
        className="button card-play"
      >
        <svg viewBox="0 0 1024 1024" className="feature-card-icon">
          <path d="M342 214l468 298-468 298v-596z" className=""></path>
        </svg>
      </button>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <div className="text-card">
        <span className="feature-card-text1">{props.Text}</span>
        <span id="artist" className="feature-card-text2">
          {props.Text1}
        </span>
      </div>
      <span className="feature-card-text3">
        <span className="">26 song</span>
        <br className=""></br>
        <br className=""></br>
      </span>
    </div>
  )
}

FeatureCard.defaultProps = {
  Text1: 'asdadasdsadsa',
  rootClassName: '',
  Text: 'asdadasdsadsa',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1665912210382-47b3b8b73466?ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjY1OTg2MDEx&ixlib=rb-1.2.1&w=200',
}

FeatureCard.propTypes = {
  Text1: PropTypes.string,
  rootClassName: PropTypes.string,
  Text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard
