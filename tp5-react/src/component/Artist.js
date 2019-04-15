import React, { Component } from 'react';
import artist from '../img/artist.png';
import fbLogo from '../img/icon/fb.png';
import twitterLogo from '../img/icon/twitter.png';
import {Container,Row, Col} from 'reactstrap';

export default class Artist extends Component {
  render() {
    return (
      <header>
        <div class="name-photo">
          <aside>
            <img src={artist} alt="artist" />
          </aside>
          <div class="name">
            <h1>Luke Chesser</h1>
            <p>
              Montreal, Quebec, Canada{' '}
              <a href="https://www.facebook.com/" target="_blank">
                <img class="share" src={fbLogo} alt="facebook" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img class="share" src={twitterLogo} alt="twitter" />
              </a>
            </p>
          </div>
        </div>
        <Container>
            <div class="stats-links">
                <Row>
                    <Col md="9" sm="12">
                      <section class="stats">
                        <span>2 Playlists</span>
                        <span>4 Reviews</span>
                        <span>6 Followers</span>
                        <span>13 Following</span>
                      </section>
                    </Col>
                    <Col md="3" sm="12">
                      <div class="links">
                        <div>
                          <a href="#">Collection</a>
                          <a href="#">History</a>
                        </div>
                      </div>
                    </Col>
                </Row>
            </div>
        </Container>
      </header>
    );
  }
}
