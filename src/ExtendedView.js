import React, { Component } from 'react';
import './ExtendedView.css';

export default class ExtendedView extends Component {
  constructor() {
    super()
    this.state = {
      hover: false
    }
  }

  convertTime = (ms) => {
    var milliseconds = parseInt(ms);
    var hours = Math.floor(milliseconds / 3600000);
    var minutes = Math.floor((milliseconds - (hours * 3600000)) / 60000);
    var seconds = parseInt((milliseconds - (hours * 3600000) - (minutes * 60000)) / 1000);
    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <table className='song-table'>
        <tbody>
            {
              this.props.setlist[1903].map((song, index) => {
                return <tr className='song-table-row' onMouseEnter={(e) => this.setState({hover: true})} onMouseLeave={(e) => this.setState({hover: false})} key={index}>
                          <td className={ this.state.hover ? 'far fa-play-circle' : 'display-mode-none' }></td>
                          <td className={ this.state.hover ? 'display-mode-none' : 'song-table-position' }>{song.position}</td>
                          <td className='song-table-title' onClick={(e) => this.props.updateCurrentSongIndex(index)}>{song.title}</td>
                          <td className='song-table-duration' >{this.convertTime(song.duration)}</td>
                        </tr> 
              })                            
            }
        </tbody>
      </table>
    )
  }
}