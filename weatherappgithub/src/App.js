import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';

const API_KEY = "d9123fc30ca7f98eb21355a2059b76c7";

const URL = "https://api.openweathermap.org/data/2.5/weather?q=Chandigarh,india&appid=d9123fc30ca7f98eb21355a2059b76c7&units=metric";

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;
