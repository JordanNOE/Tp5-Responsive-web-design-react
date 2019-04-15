import React, { Component } from 'react';
import logo from '../img/logo.png';
import {Container,Row, Col} from 'reactstrap';
class Header extends Component {
  render() {
    return (
      <header>
        <Container>
        <div class="wrapper">
          <Row> 
              <Col xs='2'>
                  <div class="logo-search">
                    <img class="pull-left" src={logo} alt="logo" />
                  </div>
              </Col>
              <Col xs='8'>
                  <form method="POST" action="index.html">
                    <input type="search" required class="search" />
                    <input
                      type="submit"
                      name="submit"
                      value="Rechercher"
                      class="submit"
                    />
                  </form>
                </Col>
        
                <Col xs='2'>
                  <div class="user">
                    <a href="#">Luke Chesser</a>
                  </div>
                </Col>
          </Row>
        </div>
        </Container>
      </header>
    );
  }
}

export default Header;
