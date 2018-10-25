import React, { Component } from 'react';
import './ConcertDisplay.css';
import ExtendedView from './ExtendedView';
import Concert from './Concert.js';

export default class ConcertDisplay extends Component {
  constructor() {
    super();
  }
  
  render() {
    const {concertData, setlistData, currentSearch} = this.props;
    if(currentSearch === null) {
      return (
        <main className="concert-display">
//         <ExtendedView setlist={this.props.setlistData} updateCurrentSongIndex={this.props.updateCurrentSongIndex} />
        {this.props.concertData.map(concert => {
          return <Concert concert={concert}/>
          })}
        </main>
      )
    } else {
      return (
        <main className="concert-display">
        {this.props.concertData.filter(concert => {
          return concert.venue.name.toLowerCase().includes(currentSearch) || concert.date.includes(currentSearch) || concert.venue.location.toLowerCase().includes(currentSearch)
          }).map(concert => {
          return <Concert concert={concert}/>
          })}
        </main>
      )
    }
  }
}


