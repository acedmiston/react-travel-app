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
// import Blog from './Pages/Blog';
import NotFound from './Pages/NotFound';
import axios from 'axios';


class App extends Component {
  state = {
    currency: 'GBP',
    locales: [],
    selectedLocale: 'en-GB'
  }

  componentDidMount() {
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
    // //Grab all country options from the API
    // const fetchCountries = async () => {
    //   const { data } = await axios.get(
    //     "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-GB", options
    //   );
    //   //set the countries
    //   this.setState({ locales: data.Countries })
    // };
    //Run functions
    fetchCurrencies();
    // fetchCountries();
  }

  //set selected currency for nav
  currencySelect = (currency) => {
    if (currency !== '') this.setState({ currency });
  }

  // set selected state for nav
  setSelectedLocale = (selectedLocale) => {
    this.setState({ selectedLocale });
  }

  render() {
    return (
      <div className="page-container">
        <Router basename="/">
          <Nav currencySelect={this.currencySelect} currency={this.state.currency} currencies={this.state.currencies} locales={this.state.locales} selectedLocale={this.state.selectedLocale} setSelectedLocale={this.setSelectedLocale} />
          <main>
            <div className="pages">
              <Switch>
                <Route exact path="/" render={(props) => <Home currency={this.state.currency} currencies={this.state.currencies} selectedLocale={this.state.selectedLocale} />} />
                {/* <Route exact path="/blog" component={Blog} /> */}
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