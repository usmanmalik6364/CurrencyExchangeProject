import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import { NavBarComponent } from './NavigationComponent/NavBarComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent/>
      </Router>
    </div>
  );
}

export default App;
