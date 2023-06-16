import React, { useState, useEffect, lazy, Suspense } from "react";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css'
const Home = React.lazy(() => import( './views/home'))
const Account = React.lazy(() => import( './views/account'))
const Login = React.lazy(() => import( './views/login'))
const PopUp = React.lazy(() => import( './views/pop-up'))
const Chanel = React.lazy(() => import( './views/chanel'))
const Search = React.lazy(() => import( './views/search'))
const Video = React.lazy(() => import( './views/video'))
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './utils/store';
import Loading from "./componentsHome/Loading";
import PlayerSong from "./componentsHome/PlayerSong";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div>
              <PlayerSong />
              <Switch>
                <Route component={Home} exact path="/:id"/>
                <Route component={Chanel} path="/channel/:id" />
                <Route component={Video} path="/video/:id" />
                <Route component={Search} path="/search/:searchTerm" />
                <Route component={Account} path="/account/:id" />
                <Route component={Login} path="/auth/:id" />
                <Route component={PopUp} path="/pop-up" />
              </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
      </GoogleOAuthProvider>
    </Suspense>
    );

}

ReactDOM.render(<App />, document.getElementById('app'))
