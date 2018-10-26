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
      currentSetlist: [{title: '--', mp3: '', duration: 0}],
      currentShow: {venue: {name: "--", location: "--"}},
      currentSearch: null,
      concertData: [],
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


  updateCurrentSetlist = (id) => {
    let show = this.state.concertData.find((concert) => {
      return concert.id === id;
    })
    this.setState({
      currentSetlist: this.state.setlistData[id],
      currentShow: show
    });
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
    // console.log(this.currentSearch)
    console.log(this.state.currentSearch)
  }

  updateCurrentSongIndex = (songIndex) => {
    this.setState({
      currentSong: songIndex
    });
    console.log('Song Index:',  this.state.currentSong)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search updateCurrentDisplay={this.updateCurrentDisplay}/>
        <ConcertDisplay concertData={this.state.concertData}
                        setlistData={this.state.currentSetlist}
                        currentSearch={this.state.currentSearch}
                        updateCurrentSong={this.updateCurrentSong}
                        updateCurrentSongIndex={this.updateCurrentSongIndex}
                        updateCurrentSetlist={this.updateCurrentSetlist}/>
        <AudioPlayer currentSong={this.state.currentSong}
                      currentSetlist={this.state.currentSetlist}
                      currentShow={this.state.currentShow}
                      goToNextSong={this.goToNextSong}/>
      </div>
    )
  }
}

export default App;
