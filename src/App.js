import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Nav from './components/Nav';
import FlightDeals from './Pages/FlightDeals';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import HottestDestinations from './Pages/HottestDestinations';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/flight-deals" component={FlightDeals} />
              <Route path="/hottest-destinations" component={HottestDestinations} />
            </Switch>
            <Redirect to="/" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;