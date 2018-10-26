import React, { Component } from 'react';
import './Concert.css';

export default class Concert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="concert" key={this.props.concert.id} >
        <img className="concert-image" src={this.props.concert.venue.img} alt="image of concert venue"/>
        <p className="concert-date">{this.props.concert.date}</p>
        <p className="concert-venue">{this.props.concert.venue.name}</p>
        <p className="concert-location">{this.props.concert.venue.location}</p>
        <button className="concert-button" type='submit' onClick={() => this.props.goToExtendedView(this.props.concert.id)}>Select Show!</button>
      </article>
    )
  }
}