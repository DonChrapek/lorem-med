require('styles/reset.css');
require('styles/App.css');

// Libraries
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Home from './Home';
import Locations from './Locations';
import Team from './Team';
import Blog from './Blog';
import Appointments from './Appointments';

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id='app-content'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/locations' component={Locations} />
          <Route path='/team' component={Team} />
          <Route path='/blog' component={Blog} />
          <Route path='/appointments' component={Appointments} />
        </div>
      </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
