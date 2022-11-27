import React from 'react'

import PropTypes from 'prop-types'

import './up.css'

const Up = (props) => {
  return (
    <div className="up-up up">
      <img alt={props.image_alt} src={props.image_src} className="up-image" />
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="up-image1"
      />
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        required
        autoFocus
        placeholder={props.Search_Bar_placeholder}
        autoComplete="off"
        className="up-search-bar input search-bar"
      />
      <div className="up-posibili posibili">
        <button className="up-button button account">
          <svg viewBox="0 0 1024 1024" className="up-icon">
            <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
          </svg>
        </button>
        <button className="up-button1 button account">
          <svg viewBox="0 0 877.7142857142857 1024" className="up-icon2">
            <path d="M644 691.429c0-16-6.286-22.286-17.143-29.143-73.714-44-159.429-65.714-255.429-65.714-56 0-109.714 7.429-164 19.429-13.143 2.857-24 11.429-24 29.714 0 14.286 10.857 28 28 28 5.143 0 14.286-2.857 21.143-4.571 44.571-9.143 91.429-15.429 138.857-15.429 84 0 163.429 20.571 226.857 58.857 6.857 4 11.429 6.286 18.857 6.286 14.286 0 26.857-11.429 26.857-27.429zM698.857 568.571c0-15.429-5.714-26.286-20-34.857-87.429-52-198.286-80.571-313.143-80.571-73.714 0-124 10.286-173.143 24-18.286 5.143-27.429 17.714-27.429 36.571s15.429 34.286 34.286 34.286c8 0 12.571-2.286 21.143-4.571 40-10.857 88-18.857 143.429-18.857 108.571 0 207.429 28.571 278.857 70.857 6.286 3.429 12.571 7.429 21.714 7.429 19.429 0 34.286-15.429 34.286-34.286zM760.571 426.857c0-21.143-9.143-32-22.857-40-98.857-57.714-234.286-84.571-363.429-84.571-76 0-145.714 8.571-208 26.857-16 4.571-30.857 18.286-30.857 42.286 0 23.429 17.714 41.714 41.143 41.714 8.571 0 16.571-2.857 22.857-4.571 55.429-15.429 115.429-21.143 175.429-21.143 118.857 0 242.286 26.286 321.714 73.714 8 4.571 13.714 6.857 22.857 6.857 21.714 0 41.143-17.143 41.143-41.143zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </button>
        <button className="button account up-button2">
          <svg viewBox="0 0 877.7142857142857 1024" className="up-icon4">
            <path d="M877.714 128v640c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-306.857l-438.857 135.429v405.143c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-552.571c0-24 16-45.143 38.857-52.571l475.429-146.286c5.143-1.714 10.286-2.286 16-2.286 30.286 0 54.857 24.571 54.857 54.857z"></path>
          </svg>
        </button>
      </div>
      <div className="up-account posibili">
        <button
          id="account"
          name="account"
          type="button"
          disabled
          autoFocus
          className="up-button3 button account"
        >
          <svg viewBox="0 0 1024 1024" className="up-icon6">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="up-image2"
          />
        </button>
      </div>
    </div>
  )
}

Up.defaultProps = {
  image_alt: 'image',
  image_alt1: 'image',
  Search_Bar_placeholder: 'Search...',
  image_src1: '/playground_assets/2-removebg-preview-1500h.png',
  image_alt2: 'image',
  image_src2:
    'https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixid=Mnw5MTMyMXwxfDF8YWxsfDZ8fHx8fHwyfHwxNjY3MTQwMzQ1&ixlib=rb-4.0.3&w=200',
  image_src: '/playground_assets/1-removebg-preview-1500h.png',
}

Up.propTypes = {
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  Search_Bar_placeholder: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
}

export default Up
