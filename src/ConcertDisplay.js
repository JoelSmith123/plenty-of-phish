import React, { Component } from 'react';
import './ConcertDisplay.css';
import ExtendedView from './ExtendedView';
import Concert from './Concert.js';

export default class ConcertDisplay extends Component {
  constructor() {
    super();
  }

  render() {
    const {concertData, setlistData} = this.props;
    return (
      <main className="concert-display">
        <ExtendedView setlist={this.props.currentSetlist} updateCurrentSongIndex={this.props.updateCurrentSongIndex} />
        {/*this.props.concertData.map(concert => {
          return <Concert concert={concert}/>
        })*/}
      </main>
    )
  }
}