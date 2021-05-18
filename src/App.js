import React, { Component } from "react";
import Todolist from "./components/views/Todolist";

class App extends Component {
  state = {
    darkMode: localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode"))
      : true,
  };

  toggleColorMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
    localStorage.setItem("darkMode", !this.state.darkMode);
  };

  render() {
    document.body.style.background = this.state.darkMode
      ? "#161722"
      : "#e4e5f1";
    return (
      <div className={this.state.darkMode ? "App dark" : "App"}>
        <Todolist
          darkMode={this.state.darkMode}
          toggleColorMode={this.toggleColorMode}
        />
      </div>
    );
  }
}

export default App;
