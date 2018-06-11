import React, { Component } from 'react';
import routes from './_config/routes';

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
