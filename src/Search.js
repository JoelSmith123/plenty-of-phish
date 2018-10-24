import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      phishingFor: ''
    }
  }

  render() {
    return (
      <form>
        <button className="view-btn">View All</button>
        <input 
          type="text"
          placeholder="Search for a Song, Venue, or Show Date"
          value={this.state.phishingFor} 
          onChange={ (e) => {
            this.setState({
              phishingFor: e.target.value
            })
            e.preventDefault();
            this.props.updateCurrentSong(this.state.phishingFor)
            console.log(this.state.phishingFor) 
          }} 
        />
        <button className="random-btn">Random Shows</button>
      </form>
    )
  }

}