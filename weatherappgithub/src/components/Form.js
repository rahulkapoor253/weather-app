import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input  type="text" name="city" placeholder="CITY"/>
          <input type="text" name="country" placeholder="COUNTRY"/>
          <button >Get Weather</button>
        </form>
</div>
    );
  }
}

export default Form;
