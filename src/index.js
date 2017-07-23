import React from 'react';
import ReactDOM from 'react-dom';
import DATA from './WebApp/DATA'
import data from './Chatter/DATA';

import './styles.css';
import App from './WebApp/App';
import MappingAndFiltering from './WebApp/MappingAndFiltering';
import ChatApp from './Chatter/ChatApp';

// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<MappingAndFiltering allTheData={DATA}/>, document.getElementById('map'));
ReactDOM.render(<ChatApp data={data}/>, document.getElementById('chat'));
