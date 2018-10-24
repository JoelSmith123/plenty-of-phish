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
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playButton.innerHTML = '<i class="fas fa-play">';
    }
  }

  updateSeekBar = () => {
    let audio = document.querySelector('.audio-clip');
    let seekBar = document.querySelector('.seek-bar');
    let value = (100 / audio.duration) * audio.currentTime;
    if (value === 100) {
      this.props.goToNextSong(true);
      audio.load();
      audio.play();
    }
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

  // convertTime = (ms) => {
  //   var milliseconds = parseInt(ms);
  //   var hours = Math.floor(milliseconds / 3600000);
  //   var minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
  //   var seconds = parseInt((milliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);
  //   return `${minutes} : ${seconds}`
  // }

  render() {
    return (
      <footer className='audio-player'>
        <section className="current-song-display">
          <h3 className="audio-player-song">{this.props.currentSetlist[this.props.currentSong].title}</h3>
          <p className="audio-player-venue">{this.props.currentShow.venue.name}</p>
          <p className="audio-player-location">{this.props.currentShow.venue.location}</p>
        </section>
        <section className="audio-player-controls">
          <video className="audio-clip" onTimeUpdate={this.updateSeekBar}>
            <source src={this.props.currentSetlist[this.props.currentSong].mp3} type="audio/mpeg"></source>
          </video>
          <div className="audio-controls">
            <button onClick={this.togglePlay} type="button" className="play-pause"><i class="fas fa-play"></i></button>
            <input onChange={this.updateSongPosition} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} type="range" className="seek-bar" />
            {/* <p>{this.props.currentSong.duration}</p> */}
          </div>
        </section>
      </footer>
    )
  }
}