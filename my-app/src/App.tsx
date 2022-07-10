import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import { NavBarComponent } from './NavigationComponent/NavBarComponent';
import { HomeComponent } from './HomeComponent/HomeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent />
        <HomeComponent />
      </Router>
    </div>
  );
}

export default App;
