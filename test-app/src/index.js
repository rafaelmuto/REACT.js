import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
// import OldApp from './Containers/OldApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<OldApp />, document.getElementById('root'));

registerServiceWorker();
