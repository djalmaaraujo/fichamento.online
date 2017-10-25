import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
import Login from '../Login';
import Logout from '../Logout';
import EntryList from '../EntryList';
import EntryView from '../EntryView';
import EntryNew from '../EntryNew';

const NoMatch = () => (null);

export default () => (
  <div className="container">
    <Route exact path="/" component={Login}/>
    <Route path="/auth" component={Login}/>
    <Switch>
      <Route exact path="/fichamentos" component={EntryList}/>
      <Route path="/fichamentos/new" component={EntryNew}/>
      <Route path="/fichamentos/:id" component={EntryView}/>
      <Route component={NoMatch}/>
    </Switch>
    <Route path="/logout" component={Logout}/>
  </div>
)
