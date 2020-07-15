import React from 'react';
// import { Route, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route path='/' />
        <Header />
        <Bio />
        <Projects />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
