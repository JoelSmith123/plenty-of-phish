import React, { Component } from 'react';
import './styles/main.scss';
import ExtendedView from './ExtendedView';
import Concert from './Concert.js';

export default class ConcertDisplay extends Component {
  constructor() {
    super();
    this.state = {
      extendedView: false
    }
  }


  
  returnFromExtendedView = () => {
    this.setState({
      extendedView: false
    })
  }

  goToExtendedView = (id) => {
    this.setState({
      extendedView: true
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
    if (this.props.showAllConcerts === true && currentSearch === '') {
      return (
        <main className="concert-display">
          <div className="concert-grid">
            {this.props.concertData.map((concert, i) => {
              return <Concert concert={concert}
                            goToExtendedView={this.goToExtendedView}
                            key={i}/>
            })}
          </div>  
        </main>
      )
    } else if (currentSearch === '' && this.state.extendedView === false && this.props.concertData.length > 0) {
      return (
        <main className="concert-display">
          <div className="concert-grid">
            {indices.map((concert, i) => {
              return <Concert concert={this.props.concertData[concert]}
                            goToExtendedView={this.goToExtendedView}
                            key={i}/>
            })}
          </div>
        </main>
      )
    } else if (this.state.extendedView === true) {
        return (
          <main className="concert-display">
            <ExtendedView setlist={this.props.currentSetlist}
                          updateCurrentSongIndex={this.props.updateCurrentSongIndex}
                          currentShow={this.props.currentShow}
                          returnFromExtendedView={this.returnFromExtendedView} />
          </main>
          )
      } else {
        let searchResults = this.displayVenueSearch();
        if (searchResults.length === 0 && this.props.concertData.length > 0) {
          return (
            <main className="error-display">
              <h1>Didn&apos;t catch anything on that one!</h1>
            </main>
          )
        } else {
            return (
              <main className="concert-display">
                <div className="concert-grid">
                  {searchResults.map(concert => {
                  return <Concert concert={concert}
                                  goToExtendedView={this.goToExtendedView}/>
                  })}
                </div>
              </main>
            )
        }
    }
  }
}


