import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <div className="siteMenu">
            <nav>
              <Link to='/'><div className="menuOption">Home</div></Link>
              <Link to='/library'><div className="menuOption">Albums</div></Link>
            </nav>
          </div>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/Album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
