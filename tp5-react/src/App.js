import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 d-none d-lg-block">
                        <SideMenu />
                    </div>
                    <div class="col-lg-9 col-sm-12">
                    <main>
                      <Artist />
                      <AlbumGrid />
                    </main>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
