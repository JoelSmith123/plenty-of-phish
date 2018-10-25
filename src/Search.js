import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();
  }

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
        <button className="random-btn">Random Shows</button>
      </form>
    )
  }
}