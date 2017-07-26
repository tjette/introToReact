import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h3> Hello from Home</h3>
    </div>
)
}

const About = () => {
  return (
    <div>
      <h3> Hello from About</h3>
    </div>
)
}

const Blog = () => {
  return (
    <div>
      <h3> Hello from Blog</h3>
    </div>
)
}

ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li> <Link to="/"> Home </Link></li>
        <li> <Link to="/about"> About </Link></li>
        <li> <Link to="/blog"> Blog</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
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
