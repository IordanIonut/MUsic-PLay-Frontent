import React from "react";
import FeatureCard from "../components/feature-card";
import FilreCard from "../components/filre-card";
import Music from "../components/music";
import Music1 from "../components/music1";
import Home from "../views/home";
import '../views/home.css'

const FiltreBar = (props)=>{
    return(
    <section className="home-filtre"style={{display: 'flex'}}>
          <div className="home-card6 music-card">
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
            <FilreCard rootClassName="filre-card-root-class-name6"></FilreCard>
          </div>
        </section>    
    )
}
export default FiltreBar
