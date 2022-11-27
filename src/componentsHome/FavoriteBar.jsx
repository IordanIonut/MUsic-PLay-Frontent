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
        <div className="home-share4 posibili buttonChange">
          <button className="home-button27 button">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-icon080"
            >
              <path d="M877.714 128v640c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-306.857l-438.857 135.429v405.143c0 80.571-120.571 109.714-182.857 109.714s-182.857-29.143-182.857-109.714 120.571-109.714 182.857-109.714c37.714 0 75.429 6.857 109.714 22.286v-552.571c0-24 16-45.143 38.857-52.571l475.429-146.286c5.143-1.714 10.286-2.286 16-2.286 30.286 0 54.857 24.571 54.857 54.857z"></path>
            </svg>
          </button>
        </div>
        <div className="home-play-list08 posibili buttonChange">
          <button className="home-button28 button account">
            <svg viewBox="0 0 1024 1024" className="home-icon082">
              <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
            </svg>
          </button>
        </div>
        <div className="home-card5 music-card">
          <FeatureCard rootClassName="feature-card-root-class-name20"></FeatureCard>
          <FeatureCard rootClassName="feature-card-root-class-name20"></FeatureCard>
          <FeatureCard rootClassName="feature-card-root-class-name20"></FeatureCard>
          <FeatureCard rootClassName="feature-card-root-class-name20"></FeatureCard>
          <FeatureCard rootClassName="feature-card-root-class-name20"></FeatureCard>
        </div>
        <span className="home-text40 text">
          <span>Favoirt Song</span>
          <br></br>
        </span>
        <div className="home-list4 music-list">
          <Music rootClassName="music-root-class-name14"></Music>
          <Music rootClassName="music-root-class-name14"></Music>
          <Music rootClassName="music-root-class-name14"></Music>
          <Music rootClassName="music-root-class-name14"></Music>
          <Music rootClassName="music-root-class-name14"></Music>
          <Music rootClassName="music-root-class-name14"></Music>
        </div>
      </section>
    )
}
export default FavoriteBar
