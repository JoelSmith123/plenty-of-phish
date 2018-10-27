import React, { Component } from 'react';
import './main.scss';

export default class Search extends Component {
  
  goPhishing = () => {
    this.props.updateCurrentDisplay(document.querySelector('.search-input').value.toLowerCase())
  }

  render() {
    return (
      <form>
        <button className="view-btn">View All</button>
        <input
          className="search-input" 
          type="text"
          placeholder="Search for a Song, Venue, or Show Date"
          onChange={this.goPhishing} 
        />
        <button className="random-btn" onClick={ e => this.props.updateRandomConcertData(e)}>Random Shows</button>
      </form>
    )
  }
}