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
          <tr>
            {
              Object.keys(this.props.setlist).map((song, index) => {
                console.log(song)
                return <th key={index}>{song.title}</th>
              })                            
            }
          </tr>
        </tbody>
      </table>
    )
  }
}