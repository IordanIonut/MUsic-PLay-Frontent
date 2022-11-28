import React from 'react'

export const MusicBar = () => {
  return (
    <section className="home-bar bar">
        <div className="home-music-play">
          <div className="home-music music-bar">
            <button className="home-button35 button">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1665683614121-eece744668ee?ixid=Mnw5MTMyMXwwfDF8YWxsfDR8fHx8fHwyfHwxNjY1ODUwMDQ0&amp;ixlib=rb-1.2.1&amp;w=200"
                className="home-image7"
              />
            </button>
            <span className="home-text66">
              <span>Smyle - Asta e viata</span>
              <br></br>
            </span>
            <button id="random" className="navbar button music account">
              <svg viewBox="0 0 1024 1024" className="home-icon108">
                <path d="M632 572l134 134 88-88v236h-236l88-88-134-134zM618 170h236v236l-88-88-536 536-60-60 536-536zM452 392l-60 60-222-222 60-60z"></path>
              </svg>
            </button>
            <button
              id="last"
              className="navbar button music account home-button37"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon110">
                <path d="M490 512l364-256v512zM470 768l-364-256 364-256v512z"></path>
              </svg>
            </button>
            <span className="home-text69 minutes">02:30</span>
            <button
              id="play"
              className="home-button38 navbar button music account"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon112"
              >
                <path d="M877.714 109.714v804.571c0 20-16.571 36.571-36.571 36.571h-804.571c-20 0-36.571-16.571-36.571-36.571v-804.571c0-20 16.571-36.571 36.571-36.571h804.571c20 0 36.571 16.571 36.571 36.571z"></path>
              </svg>
              <svg
                viewBox="0 0 808.5942857142857 1024"
                className="home-icon114"
              >
                <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
              </svg>
            </button>
            <span className="home-text70 minutes">
              <span>05:30</span>
              <br></br>
              <br></br>
            </span>
            <button
              id="next"
              className="navbar button music account home-button39"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon116">
                <path d="M554 256l364 256-364 256v-512zM170 768v-512l364 256z"></path>
              </svg>
            </button>
            <button
              id="repeat"
              className="navbar button music account home-button40"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon118">
                <path d="M726 726v-172h84v256h-512v128l-170-170 170-170v128h428zM298 298v172h-84v-256h512v-128l170 170-170 170v-128h-428z"></path>
              </svg>
            </button>
            <button className="home-button41 navbar button music account">
              <svg viewBox="0 0 1024 1024" className="home-icon120">
                <path d="M512 910l-62-56q-106-96-154-142t-107-114-81-123-22-113q0-98 67-166t167-68q116 0 192 90 76-90 192-90 100 0 167 68t67 166q0 78-52 162t-113 146-199 186z"></path>
              </svg>
            </button>
            <button
              id="volume"
              className="home-button42 navbar button music account"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon122">
                <path d="M598 138q130 28 214 133t84 241-84 241-214 133v-88q94-28 153-106t59-180-59-180-153-106v-88zM704 512q0 120-106 172v-344q44 22 75 72t31 100zM128 384h170l214-214v684l-214-214h-170v-256z"></path>
              </svg>
            </button>
          </div>
          <div className="home-container7"></div>
        </div>
      </section>
  )
}
export default MusicBar
