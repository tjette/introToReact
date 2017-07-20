import React from 'react';
import ReactDOM from 'react-dom';
import DATA from './WebApp/DATA'

import './styles.css';
import App from './WebApp/App';
import MappingAndFiltering from './WebApp/MappingAndFiltering';

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<MappingAndFiltering allTheData={DATA}/>, document.getElementById('map'));
