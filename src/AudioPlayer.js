import React, { Component } from 'react';
import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  constructor() {
    super();
    this.state = {
      dragging: false
    }
  }

  togglePlay = () => {
    let audio = document.querySelector('.audio-clip');
    let playButton = document.querySelector('.play-pause');
    if (audio.paused === true) {
      audio.play();
      playButton.innerHTML = 'Pause';
    } else {
      audio.pause();
      playButton.innerHTML = 'Play';
    }
  }

  updateSeekBar = () => {
    let audio = document.querySelector('.audio-clip');
    let seekBar = document.querySelector('.seek-bar');
    let value = (100 / audio.duration) * audio.currentTime;
    seekBar.value = value;
  }

  updateSongPosition = () => {
    let audio = document.querySelector('.audio-clip');
    let seekBar = document.querySelector('.seek-bar');
    let time = audio.duration * (seekBar.value / 100);
    audio.currentTime = time;
  }

  handleMouseDown = () => {
    let audio = document.querySelector('.audio-clip');
    if (audio.paused === false) {
      audio.pause();
      this.setState({
        dragging: true
      })
    }
  }

  handleMouseUp = () => {
    let audio = document.querySelector('.audio-clip');
    if (this.state.dragging === true) {
      audio.play();
      this.setState({
        dragging: false
      })
    }
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
          <video className="audio-clip" onTimeUpdate={this.updateSeekBar}>
            <source src={this.props.currentSong} type="audio/mpeg"></source>
          </video>
          <div className="audio-controls">
            <button onClick={this.togglePlay} type="button" className="play-pause">Play</button>
            <input onChange={this.updateSongPosition} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} type="range" className="seek-bar" />
          </div>
        </section>
      </footer>
    )
  }
}