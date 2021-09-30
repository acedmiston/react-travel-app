import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import FlightDeals from './Pages/FlightDeals';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import HottestDestinations from './Pages/HottestDestinations';
import Footer from './components/Footer';
// import Stories from './Pages/Stories';
import NotFound from './Pages/NotFound';
import axios from 'axios';
import Navbar from './components/Navbar';
import Login from './Pages/Login';

class App extends Component {
  state = {
    currency: 'GBP',
    currencies: '',
    isLoggedIn: false,
  }

  async componentDidMount() {
    console.log(this.state);
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ isLoggedIn: true })
    }
    const results = await axios.get(process.env.REACT_APP_URL + '/currencies');
    this.setState({ currencies: results.data.currencies })
  }

  //set selected currency for nav
  currencySelect = (currency) => {
    if (currency !== '') this.setState({ currency });
  }

  //updates the state when you login/out
  updateLoggedIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }

  render() {
    console.log(this.state)
    return (
      <div className="page-container">
        <Router basename="/">
          <Navbar currencySelect={this.currencySelect} currency={this.state.currency} currencies={this.state.currencies} isLoggedIn={this.state.isLoggedIn} updateLoggedIn={this.updateLoggedIn} />
          <main>
            <div className="pages">
              <Switch>
                <Route path="/login" render={(props) => <Login component={Login} updateLoggedIn={this.updateLoggedIn} />} />
                <Route exact path="/" render={(props) => <Home currency={this.state.currency} currencies={this.state.currencies} />} />
                {/* <Route path="/stories" component={Stories} /> */}
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