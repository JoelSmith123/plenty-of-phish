import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import ConcertDisplay from './ConcertDisplay';
import AudioPlayer from './AudioPlayer';
import { setlistData, showData } from './data/data.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSong: 0,
      currentSetlist: setlistData[1903],
      currentShow: showData[0],
      currentSearch: null,
      concertData: showData,
      setlistData: setlistData
    }
  }

  goToNextSong = (isSongFinished) => {
    if (isSongFinished === 1) {
      this.setState({
        currentSong: this.state.currentSong + 1
      })
    } else {
      this.setState({
        currentSong: this.state.currentSong - 1
      })
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
        <AudioPlayer currentSong={this.state.currentSong}
                      currentSetlist={this.state.currentSetlist}
                      currentShow={this.state.currentShow}
                      goToNextSong={this.goToNextSong}/>
      </div>
    );
  }
}

export default App;
