import React, {useEffect, useState} from "react";
import Music from "../components/music";
import '../views/home.css'
import { ApiDataBaseGet } from "../utils/fetchAPI";

const TredingBar = ({trending, token, mood, idSp, setButtonYoutube, setButtonSpotify, setButtonAppleMusic})=>{
      const [same, setSame] = useState([]);
      setButtonYoutube(false);
      setButtonSpotify(false);
      setButtonAppleMusic(false);

   useEffect(() =>{
      if(token){
            ApiDataBaseGet(`favorite/search?userId=${idSp}&type=video&mood=${mood}`).then((data) =>{setSame(data)}).catch((err) =>{console.log(err?.message)});
      }
    }, [idSp, mood]);

    return(
      <section className="home-seach music-list" style={{display: 'flex', alignContent: 'baseline'}}>
      <span className="home-text47 text">
        <span>Trending Now</span>
        <br></br>
      </span>
      <div className="home-card2 music-card">
      {mood === 'youtube' && Array.isArray(trending?.contents)  && trending?.contents?.map((item, idx) => (
            <section key={idx} style={{width: '100%', transitionDelay: '1s' }}> 
            {<Music video={item} color={same?.find((s) => s?.content_id?.idPage === item?.videoId)}  idx={idx}></Music>}
            </section>
      ))}
      {mood === 'spotify' && Array.isArray(trending) && trending?.map((item, idx) => (
            <section key={idx} style={{width: '100%', transitionDelay: '1s' }}> 
            {<Music video={item} treding={'1'} mood={mood} idx={idx}></Music>}
            </section>
      ))}
       {mood === 'appleMusic' && Array.isArray(trending?.data) && trending?.data?.map((item, idx) => (
            <section key={idx} style={{width: '100%', transitionDelay: '1s' }}> 
            {<Music video={item} mood={mood} treding={'1'} treding1={"1"} idx={idx}></Music>}
            </section>
      ))}
      </div>
    </section>
    )
}
export default TredingBar
