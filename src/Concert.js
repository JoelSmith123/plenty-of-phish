import React, { Component } from 'react';
import './styles/main.scss';

export default class Concert extends Component {
  
  render() {
    return (
      <article className="concert" key={this.props.concert.id} 
        onClick={() => this.props.goToExtendedView(this.props.concert.id)}>
        <i className="far fa-play-circle"></i>
        <img className="concert-image" src={this.props.concert.venue.img}
          alt="image of concert venue"/>
        <div className="concert-text-display">
          <p className="concert-date">{this.props.concert.date}</p>
          <p className="concert-venue">{this.props.concert.venue.name}</p>
          <p className="concert-location">{this.props.concert.venue.location}
          </p>
        </div>
      </article>
    );
  }
}