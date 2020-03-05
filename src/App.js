import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Auth from './components/Auth';
import Home from './components/Home';
import {BrowserRouter as Router, Route, } from 'react-router-dom'
import CreateListing from './components/CreateListing'
import BrowseListings from './components/BrowseListings';
import Users from './Search/Users'
import Owners from './Search/Owners'

function App() {
  return (
    <div className="App">
      <Router>
     <Navigation />
     
     <Route exact path='/auth' component={ Auth } />
     <Route exact path='/' render={props => <Home {...props} />} />
     <Route exact path='/createlisting' render={props => <CreateListing {...props} />} />
     <Route exact path='/browselistings' render={props => <BrowseListings {...props} />} />
     <Route exact path='/Users' render={props => <Users {...props} />} />
     <Route exact path='/Owners' render={props => <Owners {...props} />} />
     </Router>
    </div>
  );
}

export default App;
