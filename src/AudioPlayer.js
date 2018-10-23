import React, { Component } from 'react';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className='audio-player'>
        <section className="current-song-display">
          <h3 className="audio-player-song">Song Name</h3>
          <p className="audio-player-venue">Venue</p>
          <p className="audio-player-location">Location</p>
        </section>
        <section className="audio-player-controls">
          <video>
            <source src="https://phish.in/audio/000/031/827/31827.mp3" type="audio/mpeg"></source>
          </video>
          <div className="audio-controls">
            <button type="button" className="play-pause">Play</button>
            <input type="range" className="seek-bar" value="0" />
          </div>
        </section>
      </footer>
    )
  }
}