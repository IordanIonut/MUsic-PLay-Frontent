import React from 'react'

import { Helmet } from 'react-helmet'

import './pop-up.css'

const PopUp = (props) => {
  return (
    <div className="pop-up-container">
        <Helmet>
        <title>MUsicPLay</title>
        <meta property="og:title" content="MusicPLay" />
      </Helmet>
      <section className="pop-up-error-corect">
        <div className="pop-up-message">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1594566853037-3df4e2eea03a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGNvcnJlY3R8ZW58MHx8fHwxNjY4MzUwMDIz&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300"
            className="pop-up-image"
          />
          <span className="pop-up-text">
            <span>The name is wrong!</span>
            <br></br>
          </span>
        </div>
      </section>
      <section className="pop-up-change">
        <div className="pop-up-message1">
          <span className="pop-up-text3">
            <span>Change your name</span>
            <br></br>
          </span>
          <input
            type="text"
            required
            placeholder="Your New Name"
            autoComplete="on"
            className="pop-up-textinput input"
          />
          <button type="button" className="pop-up-button button">
            <span className="pop-up-text6">Change</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default PopUp
