import React, { useEffect, useState, useRef, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import "../style.css";
import { useParams } from "react-router-dom";
import MusicBar from "../componentsHome/MusicBar";
import VideoBar from "../componentsHome/VideoBar";
import { useHistory } from "react-router-dom";
import {
  ApiYouTube2,
  ApiYouTube3,
  ApiYouTube1,
  ApiSpotify3,
  ApiYouTube10,
  ApiShazam4,
  ApiSpotify6,
  ApiShazam2,
  ApiDataBaseGet,
  ApiDataBasePost,
} from "../utils/fetchAPI";
import {
  setCurrentTime,
  setDuration,
  toggleLoop,
  toggleMute,
  playVideo,
  pauseVideo,
  setPreview,
  setNext,
  toggleRandome,
  setRad,
  setAllVideo,
} from "../utils/actions";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import colors from "../utils/colors";
import Swal from "sweetalert2";
import axios from "axios";
import { debounce, findIndex } from "lodash";

const Video = () => {
  const [videos, setVideo] = React.useState([]);
  const [related, setRelated] = useState([]);
  const [relatedPlayList, setRelatedPlayList] = useState([]);
  const [a, setA] = useState([]);
  const [views, setviews] = useState([]);
  const [playlist, setPlaylist] = useState(0);
  const [ok, setOk] = useState(false);
  const { id } = useParams();
  const [type, setType] = React.useState("youtube");
  const mood = Cookies.get("mood") || "youtube";
  const spotifyType = Cookies.get("spotifyType") || null;
  const playlistActivate = Cookies.get("playlistActivate") || null;
  const idChannel = Cookies.get("idChannel");
  const idx = a?.mediaItems?.[0]?.uri;
  const idxx = idx?.split(":");
  const typex = spotifyType;
  const typexx = typex?.split(":");
  const history = useHistory();
  const token = localStorage.getItem("token") || undefined;
  const [idSp, setIdSp] = useState("");
  const [userDate, setUserDate] = useState([]);
  const idSongPlayList = Cookies.get("idSongPlayList") || "";
  const idSong = idSongPlayList.split(",0,");
  const [same12, setSame12] = useState([]);
  const [count, setCount] = useState([]);
  const [click, setClick] = useState(false);
  const [delete1, setDelete1] = useState([]);
  const [ok1, setOk1] = useState(false);

  useEffect(() => {
    if (token) {
      ApiDataBaseGet(`users/token?token=${token}`)
        .then((response) => {
          setIdSp(response);
        })
        .catch((error) => {
          console.log(error?.message);
          localStorage.removeItem("token");
          Swal.fire({
            icon: "error",
            text: "There is a problem with the internet connection. As a security measure, we have logged you out of your account.",
            showConfirmButton: false,
            customClass: {
              container: "blur-background popup",
            },
            timer: 2000,
            buttons: false,
          }).then(() => {
            window.location.href = "/home";
          });
        });
      ApiDataBaseGet(`users/get/${idSp}`)
        .then((response) => {
          setUserDate(response);
        })
        .catch((error) => {
          //console.log(error);
        });
    }
  }, [token, idSp]);

  useEffect(() => {
    if (id?.includes("|")) {
      styleChangeOnBar("youtube");
      styleChangeOnBar("spotify");
      styleChangeOnBar("appleMusic");
    }
    styleChangeOnBar(mood);
  }, [mood]);

  const storeData = (video, text, mood) => {
    let data = new Date().toLocaleString();
    const newData = { id: video, data: data, mood: mood };
    var localDatas = localStorage.getItem(`${mood}_${text}`);
    if (!localDatas) {
      localStorage.setItem(`${mood}_${text}`, JSON.stringify([newData]));
    } else {
      var items = [];
      items = JSON.parse(localStorage.getItem(`${mood}_${text}`));
      let foundIndex = -1;
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === video) {
          foundIndex = i;
          break;
        }
      }
      if (foundIndex === -1) {
        items.unshift(newData);
      } else {
        if (foundIndex !== 0) {
          items[foundIndex].data = data;
        }
      }
      var arrayUniqueByKey = [];
      if (mood === "youtube") {
        if (text === "video") {
          const uniqueIds = new Set();
          arrayUniqueByKey = items.filter((item) => {
            if (uniqueIds.has(item?.id?.videoId)) {
              return false;
            }
            uniqueIds.add(item?.id?.videoId);
            return true;
          });
        } else {
          const uniqueIds = new Set();
          arrayUniqueByKey = items.filter((item) => {
            if (uniqueIds.has(item?.id?.id)) {
              return false;
            }
            uniqueIds.add(item?.id?.id);
            return true;
          });
        }
      }
      if (mood === "appleMusic") {
        if (text === "video") {
          const uniqueIds = new Set();
          arrayUniqueByKey = items.filter((item) => {
            if (uniqueIds.has(item?.id?.key)) {
              return false;
            }
            uniqueIds.add(item?.id?.key);
            return true;
          });
        } else {
          const uniqueIds = new Set();
          arrayUniqueByKey = items.filter((item) => {
            if (uniqueIds.has(item?.id?.data?.[0]?.id)) {
              return false;
            }
            uniqueIds.add(item?.id?.data?.[0]?.id);
            return true;
          });
        }
      }
      if (mood === "spotify") {
        if (text === "video") {
          const uniqueIds = new Set();
          arrayUniqueByKey = items.filter((item) => {
            if (uniqueIds.has(item?.id?.[0]?.id)) {
              return false;
            }
            uniqueIds.add(item?.id?.[0]?.id);
            return true;
          });
        } else {
          const uniqueIds = new Set();
          arrayUniqueByKey = items.filter((item) => {
            if (uniqueIds.has(item?.id?.id)) {
              return false;
            }
            uniqueIds.add(item?.id?.id);
            return true;
          });
        }
      }
      arrayUniqueByKey = arrayUniqueByKey.filter(
        (item) => item?.id?.length !== 0
      );
      arrayUniqueByKey = arrayUniqueByKey.filter(
        (item) => item?.[0]?.id?.length !== 0
      );
      arrayUniqueByKey = arrayUniqueByKey.filter(
        (item) => item?.[0]?.id?.[0]?.length !== 0
      );
      arrayUniqueByKey = arrayUniqueByKey.filter(
        (item) => item?.[0]?.id?.length !== 0
      );
      arrayUniqueByKey = arrayUniqueByKey.filter(
        (item) => item?.[0]?.id?.data?.[0]?.length !== 0
      );
      localStorage.setItem(`${mood}_${text}`, JSON.stringify(arrayUniqueByKey));
    }
  };
  
  useEffect(() => {
    if (mood === "youtube" && !id?.includes("|")) {
      if (id.length <= 11 && !playlistActivate) {
        setPlaylist(0);
        ApiYouTube3(`video/details?id=${id}`).then((data1) => setVideo(data1));
        ApiYouTube1(`related?id=${id}`).then((data) => setRelated(data.data));
        ApiYouTube10(`related?videoId=${id}`).then((data) =>
          setRelatedPlayList(data.items)
        );
      } else {
        setPlaylist(1);
        ApiYouTube2(`playlist/details?playlistId=${id}`).then((data) =>{setVideo(data)});
        setRelated(videos);
      }
    }
    else if (mood === "spotify" && !id?.includes("|")) {
      if (typexx?.[1] === "track") {
        setPlaylist(0);
        ApiSpotify3(`tracks?ids=${id}`).then((data) => setVideo(data?.tracks));
        ApiSpotify3(`seed_to_playlist?uri=spotify:track:${id}`).then((data) =>
          setA(data)
        );
      }
      if (typexx?.[1] === "playlist") {
        setPlaylist(1);
        ApiSpotify3(`playlist?id=${id}`).then((data) => {
          setVideo(data);
          setRelated(data);
          setDelete1(data);
        });
      }
    }
    else if (mood === "appleMusic" && !id?.includes("|")) {
      if (
        typexx?.[1] === "song" ||
        typexx?.[1] === "MUSIC" ||
        typexx?.[1] === "SONG"
      ) {
        setPlaylist(0);
        ApiShazam4(`songs/get_details?id=${id}`).then((data1) =>
          setVideo(data1)
        );
        ApiShazam2(
          `shazam-songs/list-similarities?id=track-similarities-id-${id}`
        ).then((data2) => setRelated(data2?.resources));
      }
      if (typexx?.[1] === "albums" || typexx?.[1] === "album") {
        setPlaylist(1);
        ApiShazam2(`albums/get-details?id=${id}`).then((data1) => {
          setVideo(data1);
          setRelated(data1);
          setDelete1(data1);
        });
      }
    } else if (id?.includes("|")) {
      const con = id;
      const content = con?.split("|");
      if (content?.length > 0 && idSp != "") {
        setPlaylist(1);
        if (ok === false) {
          Cookies.set("mood", content?.[0]);
          setOk(true);
        }
        ApiDataBaseGet(
          `playlistContent/mood/name/user_id/playlist_id?name=${content?.[1]}&user_id=${idSp}&playlist_id=${content?.[3]}`
        )
          .then((data1) => {
            setRelated(data1);
          })
          .catch((err1) => console.error(err1?.message));
        ApiDataBaseGet(`playList/playlist_id?playlist_id=${content?.[3]}`)
          .then((data1) => {
            setVideo(data1);
          })
          .catch((err) => console.error(err?.message));
        ApiDataBaseGet(`playList/count?playlist_id=${content?.[3]}`)
          .then((data1) => {
            setCount(data1);
          })
          .catch((err) => console.error(err?.message));
      }
    }
  }, [id, idChannel, idSp]);

  useEffect(() => {
    if (mood === "spotify" && !id?.includes("|")) {
      if (typexx?.[1] === "track")
        ApiSpotify3(`albums?ids=${videos?.[0]?.album?.id}`).then((data) => {
          setRelated(data?.albums?.[0]?.tracks?.items);
        });
    }
  }, [videos]);

  useEffect(() => {
    if (mood === "spotify" && !id?.includes("|")) {
      if (typexx?.[1] === "track")
        ApiSpotify6(`playlist/?id=${idxx?.[2]}`).then((data) => {
          setRelatedPlayList(data);
        });
    }
  }, [idxx?.[2]]);

  useEffect(() => {
    if (token === undefined) {
      if (mood === "youtube") {
        if (id.length <= 11 && !playlistActivate) {
          storeData(videos, "video", "youtube");
        } else {
          setRelated(videos);
          const aaaa = JSON.parse(JSON.stringify(videos));
          delete aaaa?.videos?.items;
          storeData(aaaa, "playlist", "youtube");
        }
      } else if (mood === "spotify") {
        if (typexx?.[1] === "playlist") {
          setRelated(videos);
        }
      }
      if (mood === "appleMusic") {
        if (
          typexx?.[1] === "song" ||
          typexx?.[1] === "MUSIC" ||
          typexx?.[1] === "SONG"
        ) {
          storeData(videos, "video", "appleMusic");
        }
        if (typexx?.[1] === "albums" || typexx?.[1] === "album") {
          const aaaa = JSON.parse(JSON.stringify(videos));
          delete aaaa?.data?.[0]?.relationships;
          storeData(aaaa, "playlist", "appleMusic");
        }
      }
      if (mood === "spotify") {
        if (typexx?.[1] === "track") {
          storeData(videos, "video", "spotify");
        }
        if (typexx?.[1] === "playlist") {
          const aaaa = JSON.parse(JSON.stringify(videos));
          delete aaaa?.tracks?.items;
          storeData(aaaa, "playlist", "spotify");
        }
      }
    } else {
      if (mood === "youtube" && videos?.length !== 0 && !id?.includes("|")) {
        if (id.length <= 11 && !playlistActivate) {
          const rezult = {
            description: videos,
            mood: "youtube",
            type: "video",
            idPage: id,
          };
          ApiDataBasePost(`content/add`, rezult)
            .then((data) => {})
            .catch((error) => {
              console.log("error");
            });
        } else if (playlistActivate === null) {
          const aaaa = videos;
          delete aaaa?.videos;
          const rezult = {
            description: aaaa,
            mood: "youtube",
            type: "playlist",
            idPage: id,
          };
          ApiDataBasePost(`content/add`, rezult)
            .then((data) => {})
            .catch((error) => {
              console.log(error?.message);
            });
          if (idSongPlayList === "" && playlist === 1) {
            if (!id?.includes("|")) {
              const rezult1 = {
                description: related?.videos?.[0],
                mood: "youtube",
                type: "video",
                idPage: related?.videos?.[0]?.id,
              };
              ApiDataBasePost(`content/add`, rezult1)
                .then((data) => {})
                .catch((error) => {
                  console.log("error");
                });
            }
          }
        }
      }
      if (mood === "appleMusic" && !id?.includes("|") && videos?.length !== 0) {
        if (
          typexx?.[1] === "song" ||
          typexx?.[1] === "MUSIC" ||
          typexx?.[1] === "SONG"
        ) {
          const rezult = {
            description: videos,
            mood: "appleMusic",
            type: "video",
            idPage: id,
          };
          ApiDataBasePost(`content/add`, rezult)
            .then((data) => {})
            .catch((error) => {
              console.log("error");
            });
        }
        if (typexx?.[1] === "albums" || typexx?.[1] === "album") {
          const aaaa = JSON.parse(JSON.stringify(delete1));
          delete aaaa?.data?.[0]?.relationships;
          const rezult = {
            description: aaaa,
            mood: "appleMusic",
            type: "playlist",
            idPage: id,
          };
          ApiDataBasePost(`content/add`, rezult)
            .then((data) => {})
            .catch((error) => {
              console.log(error?.message);
            });
          if (idSongPlayList === "" && playlist === 1) {
            if (!id?.includes("|")) {
              const rezult1 = {
                description:
                  videos?.data?.[0]?.relationships?.tracks?.data?.[0],
                mood: "appleMusic",
                type: "video",
                idPage: videos?.data?.[0]?.relationships?.tracks?.data?.[0]?.id,
              };
              ApiDataBasePost(`content/add`, rezult1)
                .then((data) => {})
                .catch((error) => {
                  console.log(error?.message);
                });
            }
          }
        }
      }
      if (mood === "spotify" && !id?.includes("|") && videos?.length !== 0) {
        if (typexx?.[1] === "track") {
          const rezult = {
            description: videos,
            mood: "spotify",
            type: "video",
            idPage: id,
          };
          ApiDataBasePost(`content/add`, rezult)
            .then((data) => {})
            .catch((error) => {
              console.log("error");
            });
        }
        if (typexx?.[1] === "playlist") {
          const aaaa = JSON.parse(JSON.stringify(delete1));
          delete aaaa?.tracks?.items;
          const rezult = {
            description: aaaa,
            mood: "spotify",
            type: "playlist",
            idPage: id,
          };
          ApiDataBasePost(`content/add`, rezult)
            .then((data) => {})
            .catch((error) => {
              console.log(error?.message);
            });
          if (idSongPlayList === "" && playlist === 1) {
            if (!id?.includes("|")) {
              const rezult1 = {
                description: related?.tracks?.items?.[0],
                mood: "spotify",
                type: "video",
                idPage: related?.tracks?.items?.[0]?.track?.id,
              };
              ApiDataBasePost(`content/add`, rezult1)
                .then((data) => {})
                .catch((error) => {
                  console.log("error");
                });
            }
          }
        }
      }
      if (id?.includes("|")) {
        if (related?.length !== 0) {
          let res = null;
          if (idSong[0])
            res = related?.find((obj) => obj?.content_id?.idPage === idSong[0]);
          let rezult;
          if (res === null) {
            rezult = {
              description: related?.[0]?.content_id?.description,
              mood: mood,
              type: "video",
              idPage: related?.[0]?.content_id?.idPage,
            };
          } else {
            rezult = {
              description: res,
              mood: mood,
              type: "video",
              idPage: idSong[0],
            };
          }
          if (rezult?.description != null)
            ApiDataBasePost(`content/add`, rezult)
              .then((data) => {})
              .catch((error) => {
                console.log(error?.message);
              });
        }
      }
    }
  }, [videos, token]);

  useEffect(() => {
    if (token && videos != 0) {
      ApiDataBaseGet(`history/last?user_id=${idSp}`).then((data) => {
        if (data?.content_id?.idPage != id) {
          if (mood === "youtube" && videos?.length != 0 && !id?.includes("|")) {
            if (id.length <= 11 && !playlistActivate) {
              ApiDataBasePost(
                `history/save?userId=${idSp}&mode=${mood}&type=video&description=${id}`
              )
                .then((data1) => {
                  ApiDataBaseGet(`history/unused-content`);
                })
                .catch((err) => {
                  console.log(err?.message);
                });
            } else if (playlistActivate === null) {
              ApiDataBasePost(
                `history/save?userId=${idSp}&mode=${mood}&type=playlist&description=${id}`
              )
                .then((data1) => {})
                .catch((err) => {
                  console.log(err?.message);
                });
            }
          }
          if (
            mood === "appleMusic" &&
            videos?.length !== 0 &&
            !id?.includes("|")
          ) {
            if (
              typexx?.[1] === "song" ||
              typexx?.[1] === "MUSIC" ||
              typexx?.[1] === "SONG"
            ) {
              ApiDataBasePost(
                `history/save?userId=${idSp}&mode=${mood}&type=video&description=${id}`
              )
                .then((data1) => {
                  ApiDataBaseGet(`history/unused-content`);
                })
                .catch((err) => {
                  console.log(err?.message);
                });
            }
            if (typexx?.[1] === "albums" || typexx?.[1] === "album") {
              ApiDataBasePost(
                `history/save?userId=${idSp}&mode=${mood}&type=playlist&description=${id}`
              )
                .then((data1) => {})
                .catch((err) => {
                  console.log(err?.message);
                });
            }
          }
          if (
            mood === "spotify" &&
            videos?.length !== 0 &&
            !id?.includes("|")
          ) {
            if (typexx?.[1] === "track") {
              ApiDataBasePost(
                `history/save?userId=${idSp}&mode=${mood}&type=video&description=${id}`
              )
                .then((data1) => {
                  ApiDataBaseGet(`history/unused-content`);
                })
                .catch((err) => {
                  console.log(err?.message);
                });
            }
            if (typexx?.[1] === "playlist") {
              ApiDataBasePost(
                `history/save?userId=${idSp}&mode=${mood}&type=playlist&description=${id}`
              )
                .then((data1) => {})
                .catch((err) => {
                  console.log(err?.message);
                });
            }
          }
        }
      });
    }
  }, [videos, idSp, token]);

  useEffect(() => {
    ApiDataBaseGet(`content/last`).then((data) => {
      if (data?.idPage !== id) {
        if (token && !id?.includes("|")) {
          if (mood === "youtube" && videos?.length !== 0) {
            if (id.length >= 11 && playlist === 1) {
              let res = null;
              if (idSong[0])
                res = related?.videos?.find((obj) => obj?.id === idSong[0]);
              let rezult;
              if (res === null) {
                rezult = {
                  description: related?.videos?.[0],
                  mood: "youtube",
                  type: "video",
                  idPage: related?.videos?.[0]?.id,
                };
              } else {
                rezult = {
                  description: res,
                  mood: "youtube",
                  type: "video",
                  idPage: idSong[0],
                };
              }
              if (rezult?.description != null)
                ApiDataBasePost(`content/add`, rezult)
                  .then((data) => {})
                  .catch((error) => {
                    console.log(error?.message);
                  });
            }
          }
          if (mood === "spotify" && videos?.length !== 0) {
            if (playlist === 1) {
              let res = null;
              if (idSong[0])
                res = related?.tracks?.items?.find(
                  (obj) => obj?.track?.id === idSong[0]
                );
              let rezult;
              if (res === null) {
                rezult = {
                  description: related?.tracks?.items?.[0],
                  mood: "spotify",
                  type: "video",
                  idPage: related?.tracks?.items?.[0]?.track?.id,
                };
              } else {
                rezult = {
                  description: res,
                  mood: "spotify",
                  type: "video",
                  idPage: idSong[0],
                };
              }
              if (rezult?.description != null)
                ApiDataBasePost(`content/add`, rezult)
                  .then((data) => {})
                  .catch((error) => {
                    console.log(error?.message);
                  });
            }
          }
          if (mood === "appleMusic" && videos?.length !== 0) {
            if (playlist === 1) {
              let res = null;
              if (idSong[0])
                res = related?.data?.[0]?.relationships?.tracks?.data?.find(
                  (obj) => obj?.id === idSong[0]
                );
              let rezult;
              if (res === null) {
                rezult = {
                  description: related?.data?.[0],
                  mood: "appleMusic",
                  type: "video",
                  idPage: related?.data?.[0]?.id,
                };
              } else {
                rezult = {
                  description: res,
                  mood: "appleMusic",
                  type: "video",
                  idPage: idSong[0],
                };
              }
              if (rezult?.description != null)
                ApiDataBasePost(`content/add`, rezult)
                  .then((data) => {})
                  .catch((error) => {
                    console.log(error?.message);
                  });
            }
          }
        }
      }
    });
  }, [related, videos, idSongPlayList]);

  const handleValueChange = () => {
    setClick((click) => !click);
  };

  const debouncedApiCall = useCallback(
    debounce((params) => {
      ApiDataBaseGet(`favorite/search?userId=${params?.idSp}&type=video`)
        .then((data) => {
          setSame12(data);
        })
        .catch((err) => {
          console.log(err?.message);
        });
    }, 300),
    []
  );

  useEffect(() => {
    debouncedApiCall({ idSp });
  }, [debouncedApiCall, idSp, click]);

  const styleChangeOnBar = (idClass) => {
    document.getElementById(idClass).classList.add("accoun1");
    //if(idClass !== 'shazam')
    //  Cookies.set('mood',idClass);
    if (idClass === "youtube")
      document.getElementById("youtube1").classList.add("accoun2");
    if (idClass === "spotify")
      document.getElementById("spotify1").classList.add("accoun3");
    if (idClass === "shazam")
      document.getElementById("shazam1").classList.add("accoun4");
    if (idClass === "appleMusic")
      document.getElementById("appleMusic1").classList.add("accoun5");
  };

  const styleChangeOfBar = (idClass) => {
    document.getElementById(idClass).classList.remove("accoun1");
    if (idClass === "youtube")
      document.getElementById("youtube1").classList.remove("accoun2");
    if (idClass === "spotify")
      document.getElementById("spotify1").classList.remove("accoun3");
    if (idClass === "shazam")
      document.getElementById("shazam1").classList.remove("accoun4");
    if (idClass === "appleMusic")
      document.getElementById("appleMusic1").classList.remove("accoun5");
  };

  const handleChange = (namePlatform) => {
    if (mood !== namePlatform && !id.includes("|"))
      Swal.fire({
        title: "Error...",
        html: `Possibility to change platform do not is permitted. <br></br> ${mood?.toLocaleUpperCase()} to ${namePlatform?.toLocaleUpperCase()}!`,
        showDenyButton: false,
        showConfirmButton: false,
        showCancelButton: false,
        customClass: {
          container: "blur-background popup my-sweetalert-container",
        },
        buttons: false,
        focusDeny: false,
        focusConfirm: false,
        timer: 2000,
      });
  };

  const handleClick = () => {
    let value = type;
    dispatch(pauseVideo());
    Swal.fire({
      title: 'Recognition Now',
      html: `<div class="my-custom-container">
      <div class="full-panel">
      <div id="trans" class="center">
          <div class="trans trans-left" style="display: none;"></div>
          <div class="trans trans-right" style="display: none;"></div>
          <div class="trans trans-top" style="display: none;"></div>
          <div class="trans trans-bottom" style="display: none;"></div>
          <div id="button1" class="button1"> 
              <img src="https://i.imgur.com/spiFNt0.png" width="200" height="200" />
          </div>
      </div>
  </div>
    </div>
      <style>
      .my-custom-container{
        width: 400px;
        height: 400px;
      }
      .full-panel {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .center {
        position: relative;
        margin: auto;
      }
        .button1 {
            height:300px;
            width:300px;
            background: #003f75;
            background: -moz-linear-gradient(top, #003f75 0%, #000000 100%);
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #003f75), color-stop(100%, #000000));
            background: -webkit-linear-gradient(top, #003f75 0%, #000000 100%);
            background: -o-linear-gradient(top, #003f75 0%, #000000 100%);
            background: -ms-linear-gradient(top, #003f75 0%, #000000 100%);
            background: linear-gradient(to bottom, #003f75 0%, #000000 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#003f75', endColorstr='#000000', GradientType=0);
            -webkit-border-radius: 50%;
            border-radius: 50%;
            border: solid 1px #000000;
            -moz-box-shadow:inset 0px 2px 20px -5px rgba(0, 0, 0, 0.47), 1px 15px 30px -5px rgba(0, 0, 0, 0.68);
            -webkit-box-shadow:inset 0px 2px 20px -5px rgba(0, 0, 0, 0.47), 1px 15px 30px -5px rgba(0, 0, 0, 0.68);
            box-shadow:inset 0px 2px 20px -5px rgba(0, 0, 0, 0.47), 1px 15px 30px -5px rgba(0, 0, 0, 0.68);
            text-align:center;
            text-shadow: 4px 3px 0px #000000, 9px 8px 0px rgba(0, 0, 0, 0.15);
        }
        .button1 > img {
            margin-top: 45px;
        }
        .trans {
          width: 0;
          height: 0;
          border-right: 175px solid transparent;
          border-top: 175px solid transparent;
          border-left: 175px solid transparent;
          border-bottom: 175px solid transparent;
          border-radius: 50%;
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          position: absolute;
          left: -25px;
          top: -25px;
          z-index: -1;
      }
      .trans-left {
          border-color: rgba(255, 255, 255, 0.1);
          border-left-color: transparent;
          -webkit-animation: rotation-three-fourth 2s infinite;
          -webkit-animation-direction:alternate;
      }
      .trans-right {
          border-color: rgba(255, 255, 255, 0.2);
          border-right-color: transparent;
          -webkit-animation: rotation 4s infinite linear;
      }
      .trans-top {
          border-color: rgba(255, 255, 255, 0.2);
          border-top-color: transparent;
          -webkit-animation: rotation-half 2s infinite;
          -webkit-animation-direction:alternate;
      }
      .trans-bottom {
          border-color: rgba(255, 255, 255, 0.15);
          border-bottom-color: transparent;
          -webkit-animation: rotation 8s infinite linear;
      }
      @-webkit-keyframes rotation {
          from {
              -webkit-transform: rotate(0deg);
          }
          to {
              -webkit-transform: rotate(359deg);
          }
      }
      @-webkit-keyframes rotation-half {
          from {
              -webkit-transform: rotate(0deg);
          }
          to {
              -webkit-transform: rotate(90deg);
          }
      }
      @-webkit-keyframes rotation-three-fourth {
          from {
              -webkit-transform: rotate(0deg);
          }
          to {
              -webkit-transform: rotate(90deg);
          }
      }
      
      header {
      background: #2980B9;
      position: fixed;
      width: 100%;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      padding-left: 50px;
      z-index: 1001;
      top: 0;
      left: 0;
      }
      
      header > a{
        text-decoration: none;
        color: white;
        opacity: 0.6;
      }
      
      header > a:hover {
        opacity: 0.9;
      }
      `,
      showDenyButton: true,
      confirmButtonText: "Recognition",
      confirmeButton:true,
      denyButtonText: 'Cancel',
      customClass: {
        container: 'blur-background popup my-sweetalert-container',
      },
      didOpen: () => {
        const confirmeButton = Swal.getDenyButton();
        confirmeButton.style.border = 'none';
        const confirmeButton1 = Swal.getConfirmButton();
        confirmeButton1.style.border = 'none';
      },
      buttons: false,
      focusDeny: false,
      focusConfirm:false,
    }).then((result) => {
      setType(value);
      if(value === 'youtube')
        styleChangeOnBar('youtube');
      if(value === 'spotify')
        styleChangeOnBar('spotify');
      if(value === 'appleMusic')
        styleChangeOnBar('appleMusic');
      styleChangeOfBar('shazam');

      if (result.isDenied) {
      setType(value);
      if(value === 'youtube')
        styleChangeOnBar('youtube');
      if(value === 'spotify')
        styleChangeOnBar('spotify');
      if(value === 'appleMusic')
        styleChangeOnBar('appleMusic');
      styleChangeOfBar('shazam');

      }if(result.isConfirmed){
          Swal.fire({
          title: 'Searching ...',
          html: `
          <div class="my-custom-container">
          <div class="full-panel">
          <div id="trans" class="center">
            
              <div class="trans trans-left"></div>
              <div class="trans trans-right"></div>
              <div class="trans trans-top"></div>
              <div class="trans trans-bottom"></div>
              <div id="button1" class="button1"> 
                  
                  <img src="https://i.imgur.com/spiFNt0.png" width="200" height="200" />
              </div>
          </div>
      </div>
        </div>
          <style>
          .my-custom-container{
            width: 400px;
            height: 400px;
          }
          .full-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .center {
            position: relative;
            margin: auto;
          }
            .button1 {
                height:300px;
                width:300px;
                background: #003f75;
                background: -moz-linear-gradient(top, #003f75 0%, #000000 100%);
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #003f75), color-stop(100%, #000000));
                background: -webkit-linear-gradient(top, #003f75 0%, #000000 100%);
                background: -o-linear-gradient(top, #003f75 0%, #000000 100%);
                background: -ms-linear-gradient(top, #003f75 0%, #000000 100%);
                background: linear-gradient(to bottom, #003f75 0%, #000000 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#003f75', endColorstr='#000000', GradientType=0);
                -webkit-border-radius: 50%;
                border-radius: 50%;
                border: solid 1px #000000;
                -moz-box-shadow:inset 0px 2px 20px -5px rgba(0, 0, 0, 0.47), 1px 15px 30px -5px rgba(0, 0, 0, 0.68);
                -webkit-box-shadow:inset 0px 2px 20px -5px rgba(0, 0, 0, 0.47), 1px 15px 30px -5px rgba(0, 0, 0, 0.68);
                box-shadow:inset 0px 2px 20px -5px rgba(0, 0, 0, 0.47), 1px 15px 30px -5px rgba(0, 0, 0, 0.68);
                text-align:center;
                text-shadow: 4px 3px 0px #000000, 9px 8px 0px rgba(0, 0, 0, 0.15);
            }
            .button1 > img {
                margin-top: 45px;
            }
            .trans {
              width: 0;
              height: 0;
              border-right: 175px solid transparent;
              border-top: 175px solid transparent;
              border-left: 175px solid transparent;
              border-bottom: 175px solid transparent;
              border-radius: 50%;
              -moz-border-radius: 50%;
              -webkit-border-radius: 50%;
              position: absolute;
              left: -25px;
              top: -25px;
              z-index: -1;
          }
          .trans-left {
              border-color: rgba(255, 255, 255, 0.1);
              border-left-color: transparent;
              -webkit-animation: rotation-three-fourth 2s infinite;
              -webkit-animation-direction:alternate;
          }
          .trans-right {
              border-color: rgba(255, 255, 255, 0.2);
              border-right-color: transparent;
              -webkit-animation: rotation 4s infinite linear;
          }
          .trans-top {
              border-color: rgba(255, 255, 255, 0.2);
              border-top-color: transparent;
              -webkit-animation: rotation-half 2s infinite;
              -webkit-animation-direction:alternate;
          }
          .trans-bottom {
              border-color: rgba(255, 255, 255, 0.15);
              border-bottom-color: transparent;
              -webkit-animation: rotation 8s infinite linear;
          }
          @-webkit-keyframes rotation {
              from {
                  -webkit-transform: rotate(0deg);
              }
              to {
                  -webkit-transform: rotate(359deg);
              }
          }
          @-webkit-keyframes rotation-half {
              from {
                  -webkit-transform: rotate(0deg);
              }
              to {
                  -webkit-transform: rotate(90deg);
              }
          }
          @-webkit-keyframes rotation-three-fourth {
              from {
                  -webkit-transform: rotate(0deg);
              }
              to {
                  -webkit-transform: rotate(90deg);
              }
          }
          
          header {
          background: #2980B9;
          position: fixed;
          width: 100%;
          height: 50px;
          font-size: 20px;
          line-height: 50px;
          padding-left: 50px;
          z-index: 1001;
          top: 0;
          left: 0;
          }
          
          header > a{
            text-decoration: none;
            color: white;
            opacity: 0.6;
          }
          
          header > a:hover {
            opacity: 0.9;
          }
          `,
          showConfirmButton: false,
          customClass: {
            container: 'blur-background popup my-sweetalert-container',
            validationMessage: 'blur-background-i popup',
          },
        willOpen: () => {

      navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];
  
        mediaRecorder.addEventListener("dataavailable", event => {
          audioChunks.push(event.data);
        });
  
        mediaRecorder.addEventListener("stop", async () => {
  
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const reader = new FileReader();
          
          reader.readAsDataURL(audioBlob);
          reader.onloadend = async () => {
            const base64Data = reader.result.replace(/^data:audio\/\w+;base64,/, '');
            try {
              const response = await axios.post('https://cors-anywhere.herokuapp.com/https://api.audd.io/', {
                api_token: process.env.REACT_APP_AUDD_KEY,
                return: 'apple_music,spotify,deezer,napster',
                audio: base64Data
              });
              if(response?.data?.status !== 'error') {
                Swal.fire({
                  title: 'Rezult Recognition',
                  html: `<div style="text-align: center;">`+response?.data?.result?.artist+'<br>'+`</div><div style="text-align: center;">`+response?.data?.result?.title+'<br>'+`</div> <div style="text-align: center;">`+response?.data?.result?.album+'<br>'+`</div>` ,
                 confirmButtonText: '<svg width="100%" height="100%" fill="#FF0000" viewBox="0 0 1024 1024" className="home-icon002 accoun2"><path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path></svg>',
                 confirmButtonColor: '#fff',
                 denyButtonText: '<svg width="100%" height="100%" fill="#18D860" viewBox="0 0 877.7142857142857 1024" className="home-icon002 accoun5"><path d="M644 691.429c0-16-6.286-22.286-17.143-29.143-73.714-44-159.429-65.714-255.429-65.714-56 0-109.714 7.429-164 19.429-13.143 2.857-24 11.429-24 29.714 0 14.286 10.857 28 28 28 5.143 0 14.286-2.857 21.143-4.571 44.571-9.143 91.429-15.429 138.857-15.429 84 0 163.429 20.571 226.857 58.857 6.857 4 11.429 6.286 18.857 6.286 14.286 0 26.857-11.429 26.857-27.429zM698.857 568.571c0-15.429-5.714-26.286-20-34.857-87.429-52-198.286-80.571-313.143-80.571-73.714 0-124 10.286-173.143 24-18.286 5.143-27.429 17.714-27.429 36.571s15.429 34.286 34.286 34.286c8 0 12.571-2.286 21.143-4.571 40-10.857 88-18.857 143.429-18.857 108.571 0 207.429 28.571 278.857 70.857 6.286 3.429 12.571 7.429 21.714 7.429 19.429 0 34.286-15.429 34.286-34.286zM760.571 426.857c0-21.143-9.143-32-22.857-40-98.857-57.714-234.286-84.571-363.429-84.571-76 0-145.714 8.571-208 26.857-16 4.571-30.857 18.286-30.857 42.286 0 23.429 17.714 41.714 41.143 41.714 8.571 0 16.571-2.857 22.857-4.571 55.429-15.429 115.429-21.143 175.429-21.143 118.857 0 242.286 26.286 321.714 73.714 8 4.571 13.714 6.857 22.857 6.857 21.714 0 41.143-17.143 41.143-41.143zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path></svg>',
                 denyButtonColor: '#fff',
                 showCancelButton: true,
                 showDenyButton: true,
                 cancelButtonText: '<svg width="100%" height="100%" fill="#FD4960" className="home-icon002 accoun3"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path d="M31.995 8.167c0-0.984-0.083-1.964-0.318-2.922-0.422-1.745-1.417-3.078-2.906-4.057-0.766-0.5-1.609-0.807-2.505-0.969-0.688-0.125-1.385-0.182-2.083-0.198-0.052-0.005-0.109-0.016-0.167-0.021h-16.031c-0.203 0.016-0.406 0.026-0.609 0.036-0.995 0.057-1.984 0.161-2.922 0.536-1.781 0.703-3.068 1.932-3.818 3.703-0.26 0.599-0.391 1.234-0.484 1.88-0.078 0.521-0.12 1.047-0.135 1.573 0 0.042-0.010 0.083-0.010 0.125v16.297c0.010 0.188 0.021 0.375 0.031 0.563 0.068 1.089 0.208 2.167 0.667 3.167 0.865 1.891 2.318 3.135 4.313 3.734 0.557 0.172 1.141 0.25 1.724 0.302 0.74 0.073 1.479 0.083 2.219 0.083h14.708c0.698 0 1.396-0.047 2.094-0.135 1.099-0.141 2.13-0.464 3.063-1.078 1.12-0.74 1.964-1.719 2.505-2.943 0.25-0.563 0.391-1.161 0.495-1.766 0.151-0.901 0.182-1.813 0.182-2.724-0.005-5.063 0-10.125-0.005-15.188zM23.432 13.484v7.615c0 0.557-0.078 1.104-0.328 1.609-0.385 0.786-1.010 1.281-1.849 1.521-0.464 0.135-0.943 0.208-1.427 0.229-1.266 0.063-2.365-0.797-2.589-2.047-0.193-1.031 0.302-2.167 1.385-2.698 0.427-0.208 0.891-0.333 1.354-0.427 0.505-0.109 1.010-0.208 1.51-0.323 0.37-0.083 0.609-0.307 0.682-0.688 0.021-0.083 0.026-0.172 0.026-0.255 0-2.422 0-4.844 0-7.26 0-0.083-0.016-0.167-0.036-0.245-0.052-0.203-0.198-0.323-0.406-0.313-0.214 0.010-0.422 0.047-0.63 0.089-1.016 0.198-2.031 0.401-3.042 0.609l-4.932 0.995c-0.021 0.005-0.047 0.016-0.068 0.016-0.37 0.104-0.5 0.271-0.516 0.656-0.005 0.057 0 0.115 0 0.172-0.005 3.469 0 6.938-0.005 10.406 0 0.563-0.063 1.115-0.286 1.635-0.37 0.854-1.026 1.391-1.911 1.646-0.469 0.135-0.948 0.214-1.438 0.229-1.276 0.047-2.339-0.802-2.557-2.057-0.188-1.083 0.307-2.25 1.536-2.771 0.479-0.198 0.974-0.307 1.479-0.411 0.38-0.078 0.766-0.156 1.146-0.234 0.51-0.109 0.776-0.432 0.802-0.953v-0.198c0-3.948 0-7.896 0-11.844 0-0.167 0.021-0.333 0.057-0.495 0.094-0.38 0.365-0.599 0.729-0.688 0.339-0.089 0.688-0.151 1.031-0.224 0.979-0.198 1.953-0.396 2.932-0.589l3.026-0.615c0.896-0.177 1.786-0.359 2.682-0.536 0.292-0.057 0.589-0.12 0.885-0.141 0.411-0.036 0.698 0.224 0.74 0.641 0.010 0.099 0.016 0.198 0.016 0.297 0 2.547 0 5.094 0 7.641z"></path> </svg>',
                 cancelButtonColor: '#fff',
                 customClass: {
                   container: 'blur-background popup',
                   validationMessage: 'blur-background-i popup',
                   confirmButton: 'sweetalert-button',
                     denyButton: 'sweetalert-button',
                     cancelButton: 'sweetalert-button',
                 }
                 }).then((result) => {
                   if(result.isConfirmed){
                     console.log("Youtube");
                     Cookies.set('mood',"youtube");
                     const body = {
                      track: response?.data?.result?.title,
                      artist: response?.data?.result?.artist,
                      type: 'track',
                      sources: ['youtube'],
                    }
                    ApiAllPlatforms('public/search', body).then((data) =>{
                      window.location.href = `/video/${data?.tracks?.[0]?.data?.externalId}`
                   }).catch((err) => {console.log(err?.message)})
                   }
                   if(result.isDenied){
                     console.log("Spotify");
                     Cookies.set('mood',"spotify");
                     const body = {
                      track: response?.data?.result?.title,
                      artist: response?.data?.result?.artist,
                      type: 'track',
                      sources: ['spotify'],
                    }
                    ApiAllPlatforms('public/search', body).then((data) =>{
                      Cookies.set("spotifyType","123:track:" + data?.tracks?.[0]?.data?.externalId);
                      window.location.href = `/video/${data?.tracks?.[0]?.data?.externalId}`
                   }).catch((err) => {console.log(err?.message)})
                   }
                   if (result.dismiss === Swal.DismissReason.cancel) {
                     console.log("AppleMusic");
                     Cookies.set('mood',"appleMusic");
                     const body = {
                      track: response?.data?.result?.title,
                      artist: response?.data?.result?.artist,
                      type: 'track',
                      sources: ['appleMusic'],
                    }
                    ApiAllPlatforms('public/search', body).then((data) =>{
                      window.location.href = `/video/${data?.tracks?.[0]?.data?.externalId}`
                   }).catch((err) => {console.log(err?.message)})
                   }
                 });
              }else{
                Swal.fire({
                  title: 'Error ...',
                  html: ` Something is wrong! Please try again.`,
                  showConfirmButton: false,
                  customClass: {
                    container: 'blur-background popup my-sweetalert-container',
                    validationMessage: 'blur-background-i popup',
                  },
                  timer: 2000,
                });
              }
            } catch (error) {
              console.log(error);
            }
            }
        });
  
        setTimeout(() => {
          mediaRecorder.stop();
        }, 5000);
  
        mediaRecorder.start();
      })
      .catch(error => {
        console.log(error);
      });
    }
        });
      }
    });
  };

  const dispatch = useDispatch();
  const playerRef = useRef(null);
  const {
    url,
    playing,
    muted,
    loop,
    played,
    duration,
    currentTime,
    allVideo,
    name,
    thumbnail,
    previous,
    next,
    randome,
    rad,
    position,
  } = useSelector((state) => state);
  const [index, setIndex] = useState(0);
  const [last, setLast] = useState();

  const handleProgress = ({ playedSeconds }) => {
    if (!played) {
      dispatch(setCurrentTime(playedSeconds));
    }
  };

  useEffect(() => {
    if (playerRef?.current && currentTime !== null) {
      const current = playerRef?.current?.getCurrentTime();
      if (Math.abs(current - currentTime) > 1) {
        playerRef?.current?.seekTo(currentTime);
      }
    }
  }, [currentTime]);

  const handleDuration = (duration) => {
    dispatch(setDuration(duration));
  };

  const handleMute = () => {
    dispatch(toggleMute(!muted));
  };

  const handleLoop = () => {
    dispatch(toggleLoop(!loop));
  };

  const handleRandome = () => {
    dispatch(toggleRandome(!randome));
  };

  const handlePlayPause = () => {
    if (playing) {
      dispatch(pauseVideo());
    } else {
      if (currentTime > 0) {
        playerRef?.current?.seekTo(currentTime);
      }
      dispatch(playVideo());
    }
  };

  const handleSeek = (time) => {
    dispatch(setCurrentTime(time));
    playerRef?.current?.seekTo(time);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef?.current) {
        const current = playerRef?.current?.getCurrentTime();
        if (current !== null) {
          dispatch(setCurrentTime(current));
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [dispatch, playerRef]);

  useEffect(() => {
    if(token) {
      if (playlist === 1)
        if (randome === true) {
          const arr = [];
          var n = related?.length;
          let count = 0;
          if (rad?.length === 0 || rad?.length === 1) {
            for (let i = 0; i <= 400; i++) {
              const num = Math?.floor(Math?.random() * n) + 0;
              if (!arr?.includes(num)) {
                arr?.push(num);
                count++;
                dispatch(setRad(num));
              }
              if (count === n) break;
            }
          }
        }
    }
    else if (mood === "youtube"){
      if (playlist === 1)
        if (randome === true) {
          const arr = [];
          var n = related?.videos?.length;
          let count = 0;
          if (rad?.length === 0) {
            for (let i = 0; i <= 400; i++) {
              const num = Math?.floor(Math?.random() * n) + 0;
              if (!arr?.includes(num)) {
                arr?.push(num);
                count++;
                dispatch(setRad(num));
              }
              if (count === n) break;
            }
          }
        }
      }
    else if (mood === "spotify"){
      if (playlist === 1)
        if (randome === true) {
          const arr = [];
          var n = related?.tracks?.items?.length;
          let count = 0;
          if (rad?.length === 0) {
            for (let i = 0; i <= 400; i++) {
              const num = Math?.floor(Math?.random() * n) + 0;
              if (!arr?.includes(num)) {
                arr?.push(num);
                count++;
                dispatch(setRad(num));
              }
              if (count === n) break;
            }
          }
        }
      }
        else if (mood === "appleMusic"){
          if (playlist === 1)
            if (randome === true) {
              const arr = [];
              console.log(related)
              var n = related?.data?.[0]?.relationships?.tracks?.data?.length;
              let count = 0;
              if (rad?.length === 0) {
                for (let i = 0; i <= 400; i++) {
                  const num = Math?.floor(Math?.random() * n) + 0;
                  if (!arr?.includes(num)) {
                    arr?.push(num);
                    count++;
                    dispatch(setRad(num));
                  }
                  if (count === n) break;
                }
              }
            }
          }
  }, [randome, rad]);

  const handleNext = () => {
    if(token ){
      if (playlist === 1 && randome === false) {
        dispatch(setPreview(related?.[index]?.content_id?.idPage));
        dispatch(setNext(related?.[index]?.content_id?.idPage));
        if (related === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
      if (playlist === 1 && randome === true) {
        let a = rad?.[index] - 1;
        dispatch(setPreview(related?.[a]?.content_id?.idPage));
        dispatch(setNext(related?.[a]?.content_id?.idPage));
        if (related === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
    }
    else if (mood === "youtube" ) {
      if (playlist === 0 && randome === true) {
        let x = Math.floor(Math.random() * related?.length);
        dispatch(setPreview(id));
        history.push("/video/" + related?.[x]?.videoId);
      }
      if (playlist === 0 && randome === false) {
        dispatch(setPreview(id));
        history.push("/video/" + related?.[0]?.videoId);
      }
      if (playlist === 1 && randome === false) {
        dispatch(setPreview(related?.videos?.items?.[index]?.id));
        dispatch(setNext(related?.videos?.items?.[index]?.id));
        if (related?.videos?.length === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
      if (playlist === 1 && randome === true) {
        let a = rad?.[index] - 1;
        dispatch(setPreview(related?.videos?.items?.[a]?.id));
        dispatch(setNext(related?.videos?.items?.[a]?.id));
        if (related?.videos?.length === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
    }
    else if (mood === "spotify" ) {
      console.log(related?.tracks)
      if (playlist === 0 && randome === true) {
        let x = Math.floor(Math.random() * related?.length);
        dispatch(setPreview(id));
        history.push("/video/" + related?.[x]?.id);
      }
      if (playlist === 0 && randome === false) {
        const result = related.findIndex(track => track?.id === id);
        dispatch(setPreview(id));
        history.push("/video/" + related?.[result+1]?.id);
      }
      if (playlist === 1 && randome === false) {
        dispatch(setPreview(related?.tracks?.items?.[index]?.track?.id));
        dispatch(setNext(related?.tracks?.items?.[index]?.track?.id));
        if (related?.tracks?.items?.length === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
      if (playlist === 1 && randome === true) {
        let a = rad?.[index] - 1;
        dispatch(setPreview(related?.tracks?.items?.[a]?.track?.id));
        dispatch(setNext(related?.tracks?.items?.[a]?.track?.id));
        if (related?.tracks?.items?.length === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
    }
    else if (mood === "appleMusic") {
      if (playlist === 0 && randome === true) {
        let x = Math.floor(Math.random() * Object.keys(related["shazam-songs"])?.length);
        const firstIndex = Object.keys(related?.["shazam-songs"])[x];
        dispatch(setPreview(id));
        history.push('/video/'+related?.["shazam-songs"]?.[firstIndex]?.id);
      }
      if (playlist === 0 && randome === false) {
        dispatch(setPreview(id));
        const firstIndex = Object.keys(related?.["shazam-songs"])[0];
        console.log(related?.["shazam-songs"]?.[firstIndex]?.id);
        history.push("/video/" + related?.["shazam-songs"]?.[firstIndex]?.id);
      }
      if (playlist === 1 && randome === false) {
        dispatch(setPreview(related?.data?.[0]?.relationships?.tracks?.data?.[index]?.id));
        dispatch(setNext(related?.data?.[0]?.relationships?.tracks?.data?.[index]?.id));
        if (related?.data?.[0]?.relationships?.tracks?.data?.length === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
      if (playlist === 1 && randome === true) {
        let a = rad?.[index] - 1;
        dispatch(setPreview(related?.data?.[0]?.relationships?.tracks?.data?.[a]?.id));
        dispatch(setNext(related?.data?.[0]?.relationships?.tracks?.data?.[a]?.id));
        if (related?.data?.[0]?.relationships?.tracks?.data?.length === index) {
          setIndex(0);
        } else setIndex(index + 1);
      }
    }
  };
  
  const handlePreview = () => {
      if (playlist === 0) {
        let last1 = previous[previous?.length - 1];
        const removeLast = previous?.pop();
        if (last1 !== undefined) 
          history.push("/video/" + last1);
        else playerRef?.current?.seekTo(0);
      }
      if (playlist === 1) {
        let last1 = previous[previous?.length - 1];
        const removeLast = previous?.pop();
        if (last1 !== undefined) {
          setLast(last1);
          setIndex(index - 1);
        } else playerRef?.current?.seekTo(0);
      }
  };

  return (
    <div className="home-container" style={{ transitionDelay: "4s" }}>
      <Helmet>
        <title>MUsicPLay</title>
        <meta property="og:title" content="MusicPLay" />
      </Helmet>
      <div className="home-up up">
        <img
          alt="image"
          src={
            process.env.PUBLIC_URL +
            "/playground_assets/1-removebg-preview-1500h.png"
          }
          className="home-image"
        />
        <img
          alt="image"
          src={
            process.env.PUBLIC_URL +
            "/playground_assets/2-removebg-preview-1500h.png"
          }
          className="home-image1"
        />
        <form style={{ width: "auto", margin: "auto" }}>
          <Link to={`/filtre`}>
            <input
              style={{ width: "90vh" }}
              type="text"
              id="search"
              name="search-bar"
              required
              placeholder="Search..."
              className="home-search-bar input search-bar"
            />
          </Link>
        </form>
        <div className="home-posibili posibili">
          <button
            id="youtube"
            className="home-button button account"
            onClick={() => {
              handleChange("youtube");
            }}
          >
            <svg id="youtube1" viewBox="0 0 1024 1024" className="home-icon002">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </button>
          <button
            id="spotify"
            className="home-button button account"
            onClick={() => {
              handleChange("spotify");
            }}
          >
            <svg
              id="spotify1"
              viewBox="0 0 877.7142857142857 1024"
              className="home-icon002"
            >
              <path d="M644 691.429c0-16-6.286-22.286-17.143-29.143-73.714-44-159.429-65.714-255.429-65.714-56 0-109.714 7.429-164 19.429-13.143 2.857-24 11.429-24 29.714 0 14.286 10.857 28 28 28 5.143 0 14.286-2.857 21.143-4.571 44.571-9.143 91.429-15.429 138.857-15.429 84 0 163.429 20.571 226.857 58.857 6.857 4 11.429 6.286 18.857 6.286 14.286 0 26.857-11.429 26.857-27.429zM698.857 568.571c0-15.429-5.714-26.286-20-34.857-87.429-52-198.286-80.571-313.143-80.571-73.714 0-124 10.286-173.143 24-18.286 5.143-27.429 17.714-27.429 36.571s15.429 34.286 34.286 34.286c8 0 12.571-2.286 21.143-4.571 40-10.857 88-18.857 143.429-18.857 108.571 0 207.429 28.571 278.857 70.857 6.286 3.429 12.571 7.429 21.714 7.429 19.429 0 34.286-15.429 34.286-34.286zM760.571 426.857c0-21.143-9.143-32-22.857-40-98.857-57.714-234.286-84.571-363.429-84.571-76 0-145.714 8.571-208 26.857-16 4.571-30.857 18.286-30.857 42.286 0 23.429 17.714 41.714 41.143 41.714 8.571 0 16.571-2.857 22.857-4.571 55.429-15.429 115.429-21.143 175.429-21.143 118.857 0 242.286 26.286 321.714 73.714 8 4.571 13.714 6.857 22.857 6.857 21.714 0 41.143-17.143 41.143-41.143zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
          </button>
          <button
            id="appleMusic"
            className="home-button button account"
            onClick={() => {
              handleChange("appleMusic");
            }}
          >
            <svg
              id="appleMusic1"
              className="home-icon002"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M31.995 8.167c0-0.984-0.083-1.964-0.318-2.922-0.422-1.745-1.417-3.078-2.906-4.057-0.766-0.5-1.609-0.807-2.505-0.969-0.688-0.125-1.385-0.182-2.083-0.198-0.052-0.005-0.109-0.016-0.167-0.021h-16.031c-0.203 0.016-0.406 0.026-0.609 0.036-0.995 0.057-1.984 0.161-2.922 0.536-1.781 0.703-3.068 1.932-3.818 3.703-0.26 0.599-0.391 1.234-0.484 1.88-0.078 0.521-0.12 1.047-0.135 1.573 0 0.042-0.010 0.083-0.010 0.125v16.297c0.010 0.188 0.021 0.375 0.031 0.563 0.068 1.089 0.208 2.167 0.667 3.167 0.865 1.891 2.318 3.135 4.313 3.734 0.557 0.172 1.141 0.25 1.724 0.302 0.74 0.073 1.479 0.083 2.219 0.083h14.708c0.698 0 1.396-0.047 2.094-0.135 1.099-0.141 2.13-0.464 3.063-1.078 1.12-0.74 1.964-1.719 2.505-2.943 0.25-0.563 0.391-1.161 0.495-1.766 0.151-0.901 0.182-1.813 0.182-2.724-0.005-5.063 0-10.125-0.005-15.188zM23.432 13.484v7.615c0 0.557-0.078 1.104-0.328 1.609-0.385 0.786-1.010 1.281-1.849 1.521-0.464 0.135-0.943 0.208-1.427 0.229-1.266 0.063-2.365-0.797-2.589-2.047-0.193-1.031 0.302-2.167 1.385-2.698 0.427-0.208 0.891-0.333 1.354-0.427 0.505-0.109 1.010-0.208 1.51-0.323 0.37-0.083 0.609-0.307 0.682-0.688 0.021-0.083 0.026-0.172 0.026-0.255 0-2.422 0-4.844 0-7.26 0-0.083-0.016-0.167-0.036-0.245-0.052-0.203-0.198-0.323-0.406-0.313-0.214 0.010-0.422 0.047-0.63 0.089-1.016 0.198-2.031 0.401-3.042 0.609l-4.932 0.995c-0.021 0.005-0.047 0.016-0.068 0.016-0.37 0.104-0.5 0.271-0.516 0.656-0.005 0.057 0 0.115 0 0.172-0.005 3.469 0 6.938-0.005 10.406 0 0.563-0.063 1.115-0.286 1.635-0.37 0.854-1.026 1.391-1.911 1.646-0.469 0.135-0.948 0.214-1.438 0.229-1.276 0.047-2.339-0.802-2.557-2.057-0.188-1.083 0.307-2.25 1.536-2.771 0.479-0.198 0.974-0.307 1.479-0.411 0.38-0.078 0.766-0.156 1.146-0.234 0.51-0.109 0.776-0.432 0.802-0.953v-0.198c0-3.948 0-7.896 0-11.844 0-0.167 0.021-0.333 0.057-0.495 0.094-0.38 0.365-0.599 0.729-0.688 0.339-0.089 0.688-0.151 1.031-0.224 0.979-0.198 1.953-0.396 2.932-0.589l3.026-0.615c0.896-0.177 1.786-0.359 2.682-0.536 0.292-0.057 0.589-0.12 0.885-0.141 0.411-0.036 0.698 0.224 0.74 0.641 0.010 0.099 0.016 0.198 0.016 0.297 0 2.547 0 5.094 0 7.641z"></path>
            </svg>
          </button>
          <button
            id="shazam"
            className="home-button button account"
            onClick={() => {
              setType("shazam");
              handleClick();
              styleChangeOfBar("youtube");
              styleChangeOfBar("spotify");
              styleChangeOfBar("appleMusic");
              styleChangeOnBar("shazam");
            }}
          >
            <svg
              id="shazam1"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon002"
              viewBox="0 0 50 50"
            >
              <path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M14.23,30.74c-3.51-3.51-3.51-9.24,0-12.73 l7.55-7.56c0.34-0.35,0.8-0.55,1.29-0.58c0.54-0.01,1.04,0.19,1.41,0.58c0.74,0.75,0.71,1.94-0.03,2.67l-7.55,7.55 c-2.06,2.06-2.06,5.34,0,7.4c2.05,2.06,5.33,2.06,7.39,0l3.78-3.77c0.02-0.03,0.03-0.04,0.06-0.06c0.75-0.72,1.94-0.7,2.67,0.06 c0.72,0.75,0.69,1.94-0.06,2.67l-3.78,3.77C23.47,34.24,17.73,34.24,14.23,30.74z M35.77,32l-7.55,7.55 c-0.01,0.02-0.03,0.03-0.06,0.06c-0.74,0.71-1.94,0.69-2.66-0.06c-0.73-0.76-0.7-1.95,0.05-2.68l7.55-7.54 c2.06-2.06,2.06-5.35,0-7.41c-2.05-2.04-5.33-2.04-7.39,0l-3.78,3.79c-0.02,0.01-0.03,0.04-0.06,0.05 c-0.75,0.72-1.94,0.69-2.67-0.05c-0.72-0.76-0.69-1.95,0.06-2.67l3.78-3.78c1.74-1.76,4.06-2.63,6.37-2.63 c2.3,0,4.61,0.87,6.36,2.63C39.28,22.76,39.28,28.5,35.77,32z"></path>
            </svg>
          </button>
        </div>
        <div className="home-account posibili">
          <Link
            to={token ? `/account/date` : `/auth/login`}
            id="account"
            name="account"
            type="button"
            disabled
            autoFocus
            className="home-button03 button account"
          >
            {token !== undefined ? (
              <span
                classname="home-icon006"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  fill: colors?.[userDate?.fill]?.hex,
                }}
                dangerouslySetInnerHTML={{ __html: userDate?.image }}
              />
            ) : (
              <svg viewBox="0 0 1024 1024" className="home-icon006">
                <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
              </svg>
            )}
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixid=Mnw5MTMyMXwxfDF8YWxsfDZ8fHx8fHwyfHwxNjY3MTQwMzQ1&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-image2"
            />
          </Link>
        </div>
      </div>
      <div className="home-view content">
        <section className="home-left-bar">
          <Link
            id="home"
            className="home-button05 navbar button account"
            to="/home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              name="img2"
              className="home-icon014"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              name="img1"
              className="home-icon012"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>
          </Link>
          <Link
            id="treding"
            className="home-button05 navbar button account"
            to="/treding"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              name="img1"
              className="home-icon014"
              viewBox="0 0 16 16"
            >
              <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              name="img2"
              className="home-icon012"
              viewBox="0 0 16 16"
            >
              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
            </svg>
          </Link>
          {token ? (
            <Link
              id="favorite"
              className="home-button06 navbar button account"
              to="/favorite"
            >
              <svg viewBox="0 0 1024 1024" name="img1" className="home-icon016">
                <path d="M512 910l-62-56q-106-96-154-142t-107-114-81-123-22-113q0-98 67-166t167-68q116 0 192 90 76-90 192-90 100 0 167 68t67 166q0 78-52 162t-113 146-199 186z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" name="img2" className="home-icon018">
                <path d="M516 792q96-86 142-130t100-104 75-106 21-90q0-64-43-106t-107-42q-50 0-93 28t-59 72h-80q-16-44-59-72t-93-28q-64 0-107 42t-43 106q0 44 21 90t75 106 100 104 142 130l4 4zM704 128q100 0 167 68t67 166q0 58-22 113t-81 123-107 114-154 142l-62 56-62-54q-138-124-199-186t-113-146-52-162q0-98 67-166t167-68q116 0 192 90 76-90 192-90z"></path>
              </svg>
            </Link>
          ) : null}
          {token ? (
            <Link
              id="playList"
              className="home-button07 navbar button account"
              to="/playList"
            >
              <svg viewBox="0 0 1024 1024" name="img1" className="home-icon022">
                <path d="M918 490l64 64-298 300-194-192 64-64 130 128zM86 682v-84h340v84h-340zM598 256v86h-512v-86h512zM598 426v86h-512v-86h512z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" name="img2" className="home-icon020">
                <path d="M598 598l212 128-212 128v-256zM170 598h342v84h-342v-84zM170 256h512v86h-512v-86zM170 426h512v86h-512v-86z"></path>
              </svg>
            </Link>
          ) : null}
          <Link id="history" className="navbar button account" to="/history">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              name="img2"
              className="home-icon024"
              viewBox="0 0 16 16"
            >
              <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              name="img1"
              className="home-icon026"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
            </svg>
          </Link>
          {token ? (
            <Link
              id="qr"
              className="home-button10 navbar button account"
              to="/qr"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                name="img2"
                className="home-icon034"
                viewBox="0 0 16 16"
              >
                <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
                <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
                <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
                <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
                <path d="M12 9h2V8h-2v1Z" />
              </svg>
              <svg
                viewBox="0 0 804.5714285714286 1024"
                style={{ display: "flex" }}
                name="img2"
                className="home-icon034"
              >
                <path d="M219.429 658.286v73.143h-73.143v-73.143h73.143zM219.429 219.429v73.143h-73.143v-73.143h73.143zM658.286 219.429v73.143h-73.143v-73.143h73.143zM73.143 804h219.429v-218.857h-219.429v218.857zM73.143 365.714h219.429v-219.429h-219.429v219.429zM512 365.714h219.429v-219.429h-219.429v219.429zM365.714 512v365.714h-365.714v-365.714h365.714zM658.286 804.571v73.143h-73.143v-73.143h73.143zM804.571 804.571v73.143h-73.143v-73.143h73.143zM804.571 512v219.429h-219.429v-73.143h-73.143v219.429h-73.143v-365.714h219.429v73.143h73.143v-73.143h73.143zM365.714 73.143v365.714h-365.714v-365.714h365.714zM804.571 73.143v365.714h-365.714v-365.714h365.714z"></path>
              </svg>
            </Link>
          ) : null}
          <Link
            id="send"
            className="home-button11 navbar button account"
            to="/send"
          >
            <svg
              viewBox="0 0 1025.1702857142857 1024"
              name="img1"
              className="home-icon036"
            >
              <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
            </svg>
            <svg
              viewBox="0 0 1024.5851428571427 1024"
              name="img2"
              className="home-icon038"
            >
              <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
            </svg>
          </Link>
        </section>
        <VideoBar
          videos={videos}
          token={token}
          views={views}
          related={related}
          relatedPlayList={relatedPlayList}
          id={id}
          playlist={playlist}
          mood={mood}
          idxx={idxx?.[2]}
          count={count}
          playerRef={playerRef}
          playing={playing}
          muted={muted}
          loop={loop}
          position={position}
          setRelated={setRelated}
          index={index}
          onProgress={handleProgress}
          onDuration={handleDuration}
          currentTime={currentTime}
          next={next}
          previous={last}
          idSp={idSp}
          type={type}
          same12={same12}
        ></VideoBar>
      </div>{" "}
      <MusicBar
        playing={playing}
        playerRef={playerRef}
        muted={muted}
        randome={randome}
        videos={videos}
        loop={loop}
        onMute={handleMute}
        onLoop={handleLoop}
        onPlayStop={handlePlayPause}
        next={handleNext}
        previous={handlePreview}
        onProgress={currentTime}
        onDuration={duration}
        handleSeek={handleSeek}
        name={name}
        onRandome={handleRandome}
        thumbnail={thumbnail}
        url={url}
        idSp={idSp}
        id={id}
        playlist={playlist}
        token={token}
        related={related}
        mood={mood}
        setClick={handleValueChange}
      ></MusicBar>
    </div>
  );
};

export default Video;
