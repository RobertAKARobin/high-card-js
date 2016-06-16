// Load styles using style-loader.
// require('./scss/main.scss');

// Load React.
import React    from 'react';
import ReactDOM from 'react-dom';

// Load App.
import App from './components/App';

// Bootstrap the app.
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
