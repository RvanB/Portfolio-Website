import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

import LetterRow from './LetterRow';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LetterRow text="Raiden van Bronkhorst"/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Outlet />
      </div>
    );
  }
}


export default App;
