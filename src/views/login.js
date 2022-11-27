import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>MusicPLay</title>
        <meta property="og:title" content="MusicPLay" />
      </Helmet>
      <div className="login-up up">
        <img
          alt="image"
          src="/playground_assets/1-removebg-preview-1500h.png"
          className="login-image"
        />
        <img
          alt="image"
          src="/playground_assets/2-removebg-preview-1500h.png"
          className="login-image1"
        />
      </div>
      <div className="login-view content">
        <section className="login-password">
          <div className="login-container1">
            <div className="login-message">
              <form className="login-form">
                <span className="login-text">Reset Password!</span>
                <input
                  type="text"
                  required
                  placeholder="Your Email"
                  autoComplete="on"
                  className="login-textinput input"
                />
                <button type="button" className="login-button button">
                  <span className="login-text01">Send</span>
                </button>
              </form>
            </div>
            <div className="login-contact">
              <span className="login-text02">Back!</span>
              <span className="login-text03">
                If you are not sure of the email address or if you do not
                receive the email message in 5 minutes, you can connect with
                your Google account.
              </span>
              <button type="button" className="login-button1 button">
                <span className="login-text04">
                  <span>Login</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className="login-login">
          <div className="login-container2">
            <div className="login-message1">
              <form className="login-form1">
                <span className="login-text07">Sign in to Website</span>
                <div className="login-container3">
                  <button className="login-button2 button posibili">
                    <svg viewBox="0 0 1024 1024" className="login-icon">
                      <path d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"></path>
                    </svg>
                  </button>
                  <span className="login-text08">
                    or use your email account
                  </span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  autoComplete="on"
                  className="login-textinput1 input"
                />
                <input
                  type="password"
                  required
                  placeholder="Your Password"
                  autoComplete="on"
                  className="login-textinput2 input"
                />
                <button className="login-button3 button">
                  <span className="login-text09">Forgot your password?</span>
                </button>
                <button type="button" className="login-button4 button">
                  <span className="login-text10">
                    <span>SigN in</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
            <div className="login-contact1">
              <span className="login-text13">
                <span>Hello Friend!</span>
                <br></br>
              </span>
              <span className="login-text16">
                Enter your personal data and start listening to whatever you
                want without restrictions or subscription
              </span>
              <button type="button" className="login-button5 button">
                <span className="login-text17">
                  <span>SigN  Up</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className="login-register">
          <div className="login-container4">
            <div className="login-contact2">
              <span className="login-text20">
                <span>Welcome Back!</span>
                <br></br>
              </span>
              <span className="login-text23">
                To keep connected with us please login with your personal info
              </span>
              <button type="button" className="login-button6 button">
                <span className="login-text24">SigN In</span>
              </button>
            </div>
            <div className="login-message2">
              <form className="login-form2">
                <span className="login-text25">
                  <span>Create Accont</span>
                  <br></br>
                </span>
                <div className="login-container5">
                  <button className="login-button7 button posibili">
                    <svg viewBox="0 0 1024 1024" className="login-icon2">
                      <path d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"></path>
                    </svg>
                  </button>
                  <span className="login-text28">
                    or use email for registration
                  </span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  autoComplete="on"
                  className="login-textinput3 input"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Email"
                  autoComplete="on"
                  className="login-textinput4 input"
                />
                <input
                  type="password"
                  required
                  placeholder="Your Password"
                  autoComplete="on"
                  className="login-textinput5 input"
                />
                <button type="button" className="login-button8 button">
                  <span className="login-text29">SigN Up</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
