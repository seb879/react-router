import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color:'red' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/notre-histoire" exact activeStyle={
              { color:'red' }
            }>History</NavLink>
          </li>
            </ul>


        <Route path="/" exact strict render={
          () => {
            return ( <h1>Bienvenue sur l'accueil</h1>);
          }
        }/>
        <Route path="/notre-histoire" exact strict render={
          () => {
            return ( <h1>Notre histoire</h1>);
          }
        }/>
        </div>
      </Router>
    );
  }
}

export default App;
