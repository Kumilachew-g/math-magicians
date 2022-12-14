import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Calculator from './components/calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

const App = () => (
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Math-Magician">
          <Home />
        </Route>
        <Route path="/Math-Magician/calculator">
          <Calculator />
        </Route>
        <Route path="/Math-Magician/quote">
          <Quote />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

export default App;
