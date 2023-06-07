import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import '../views/home.css'
import { ApiDataBaseGet } from "../utils/fetchAPI";
import FeatureCard from "../components/feature-card";

const PlaylistBar = ({mood, idSp, userDate, setButtonYoutube, setButtonSpotify, setButtonAppleMusic})=>{
    const [playlist, setPlaylist] = useState();
    setButtonYoutube(true);
    setButtonSpotify(true);
    setButtonAppleMusic(true);

    useEffect(() =>{
      ApiDataBaseGet(`playlistContent/mood/user_id?user_id=${idSp}`).then((data) =>{setPlaylist(data)});
    },[mood, idSp]);

    return(
        <section className="home-seach music-list" style={{display: 'flex', alignContent: 'baseline'}}>
            <span className="home-text47 text">My Playlist</span>
            <div className="home-card2 music-card">
            {Array.isArray(playlist)  && playlist.map((item, id) => (
              <section key={id} style={{transitionDelay: '1s',marginLeft: ''}}> 
                {<FeatureCard playlist={item} idx={id} userDate={userDate}></FeatureCard>}
              </section>
            ))}
            </div>
        </section>
    )
}
export default PlaylistBar
