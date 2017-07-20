import React from 'react';
import ReactDOM from 'react-dom';
import DATA from './DATA'

import './styles.css';
import WebApp from './WebApp';
import MappingAndFiltering from './MappingAndFiltering';

ReactDOM.render(<MappingAndFiltering title={"Maps!"}
allTheData={DATA}

/>, document.getElementById('root'));
