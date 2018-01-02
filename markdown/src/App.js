import React, { Component } from "react";
import TextArea from "./components/TextArea";
import marked from "./components/marked";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextArea component={marked} />
      </div>
    );
  }
}

export default App;
