import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'
import Home from './views/home'
import Account from './views/account'
import Login from './views/login'
import PopUp from './views/pop-up'
import Chanel from './views/chanel'
import Search from './views/search'
import Video from './views/video'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/:id" />
        <Route component={Chanel} path="/channel/:id" />
        <Route component={Video} path="/video/:id" />
        <Route component={Search} path="/search/:searchTerm" />
        <Route component={Account}  path="/account" />
        <Route component={Login}  path="/login" />
        <Route component={PopUp}  path="/pop-up" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
