import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <button>View All</button>
        <input type="text" placeholder="Search for a Song, Venue, or Show Date" />
        <button>Random Shows</button>
      </form>
    )
  }

}