import { createStore } from '@reduxjs/toolkit';
import videoReducer from './reducer';
  


const store = createStore(videoReducer);

export default store;