import React, { Component } from 'react';
import {Col} from 'reactstrap'
export default class Album extends Component {
  render() {
    return (
          <article class=" col-md-2 col-sm-3 col-6">
            <figure>
              <img src={this.props.image} alt="album" />
              <figcaption>{this.props.nom}</figcaption>
            </figure>
            <div class="artist">{this.props.artist}</div>
            <div class="count">{this.props.song} songs</div>
          </article>
        
    );
  }
}
