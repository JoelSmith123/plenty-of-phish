import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import ConcertDisplay from './ConcertDisplay';
import AudioPlayer from './AudioPlayer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSong: 0,
      currentSetlist: [{title: 'Farmhouse', mp3: 'https://phish.in/audio/000/032/080/32080.mp3', duration: 459442},
      {title: 'Twist', mp3: 'https://phish.in/audio/000/031/819/31819.mp3', duration: 570984}],
      currentShow: {date: "2017-01-13", venue: {name: "Madison Square Garden", location: "New York, NY"}},
      currentSearch: null,
      concertData: [],
      setlistData: {1903: ['nothing': 'void', 'nothing': 'void', 'nothing': 'void']}
    }
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/phishShows')
      .then(response => response.json()) 
      .then(concertData => this.setState({concertData: concertData.phishShows}))
      .catch(error => console.log(error));
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/setLists')
      .then(response => response.json())
      .then(setListData => this.setState({setlistData: setListData.setLists}))
      .catch(error => console.log(error));
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
    console.log(this.currentSearch)
    // console.log(this.state.currentSearch)
  }

  updateCurrentSongIndex = (songIndex) => {
    this.setState({
      currentSong: songIndex
    });
    console.log(this.state.currentSong)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search updateCurrentSong={this.updateCurrentSong}/>
        <ConcertDisplay concertData={this.state.concertData}
                        currentShow={this.state.currentShow}
                        setlistData={this.state.setlistData}
                        updateCurrentSong={this.updateCurrentSong}
                        updateCurrentSongIndex={this.updateCurrentSongIndex}/>
        <AudioPlayer currentSong={this.state.currentSong}
                      currentSetlist={this.state.currentSetlist}
                      currentShow={this.state.currentShow}
                      goToNextSong={this.goToNextSong}/>
      </div>
    );
  }
}

export default App;
