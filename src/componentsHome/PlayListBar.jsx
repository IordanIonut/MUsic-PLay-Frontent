import React from "react";
import FeatureCard from "../components/feature-card";
import FilreCard from "../components/filre-card";
import Music from "../components/music";
import Music1 from "../components/music1";
import Home from "../views/home";
import '../views/home.css'

const PlaylistBar = (props)=>{
    return(
<section className="home-play-list07"style={{display: 'flex'}}>
          <div className="home-container4">
            <span className="home-text38 text">Playlist</span>
            <div className="home-share2 posibili buttonChange" name="music">
            <button className="home-button22 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"></path>
              </svg>
            </button>
          </div>
          <div className="home-like2 posibili buttonChange"name="live">
            <button className="home-button24 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon074">
                <path d="M384 426l298 172-298 170v-342zM896 854v-512h-768v512h768zM896 256q36 0 61 25t25 61v512q0 34-26 59t-60 25h-768q-34 0-60-25t-26-59v-512q0-36 25-61t61-25h324l-140-140 30-30 170 170 170-170 30 30-140 140h324z"></path>
              </svg>
            </button>
          </div>
            <div className="home-card4 music-card">
              <FeatureCard rootClassName="feature-card-root-class-name14"></FeatureCard>
              <FeatureCard rootClassName="feature-card-root-class-name14"></FeatureCard>
              <FeatureCard rootClassName="feature-card-root-class-name14"></FeatureCard>
              <FeatureCard rootClassName="feature-card-root-class-name14"></FeatureCard>
              <FeatureCard rootClassName="feature-card-root-class-name14"></FeatureCard>
              <FeatureCard rootClassName="feature-card-root-class-name14"></FeatureCard>
            </div>
          </div>
        </section>
    )
}
export default PlaylistBar
