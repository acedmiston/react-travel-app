import React, { Component } from 'react';
import axios from 'axios';
import Input from './components/Input';

class App extends Component {
  state = {
    originCountry: { Places: [] },
    destinationCountry: { Places: [] }
  }
  render() {
    console.log(this.state.originCountry);
    return (
      <>
        <Input type={'originCountry'} Places={this.state.originCountry.Places} onInput={this.onInput} />
        <Input type={'destinationCountry'} Places={this.state.destinationCountry.Places} onInput={this.onInput} />
      </>
    );
  }

  onInput = (e) => {
    const options = {
      method: 'GET',
      url:
        'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
      params: { query: e.target.value },
      headers: {
        'x-rapidapi-key': '3737c740damsh294914373cea252p10fc24jsnd39fd87ca55c',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    };
    this.getAPIData(e.target.id, options);
  }

  async getAPIData(id, options) {
    const result = await axios.request(options);
    this.setState({ [id]: result.data });
    console.log(this.state);
  }
}


export default App;