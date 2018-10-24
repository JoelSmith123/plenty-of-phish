import React, { Component } from 'react';
import './ExtendedView.css';

export default class ExtendedView extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <table>
        <tbody>
            {
              this.props.setlist[1903].map((song, index) => {
                console.log(song.position)
                return <tr className='song-table-row' key={index}>
                          <td>{song.position}</td>
                          <td>{song.title}</td>
                        </tr>
              })                            
            }
        </tbody>
      </table>
    )
  }
}