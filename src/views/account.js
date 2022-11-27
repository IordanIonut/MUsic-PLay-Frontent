import React from 'react'

import { Helmet } from 'react-helmet'

import './account.css'

const Account = (props) => {
  return (
    <div className="account-container">
      <Helmet>
        <title>MusicPLay</title>
        <meta
          property="og:title"
          content="MusicPLay"
        />
      </Helmet>
      <div className="account-up up">
        <img
          alt="image"
          src="/playground_assets/1-removebg-preview-200h.png"
          className="account-image"
        />
        <img
          alt="image"
          src="/playground_assets/2-removebg-preview-200h.png"
          className="account-image1"
        />
        <div className="account-account posibili">
          <button
            id="account"
            name="account"
            type="button"
            disabled
            autoFocus
            className="account-button button account"
          >
            <svg viewBox="0 0 1024 1024" className="account-icon">
              <path d="M810 666l-152-154 152-154-60-60-152 154-154-154-60 60 154 154-154 154 60 60 154-154 152 154zM938 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-640q-40 0-68-38l-230-346 230-346q28-38 68-38h640z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="account-view content">
        <div className="account-left-bar">
          <button className="navbar button account">
            <svg viewBox="0 0 1024 1024" className="account-icon02">
              <path d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
          </button>
          <button className="account-button2 navbar button account">
            <svg viewBox="0 0 1024 1024" className="account-icon04">
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
          </button>
          <button className="account-button3 navbar button account">
            <svg viewBox="0 0 1024 1024" className="account-icon06">
              <path d="M704 0c-176.73 0-320 143.268-320 320 0 20.026 1.858 39.616 5.376 58.624l-389.376 389.376v192c0 35.346 28.654 64 64 64h64v-64h128v-128h128v-128h128l83.042-83.042c34.010 12.316 70.696 19.042 108.958 19.042 176.73 0 320-143.268 320-320s-143.27-320-320-320zM799.874 320.126c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
            </svg>
          </button>
        </div>
        <section className="account-cont">
          <span className="account-text text">General Information</span>
          <div className="account-account1">
            <span className="account-text01 text">
              <span>Name ...........</span>
              <br></br>
            </span>
            <div className="account-account2 posibili">
              <button
                id="account"
                name="account"
                type="button"
                disabled
                autoFocus
                className="account-button4 button account"
              >
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
            </div>
            <span className="account-text04 text">Emai.......</span>
            <div className="account-account3 posibili">
              <button
                id="account"
                name="account"
                type="button"
                disabled
                autoFocus
                className="account-button5 button account"
              >
                <svg viewBox="0 0 1024 1024" className="account-icon10">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="account-image2">
          <span className="account-text05 text">My profile</span>
          <div className="account-image3">
            <span className="account-text06 text">
              Change Your Profile Picture
            </span>
            <button type="button" className="account-button6 button">
              <span className="account-text07">
                <span>Save new Picture</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="account-password">
          <span className="account-text10 text">Password</span>
          <div className="account-password1">
            <input
              type="text"
              required
              placeholder="Old Password"
              autoComplete="on"
              className="account-textinput input"
            />
            <input
              type="text"
              required
              placeholder="New Password"
              autoComplete="on"
              className="account-textinput1 input"
            />
            <button type="button" className="account-button7 button">
              <span className="account-text11">
                <span>Save new Password</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Account
