import React, { Component } from 'react';
import './ConcertDisplay.css';
import Concert from './Concert.js';

export default class ConcertDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {concertData, setlistData} = this.props;
    return (
      <main className="concert-display">
      {concertData.map(concert => {
        return <Concert concert={concert}/>
      })}
      </main>
    )
  }
}