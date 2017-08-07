import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import Post from './Post'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
