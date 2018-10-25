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
      currentSetlist: [{title: 'Farmhouse', mp3: 'https://phish.in/audio/000/032/080/32080.mp3', duration: 459442}],
      currentShow: {venue: {name: "Madison Square Garden", location: "New York, NY"}},
      currentSearch: null,
      concertData: [],
      setlistData: {}
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

  updateCurrentDisplay = (searchValue) => {
    this.setState({
      currentSearch: searchValue
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search updateCurrentDisplay={this.updateCurrentDisplay}/>
        <ConcertDisplay concertData={this.state.concertData}
                        setlistData={this.state.setlistData}
                        currentSearch={this.state.currentSearch}/>
        <AudioPlayer currentSong={this.state.currentSong}
                      currentSetlist={this.state.currentSetlist}
                      currentShow={this.state.currentShow}
                      goToNextSong={this.goToNextSong}/>
      </div>
    )
  }
}

export default App;
