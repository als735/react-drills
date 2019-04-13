import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
 

class App extends Component {
  constructor() {
    super(); 

    this.state = {
      dates: ["Jacob", "Cameron","Kenneth", "Brett"]
    }; 
  }
  render() { 
    return (
      <div className="App">{this.state.dates.map((element, index) => {
        return (
          <h2 key={index}>{element}</h2>
        )
      }) 
    } </div>
    )
  }
}

export default App;
