import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import ConcertDisplay from './ConcertDisplay';
import AudioPlayer from './AudioPlayer';
import { showData } from './data/data.js';
import { setlistData } from './data/data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSong: null,
      currentSearch: null,
      concertData: showData,
      setlistData: setlistData 
    }
  }

  updateCurrentSong = (searchValue) => {
    this.setState({
      currentSearch: searchValue
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search updateCurrentSong={this.updateCurrentSong}/>
        <ConcertDisplay concertData={this.state.concertData}
                        setlistData={this.state.setlistData}/>
        <AudioPlayer currentSong={this.state.currentSong}/>
      </div>
    );
  }
}

export default App;
