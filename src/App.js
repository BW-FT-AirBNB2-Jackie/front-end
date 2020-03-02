import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Auth from './components/Auth';
import Home from './components/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import CreateListing from './components/CreateListing'

function App() {
  return (
    <div className="App">
      <Router>
     <Navigation />
     
     <Route exact path='/auth' component={ Auth } />
     <Route exact path='/' render={props => <Home {...props} />} />
     <Route exact path='/createlisting' render={props => <CreateListing {...props} />} />
     </Router>
    </div>
  );
}

export default App;
