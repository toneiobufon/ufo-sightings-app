import Navigation from "./Navigation"
import Memes from "./pages/Memes.js"
import Home from "./pages/Home"
import About from "./pages/About"
import Sightings from "./pages/Sightings"
import Shows from "./pages/Shows"
import './App.css';
import { Route, Routes } from "react-router-dom"
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);*/


function App() {
  return (
    <>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sightings" element={<Sightings />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/memes" element={<Memes />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
/*
import React from 'react';

import { Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Navbar outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />

        <div id="page-wrap">
          <Routes>
            <Route exact path="/" component={<Home />} />
            <Route path="/about" component={<About />} />
            <Route path="/sightings" component={<Sightings />} />
            <Route path="/shows" component={<Shows />} />
            <Route path="/memes" component={<Memes />} />
          </Routes>
        </div>
      </div>
  </Router>
  )
}

export default App;*/

