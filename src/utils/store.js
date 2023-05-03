import { createStore } from '@reduxjs/toolkit';
import videoReducer from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, videoReducer);
  
  const store = createStore(persistedReducer);
  
  const persistor = persistStore(store);
  
  export { store, persistor };