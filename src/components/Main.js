require('normalize.css/normalize.css');
require('styles/App.css');

// Libraries
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Home from './Home';

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id='app-content'>
          <Header />
          <Route path='/' component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
