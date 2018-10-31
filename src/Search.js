import React, { Component } from 'react';
import Trie from '@jarushford/autocomplete';
import './styles/main.scss';
import { timingSafeEqual } from 'crypto';


export default class Search extends Component {
  constructor() {
    super();
    this.trie = new Trie();
    this.state = {
      suggestions: []
    }
  }

  componentDidUpdate() {
    if (!this.state.concertVenues && !this.state.concertDates) {
      this.setState({
        concertVenues: this.props.concertVenues,
        concertDates: this.props.concertDates,
      })
    }
    if (!this.state.songs && this.props.songs.length) {
      this.setState({
        songs: this.props.songs,
        trieData: this.trie.populate([].concat(this.state.concertVenues, this.state.concertDates, this.props.songs))
      })
    }
  }
  
  goPhishing = () => {
    let inputValue = document.querySelector('.search-input')
      .value.toLowerCase();
    this.props.updateCurrentDisplay(inputValue);
    this.setState({
      suggestions: this.trie.suggest(inputValue)
    })

    console.log(this.state.suggestions)
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
          list="data-list"
        />
        <datalist id="data-list">
          {this.state.suggestions.map(suggestion => {
            return <option value={suggestion}></option>
          })}
        </datalist>
        <button className="random-btn" 
          onClick={(e) => this.props.updateRandomConcertData(e)}>
        Random Shows</button>
      </form>
    );
  }
}