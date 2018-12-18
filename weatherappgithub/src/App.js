import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "d9123fc30ca7f98eb21355a2059b76c7";

//const URL = "https://api.openweathermap.org/data/2.5/weather?q=Chandigarh,india&appid=d9123fc30ca7f98eb21355a2059b76c7&units=metric";


class App extends Component {

constructor(props) {
super(props);

this.state = {
temperature : '',
humidity : '',
description : '',
country : '',
city : '',
error : ''
}

}

  //we will make an async call;
getWeather = async (event) => {

event.preventDefault();

//fetch name of the input data with event.target.elements.name.param.value;
console.log(event.target.elements);
//console.log(event.target.elements.name);
const city = event.target.elements.city.value;
const country = event.target.elements.country.value;

const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

//we will convert the response;
const data = await api.json();

//check for validations;
if(city && country) {
  console.log(data);

  //we will set states;
  this.setState({
    temperature : data.main.temp,
    humidity : data.main.humidity,
    description : data.weather[0].description,
    country : data.sys.country,
    city : data.name,
  error : ''
  })
}
else {
  //we will set states back to init and set error val;
  this.setState({
    temperature : '',
    humidity : '',
    description : '',
    country : '',
    city : '',
  error : "Enter country and city fields."
  })
}



}

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather}/>
        <Weather temperature={this.state.temperature}
        country={this.state.country}
        city={this.state.city}
        humidity={this.state.humidity}
        error={this.state.error}
        description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
