import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';

const API_KEY = "d9123fc30ca7f98eb21355a2059b76c7";

//const URL = "https://api.openweathermap.org/data/2.5/weather?q=Chandigarh,india&appid=d9123fc30ca7f98eb21355a2059b76c7&units=metric";


class App extends Component {

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

console.log(data);

}

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather}/>
      </div>
    );
  }
}

export default App;
