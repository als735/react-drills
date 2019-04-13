import React, { Component } from "react";
import "./App.css";
import Image from "./Components/Image"; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://images.unsplash.com/photo-1527095655060-4026c4af2b25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}/> 
      </div>
    );
  }
}

export default App;
