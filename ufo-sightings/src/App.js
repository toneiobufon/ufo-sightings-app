import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Sightings from './pages/Sightings';
import Shows from './pages/Shows';
import Memes from './pages/Memes';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Sightings' component={Sightings} />
        <Route path='/Shows' component={Shows} />
        <Route path='/Memes' component={Memes} />
      </Routes>
    </Router>
  );
}
  
export default App;