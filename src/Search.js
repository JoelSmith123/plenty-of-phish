import React, { Component } from 'react';
import './styles/main.scss';

export default class Search extends Component {
  
  goPhishing = () => {
    this.props.updateCurrentDisplay(document.querySelector('.search-input')
      .value.toLowerCase());
  }

  render() {
    return (
      <form>
        <button className="view-btn" 
          onClick={e => this.props.toggleShowAllConcerts(true, e)}>
        View All</button>
        <input
          className="search-input" 
          type="text"
          placeholder="Search for a Song, Venue, or Show Date"
          onChange={this.goPhishing} 
          autoFocus
        />
        <button className="random-btn" 
          onClick={(e) => this.props.updateRandomConcertData(e)}>
        Random Shows</button>
      </form>
    );
  }
}