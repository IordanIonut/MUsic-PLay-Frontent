import React from "react";
import FeatureCard from "../components/feature-card";
import FilreCard from "../components/filre-card";
import Music from "../components/music";
import Music1 from "../components/music1";
import Home from "../views/home";
import '../views/home.css'

const FavoriteBar = (props)=>{
    return(
        <section className="home-favorite"style={{display: 'flex'}}>
        <span className="home-text39 text">Favorite Playlist</span>
        <div className="home-share2 posibili buttonChange" name="music">
            <button className="home-button22 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon070">
                <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"></path>
              </svg>
            </button>
          </div>
          <div className="home-play-list06 posibili buttonChange"name="playlist">
            <button className="home-button23 button account">
              <svg viewBox="0 0 1024 1024" className="home-icon072">
                <path d="M86 682v-84h340v84h-340zM768 598h170v84h-170v172h-86v-172h-170v-84h170v-172h86v172zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
              </svg>
            </button>
          </div>
        <div className="home-card5 music-card">
          FeatureCard rootClassName="feature-card-root-class-name20"
        </div>
        <span className="home-text40 text">
          <span>Favoirt Song</span>
          <br></br>
        </span>
        <div className="home-list4 music-list">
          Music rootClassName="music-root-class-name14"
        </div>
      </section>
    )
}
export default FavoriteBar
