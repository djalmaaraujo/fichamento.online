import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from '../Login';
import Logout from '../Logout';
import EntryList from '../EntryList';
import EntryView from '../EntryView';

import './index.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/auth" component={Login}/>
      <Route exact path="/fichamentos" component={EntryList}/>
      <Route exact path="/fichamentos/:id" component={EntryView}/>
      <Route exact path="/logout" component={Logout}/>
    </div>
  </Router>
)

export default App
