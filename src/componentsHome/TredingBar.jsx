import React, {useEffect, useState} from "react";
import FeatureCard from "../components/feature-card";
import FilreCard from "../components/filre-card";
import Music from "../components/music";
import Music1 from "../components/music1";
import Home from "../views/home";
import '../views/home.css'

const TredingBar = ({trending, mood})=>{
   
    return(
      <section className="home-seach music-list" style={{display: 'flex', alignContent: 'baseline'}}>
      <span className="home-text47 text">
        <span>Trending Now</span>
        <br></br>
      </span>
      <div className="home-card2 music-card">
      {mood === 'youtube' && trending.map((item, idx) => (
            <section key={idx} style={{width: '100%', transitionDelay: '1s' }}> 
            {<Music video={item} idx={idx}></Music>}
            </section>
      ))}
      {mood === 'spotify' && trending.map((item, idx) => (
            <section key={idx} style={{width: '100%', transitionDelay: '1s' }}> 
            {<Music video={item} treding={'1'} mood={mood} idx={idx}></Music>}
            </section>
      ))}
       {mood === 'appleMusic' && trending.map((item, idx) => (
            <section key={idx} style={{width: '100%', transitionDelay: '1s' }}> 
            {<Music video={item} mood={mood} treding={'1'} treding1={"1"} idx={idx}></Music>}
            </section>
      ))}
      </div>
    </section>
    )
}
export default TredingBar
