import React, { Component } from 'react';
import './main.scss';
import ExtendedView from './ExtendedView';
import Concert from './Concert.js';

export default class ConcertDisplay extends Component {
  constructor() {
    super();
    this.state = {
      extendedView: false
    }
  }
  
  goToExtendedView = (id) => {
    this.setState({
      extendedView: true,
    });
    this.props.updateCurrentSetlist(id);
  }

  displayVenueSearch = () => {
    const { currentSearch } = this.props;
    let filteredShows;
    filteredShows = this.props.concertData.filter(concert => {
      return concert.venue.name.toLowerCase().includes(currentSearch) || concert.date.includes(currentSearch) || concert.venue.location.toLowerCase().includes(currentSearch)
    });
    if (filteredShows.length === 0) {
      filteredShows = this.songSearch(currentSearch);
    }
    return filteredShows;
  }

  songSearch = (currentSearch) => {
    let filteredShows = [];
    this.props.concertData.forEach(concert => {
      this.props.setlistData[concert.id].forEach(song => {
        if (song.title.toLowerCase().includes(currentSearch)) {
          filteredShows.push(concert);
        }
      });
    });
    return filteredShows;
  }

  render() {
    const indices = [];
    for (var i = 0; i < 8; i ++) {
      let num = Math.floor(Math.random() * this.props.concertData.length)
      indices.push(num);
    }
    const {currentSearch} = this.props;
    if (currentSearch === null && this.state.extendedView === false && this.props.concertData.length > 0) {
      return (
        <main className="concert-display">
          {indices.map((concert, i) => {
            return <Concert concert={this.props.concertData[concert]}
                          goToExtendedView={this.goToExtendedView}
                          key={i}/>
          })}
        </main>
      )
    } else if (this.state.extendedView === true) {
        return (
          <main className="concert-display">
            <ExtendedView setlist={this.props.currentSetlist}
                          updateCurrentSongIndex={this.props.updateCurrentSongIndex}
                          currentShow={this.props.currentShow} />
          </main>
          )
      } else {
        let searchResults = this.displayVenueSearch();
        if (searchResults.length === 0) {
          return (
            <main className="concert-display">
              <h1>Didn&apos;t catch anything on that one!</h1>
            </main>
          )
        } else {
            return (
              <main className="concert-display">
              {searchResults.map(concert => {
                return <Concert concert={concert}
                                goToExtendedView={this.goToExtendedView}/>
                })}
              </main>
            )
        }
    }
  }
}


