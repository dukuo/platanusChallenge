require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import BitcoinWS from './bitcoinWS';


class AppComponent extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div>
        <h2>Bitcoin real-time</h2>
        <p>&Uacute;ltimas actualizaciones:</p>
        <BitcoinWS />
      </div>
    );
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;
