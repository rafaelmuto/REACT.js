import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import OldApp from './containers/OldApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<OldApp />, document.getElementById('root'));

registerServiceWorker();
