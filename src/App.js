import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import Nav from './components/Nav';
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

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ isLoggedIn: true })
    }
    const options = {
      headers: {
        "x-rapidapi-key": "3737c740damsh294914373cea252p10fc24jsnd39fd87ca55c",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    };

    // Get the currencies from the API 
    const fetchCurrencies = async () => {
      const { data } = await axios.get(
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies", options
      );

      this.setState({ currencies: data.Currencies });
    };
    fetchCurrencies();
  }

  //set selected currency for nav
  currencySelect = (currency) => {
    if (currency !== '') this.setState({ currency });
  }

  //updates the state when 
  updateLoggedIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }

  render() {
    return (
      <div className="page-container">
        <Router basename="/">
          <Navbar currencySelect={this.currencySelect} currency={this.state.currency} currencies={this.state.currencies} isLoggedIn={this.state.isLoggedIn} updateLoggedIn={this.updateLoggedIn} />
          <main>
            <div className="pages">
              <Switch>
                <Route path="/login" render={(props) => <Login component={Login} updateLoggedIn={this.updateLoggedIn} />} />
                <Route exact path="/" render={(props) => <Home currency={this.state.currency} currencies={this.state.currencies} />} />
                {/* <Route exact path="/stories" component={Stories} /> */}
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