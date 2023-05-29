import React, {useState, useEffect} from "react";
import '../views/home.css'
import { ApiDataBaseGet } from "../utils/fetchAPI";
import Music from "../components/music";
import FeatureCard from "../components/feature-card";
import ChanelCard from "../components/chanel-card";

const FavoriteBar = ({mood, idSp, userDate, setButtonYoutube, setButtonSpotify, setButtonAppleMusic})=>{
  const [type, setType] = React.useState("video");
  const [arrayDB, setArrayBD] = useState([]);
  setButtonYoutube(true);
  setButtonSpotify(true);
  setButtonAppleMusic(true);
  
  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hoverType");
  });

  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hoverType");
  });

  useEffect(() =>{
    if(idSp != ''){
      ApiDataBaseGet(`favorite/all/user_id/1?user_id=${idSp}`).then((data) =>{setArrayBD(data)}).catch((err) =>{console.log(err?.message)});
    }
  }, [type, idSp, mood]);

  return(
      <section className="home-history"style={{display: 'flex', alignContent: 'baseline'}}>
      <span className="home-text29 text">My Favorite</span>
      <div className="home-card2 music-card">
      {idSp && Array.isArray(arrayDB) && arrayDB.map((item, idx) => (
        <section  key={idx} style={{width: '99%', transitionDelay: '1s' }}> 
          {Array.isArray(arrayDB) && item?.content_id.mood ==='youtube' ? <Music moood={item?.content_id?.mood} color={item?.fill}  video={item?.content_id?.description} idx={idx}></Music>: null ||
            item?.content_id.mood ==='spotify' ? <Music moood={item?.content_id?.mood} color={item?.fill}   video={item?.content_id?.description} idx={idx}></Music> : null ||
            item?.content_id.mood ==='appleMusic' ? <Music moood={item?.content_id?.mood} color={item?.fill}  video={item} idx={idx}></Music> : null}
        </section>
      ))}
      </div>
    </section>
    )
}
export default FavoriteBar
