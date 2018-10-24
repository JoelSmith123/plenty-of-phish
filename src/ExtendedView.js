import React, { Component } from 'react';
import './ExtendedView.css';

export default class ExtendedView extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <table className='song-table'>
        <tbody>
            {
              this.props.setlist.map((song, index) => {
                console.log(song.position)
                return <tr className='song-table-row' key={index}>
                          <td className='song-table-position'>{song.position}</td>
                          <td className='song-table-title'>{song.title}</td>
                        </tr>
              })                            
            }
        </tbody>
      </table>
    )
  }
}