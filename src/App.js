import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dancers from './components/dancers'
import Actors from './components/actors';
import Musicians from './components/musicians'
import Genres from './components/genres'
import Users from './components/users'
import Broadway from './components/broadway';
import Home from '../src/pages/Home';
import Profile from './pages/Profile';
import NoMatch from "../src/pages/NoMatch";


function App() {
  return (
    
    <div>
    <Dancers/>
    <Musicians/>
    <Actors/>
    <Genres/>
    <Users/>
    <Broadway/>
   
    </div>
  );
}

export default App;
