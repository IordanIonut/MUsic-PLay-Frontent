import { SET_URL, PLAY, PAUSE, TOGGLE_MUTE, TOGGLE_LOOP, SET_PLAYED, SET_LOADED, SET_DURATION, TOGGLE_DISABLE_BUTTON, TOGGLE_ENABLE_BUTTON, 
    SET_ARTIST, SET_NAME, SET_THIMBNAIL } from './actions';

const initialState = {
  url: "",
  urlReactPlayer: "",
  playing: true,
  muted: false,
  loop: false,
  randome: false,
  played: 0,
  currentTime: 0,
  duration: 0,
  play: false,
  qr: "",
  position: 0,
  name: "",
  thumbnail: "",
  previous: [],
  allVideo: [],
  next: "",
  rad: [],
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_URL":
      return { ...state, url: action.payload };
    case "SET_URL_REACT_PLAYER":
        return { ...state, urlReactPlayer: action.payload };
    case 'PLAY':
      return { ...state, playing: true}
    case 'PAUSE':
      return { ...state, playing: false }
    case "TOGGLE_MUTE":
      return { ...state, muted: !state.muted };
    case "TOGGLE_LOOP":
      return { ...state, loop: !state.loop };
    case "TOGGLE_RANDOME":
      return { ...state, randome: !state.randome };
    case "SET_PLAYED":
      return { ...state, played: action.payload };
    case "SET_CURRENT_TIME":
      return { ...state, currentTime: action.payload };
    case "SET_DURATION":
      return { ...state, duration: action.payload };
    case "SET_POSITION":
      return { ...state, position: action.payload };
    case "TOGGLE_PLAY":
      return { ...state, play: !state.play };
    case "SET_QR":
      return { ...state, qr: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_THIMBNAIL":
      return { ...state, thumbnail: action.payload };
    case "SET_PREVIEW":
      return { ...state, previous: [...state.previous, action.payload]};
    case "SET_ALL_VIDEO":
      return { ...state, allVideo: [...state.allVideo, action.payload]};
    case "SET_NEXT":
      return { ...state, next: action.payload };
    case "SET_RAD": 
      return { ...state, rad: [...state.rad, action.payload]};
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default videoReducer;
