import React, { Component } from 'react';
import './ConcertDisplay.css';
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
    const {currentSearch} = this.props;
    if (currentSearch === null && this.state.extendedView === false) {
      return (
        <main className="concert-display">
        {this.props.concertData.map((concert, i) => {
          return <Concert concert={concert}
                          goToExtendedView={this.goToExtendedView}
                          key={i}/>
          })}
        </main>
      )
    } else if (this.state.extendedView === true) {
        return (
          <main className="concert-display">
            <ExtendedView setlist={this.props.currentSetlist} updateCurrentSongIndex={this.props.updateCurrentSongIndex} />
          </main>
          )
      } else {
        let searchResults = this.displayVenueSearch();
        if (searchResults.length === 0) {
          return (
            <main className="concert-display">
              <h1>Didn\'t catch anything on that one!</h1>
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


