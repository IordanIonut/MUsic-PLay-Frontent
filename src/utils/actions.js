export const setUrl = (url) => {
  return { type: "SET_URL", payload: url };
};

export const playVideo = () => ({
  type: 'PLAY'
});

export const pauseVideo = () => ({
  type: 'PAUSE'
});

export const toggleMute = () => {
  return { type: "TOGGLE_MUTE" };
};

export const togglePlay  = () => {
  return { type: "TOGGLE_PLAY" };
};

export const setPosition  = (position) => {
  return { type: "SET_POSITION", payload: position };
};

export const toggleLoop = () => {
  return { type: "TOGGLE_LOOP" };
};

export const toggleRandome = () => {
  return { type: "TOGGLE_RANDOME" };
};

export const setCurrentTime = (currentTime) => {
  return { type: "SET_CURRENT_TIME", payload: currentTime };
};

export const setDuration = (duration) => {
  return { type: "SET_DURATION", payload: duration };
};

export const setQR = (qr) => {
  return { type: "SET_QR", payload: qr };
};

export const setName = (name) => {
  return { type: "SET_NAME", payload: name };
};

export const setThumbnail = (thumbnail) => {
  return { type: "SET_THIMBNAIL", payload: thumbnail };
};

export const setPreview = (preview) => {
  return { type: "SET_PREVIEW", payload: preview };
};

export const setAllVideo = (allVideo) => {
  return { type: "SET_ALL_VIDEO", payload: allVideo };
};

export const setNext = (next) => {
  return { type: "SET_NEXT", payload: next };
};

export const setRad = (rad) => {
  return { type: "SET_RAD", payload: rad };
};

export const setUrlReactPlayer = (urlReactPlayer) => {
  return { type: "SET_URL_REACT_PLAYER", payload: urlReactPlayer };
};