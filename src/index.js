import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import App from './WebApp/App';
import ChatApp from './Chatter/ChatApp';
import AcmeApp from './Acme/AcmeApp'

const Home = () => {
  return (
    <div>
      <h3> Hello from Home</h3>
    </div>
)
}

ReactDOM.render((
  <Router>
    <div>
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route path="/WebApp" component={ App } />
      <Route path="/ChatApp" component={ ChatApp } />
      <Route path="/AcmeApp" component={ AcmeApp } />
    </div>
  </Router>
), document.getElementById('root'));

// import './styles.css';
// import App from './WebApp/App';
// import MappingAndFiltering from './WebApp/MappingAndFiltering';
// import ChatApp from './Chatter/ChatApp';

// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<MappingAndFiltering allTheData={DATA}/>, document.getElementById('map'));
// ReactDOM.render(<ChatApp/>, document.getElementById('chat'));
