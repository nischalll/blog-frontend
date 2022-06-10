import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Khudai suru kardo koi blog ka ui dekhk bhadia home page banao ek mai
          backend deta fir
        </h1>
        <Home/>
      </div>
    );
  }
}

export default App;
