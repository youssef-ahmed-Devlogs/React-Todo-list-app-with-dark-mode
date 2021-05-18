import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";

class Form extends Component {
  state = {
    newTitle: "",
  };

  handelChange = (e) => {
    this.setState({
      newTitle: e.target.value,
    });
  };

  handlerAdd = (e) => {
    e.preventDefault();

    if (this.state.newTitle.trim() !== "") {
      this.props.addTodo(this.state.newTitle);
    }

    this.setState({
      newTitle: "",
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handlerAdd}>
        <div className="form-icon" onClick={this.props.selectAllTodos}>
          <FeatherIcon icon="circle" />
        </div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={this.state.newTitle}
          onChange={this.handelChange}
        />
      </form>
    );
  }
}

export default Form;
