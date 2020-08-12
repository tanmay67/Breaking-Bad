import React, { Fragment } from 'react';
import './App.css';
import BadState from './context/bad/BadState';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Info from './components/Info';

const App = () => {
  return (
    <Router>
      <BadState>
        <Fragment>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:id" component={Info} />
            </Switch>
          </div>
        </Fragment>
      </BadState>
    </Router>
  );
};

export default App;
