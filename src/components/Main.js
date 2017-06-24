require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
