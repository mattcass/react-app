import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
require('./index.scss');

import About from './components/about/about';
import Inbox from './components/inbox/inbox';

const App = React.createClass({
  render() {
    return (
      <div>
        <Link to="/"><h1>App</h1></Link>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})


const Dashboard = React.createClass({
  render() {
    return (
      <div>Welcome to the app!</div>
    )
  }
})

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>

  ), document.getElementById('react'));
