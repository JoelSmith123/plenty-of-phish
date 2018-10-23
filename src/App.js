import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import ConcertDisplay from './ConcertDisplay';
import AudioPlayer from './AudioPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <ConcertDisplay />
        <AudioPlayer />
      </div>
    );
  }
}

export default App;
