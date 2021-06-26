import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './components/Nav';
import FlightDeals from './Pages/FlightDeals';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import HottestDestinations from './Pages/HottestDestinations';
import Footer from './components/Footer';
import Blog from './Pages/Blog';
import NotFound from './Pages/NotFound';
import Welcome from './Pages/Welcome';


class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Router basename="/">
          <Nav />
          <main>
            <div className="pages">
              <Switch>
                {/* I need to fix this welcome page to be the first thing, then taken home after login */}
                <Route path="/welcome" component={Welcome} />
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/flight-deals" component={FlightDeals} />
                <Route path="/hottest-destinations" component={HottestDestinations} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </main>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;