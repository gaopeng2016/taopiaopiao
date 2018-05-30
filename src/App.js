import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/home';
import User from './routes/user';
import Detail from './routes/detail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/user' component={User}/>
          <Route exact path='/detail' component={Detail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
