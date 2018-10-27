import React, { Component } from 'react';
import './main.scss';

export default class AudioPlayer extends Component {
  constructor() {
    super();
    this.state = {
      dragging: false,
      mp3: ''
    }
  }

  componentDidMount() {
    const seekBar = document.querySelector('.seek-bar');
    const volumeControl = document.querySelector('.volume-control');
    seekBar.value = 0;
    volumeControl.value = 100;
  }

  componentDidUpdate() {
    const audio = document.querySelector('.audio-clip');
    const seekBar = document.querySelector('.seek-bar');
    const playButton = document.querySelector('.play-pause');
    if (this.props.currentSetlist[this.props.currentSong].mp3 !== '' && 
    this.props.currentSetlist[this.props.currentSong].mp3 !== this.state.mp3) {
      this.setState({
        mp3: this.props.currentSetlist[this.props.currentSong].mp3
      });
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
      audio.currentTime = 0;
      seekBar.value = 0;
      audio.load();
      audio.play();
    }
  }

  togglePlay = () => {
    const audio = document.querySelector('.audio-clip');
    const playButton = document.querySelector('.play-pause');
    if (audio.paused === true && this.props.currentSetlist[this.props.currentSong].mp3 !== '') {
      audio.play();
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playButton.innerHTML = '<i class="fas fa-play">';
    }
  }

  updateSeekBar = (e) => {
    const audio = document.querySelector('.audio-clip');
    const seekBar = e.target;
    const playButton = document.querySelector('.play-pause');
    let value = (100 / audio.duration) * audio.currentTime;
    if (value === 100 && this.props.currentSong < this.props.currentSetlist.length - 1) {
      this.props.goToNextSong(1);
      this.checkForNewSong();
    } else if (value === 100 && this.props.currentSong ===    this.props.currentSetlist.length - 1) {
      playButton.innerHTML = '<i class="fas fa-play"></i>'
    } else {
      seekBar.value = value;
    }
    document.querySelector('.current-time').innerHTML = this.convertTime(audio.currentTime * 1000);
  }

  updateSongPosition = (e) => {
    const audio = document.querySelector('.audio-clip');
    const seekBar = e.target;
    if (audio.readyState > 2) {
      let time = audio.duration * (seekBar.value / 100);
      audio.currentTime = time;
    }
  }

  handleMouseDown = () => {
    const audio = document.querySelector('.audio-clip');
    const seekBar = document.querySelector('.seek-bar');
    seekBar.max = 100;
    if (audio.paused === false) {
      audio.pause();
      this.setState({
        dragging: true
      })
    }
  }

  handleMouseUp = () => {
    const audio = document.querySelector('.audio-clip');
    if (this.state.dragging === true) {
      audio.play();
      this.setState({
        dragging: false
      })
    }
  }

  convertTime = (ms) => {
    let milliseconds = parseInt(ms);
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
    let seconds = parseInt((milliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);
    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
  }

  checkForNewSong = () => {
    const audio = document.querySelector('.audio-clip');
    const playButton = document.querySelector('.play-pause');
    if (this.props.currentSetlist[this.props.currentSong].mp3 !== '' && 
      this.props.currentSetlist[this.props.currentSong].mp3 !== this.state.mp3){
        this.setState({
          mp3: this.props.currentSetlist[this.props.currentSong].mp3
        });
        audio.load();
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
  }

  changeSong(dir) {
    const audio = document.querySelector('.audio-clip');
    const playButton = document.querySelector('.play-pause');
    const seekBar = document.querySelector('.seek-bar');
    seekBar.max = 0;
    audio.pause();
    if (dir === 1 && this.props.currentSong < this.props.currentSetlist.length - 1) {
      this.props.goToNextSong(1);
      this.checkForNewSong();
    } else if (dir === -1 && this.props.currentSong > 0) {
      this.props.goToNextSong(-1);
      this.checkForNewSong();
    } else {
      seekBar.value = 0;
      audio.currentTime = 0;
      playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  }

  changeVolume = () => {
    const audio = document.querySelector('.audio-clip');
    const volumeControl = document.querySelector('.volume-control');
    let volume = volumeControl.value / 100;
    audio.volume = volume;
  }

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
            <p className="current-time">0:00</p>
            <div>
              <i className="fas fa-step-backward" onClick={() => this.changeSong(-1)}></i>
              <button onClick={this.togglePlay} type="button" className="play-pause"><i className="fas fa-play"></i></button>
              <i className="fas fa-step-forward" onClick={() => this.changeSong(1)}></i>
            </div>
            <input onChange={this.updateSongPosition} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} type="range" className="seek-bar"  min="0" max="0"/>
            <p className="song-length">{this.convertTime(this.props.currentSetlist[this.props.currentSong].duration)}</p>
          </div>
          <input type="range" className="volume-control" onChange={this.changeVolume} min="0" max="100" />
        </section>
      </footer>
    )
  }
}
