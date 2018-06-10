import React, { Component } from 'react';
import routes from './_config/routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="main">
          {routes}
        </main>
      </div>
    ) 
  }
}

export default App;
