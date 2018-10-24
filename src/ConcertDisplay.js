import React, { Component } from 'react';
import './ConcertDisplay.css';
import ExtendedView from './ExtendedView';

export default class ConcertDisplay extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main className="concert-display">
        <ExtendedView setlist={this.props.setlistData} updateCurrentSong={this.props.updateCurrentSong} />
      </main>
    )
  }
}