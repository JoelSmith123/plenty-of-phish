import React, { Component } from 'react';
import './ExtendedView.css';

export default class ExtendedView extends Component {
  constructor() {
    super()
    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <table className='song-table'>
        <tbody>
            {
              this.props.setlist.map((song, index) => {
                return <tr className='song-table-row' onMouseEnter={(e) => this.setState({hover: true})} onMouseLeave={(e) => this.setState({hover: false})} key={index}>
                          <td className={ this.state.hover ? 'far fa-play-circle' : 'display-mode-none' }></td>
                          <td className={ this.state.hover ? 'display-mode-none' : 'song-table-position' }>{song.position}</td>
                          <td className='song-table-title' onClick={(e) => this.props.updateCurrentSong(song)}>{song.title}</td>
                        </tr>
              })                            
            }
        </tbody>
      </table>
    )
  }
}