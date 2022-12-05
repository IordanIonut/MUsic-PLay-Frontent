import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'
import Home from './views/home'
import Account from './views/account'
import Login from './views/login'
import PopUp from './views/pop-up'
import Chanel from './views/chanel'

const App = () => {
  return (

    <Router>
      <div>
        <Route component={Home} exact path="/:id" />
        <Route component={Chanel} path="/channel/:id" />
        <Route component={Account} exact path="/account" />
        <Route component={Login} exact path="/login" />
        <Route component={PopUp} exact path="/pop-up" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
