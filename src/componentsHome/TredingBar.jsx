import React, {useEffect, useState} from "react";
import FeatureCard from "../components/feature-card";
import FilreCard from "../components/filre-card";
import Music from "../components/music";
import Music1 from "../components/music1";
import Home from "../views/home";
import '../views/home.css'

const TredingBar = ({trending})=>{
    return(
      <section className="home-treding"style={{display: 'flex'}}>
      <span className="home-text47 text">
        <span>Trending Now</span>
        <br></br>
      </span>
      <div className="home-list5 music-list" style={{width: '100%' }}>
      {trending.map((item, idx) => (
            <section key={idx} style={{width: '100%' }}> 
            {<Music video={item} idx={idx}></Music>}
            </section>
      ))};
      </div>
    </section>
    )
}
export default TredingBar


/*
{trending.map((item, idx) => (
            <section key={idx} style={{width: '100%' }}> 
            {  <Music video={item} idx={idx}></Music>}
            </section>
          ))}
*/