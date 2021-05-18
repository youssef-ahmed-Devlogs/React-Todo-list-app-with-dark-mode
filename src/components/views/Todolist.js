import React, { Component } from "react";
import Header from "../todoApp/Header";
import Todos from "../todoApp/Todos";
import Form from "../todoApp/Form";

class Todolist extends Component {
  state = {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [
          { id: 1, title: "Learn new skills 1 hour", done: false },
          { id: 2, title: "Complete my home work", done: true },
        ],
    cloneTodos: [],
    mode: "all",
    selectAll: false,
  };

  componentDidMount = () => {
    this.setState({
      cloneTodos: [...this.state.todos],
    });
  };

  setTodos = (todos) => {
    this.setState({
      todos,
    });
  };

  setLocalTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  setCloneTodos = (cloneTodos) => {
    this.setState({
      cloneTodos,
    });
  };

  setMode = (mode) => {
    this.setState({
      mode,
    });
  };

  handelDelete = (id) => {
    const todos = [...this.state.cloneTodos];
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setCloneTodos(newTodos);
    this.setTodos(newTodos);
    this.setLocalTodos(newTodos);
  };

  handelComplete = (id) => {
    const todos = [...this.state.todos];
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });
    this.setCloneTodos(newTodos);
    this.setLocalTodos(newTodos);
  };

  clearCompleted = () => {
    this.setMode("all");
    const todos = [...this.state.todos];
    const newTodos = todos.filter((todo) => !todo.done);
    this.setTodos(newTodos);
    this.setLocalTodos(newTodos);
    setTimeout(() => {
      this.setState({
        cloneTodos: [...this.state.todos],
      });
    }, 1);
  };

  showAll = () => {
    this.setMode("all");
    const todos = [...this.state.todos];
    this.setCloneTodos(todos);
  };

  showActive = () => {
    this.setMode("active");
    const todos = [...this.state.todos];
    const newTodos = todos.filter((todo) => !todo.done);
    this.setCloneTodos(newTodos);
  };

  showCompleted = () => {
    this.setMode("completed");
    const todos = [...this.state.todos];
    const newTodos = todos.filter((todo) => todo.done);
    this.setCloneTodos(newTodos);
  };

  selectAllTodos = () => {
    const todos = [...this.state.todos];
    const newTodos = todos.map((todo) => {
      if (this.state.selectAll === false) {
        todo.done = true;
        return todo;
      } else {
        todo.done = false;
        return todo;
      }
    });
    this.setState({
      selectAll: !this.state.selectAll,
    });
    this.setCloneTodos(newTodos);
    this.setLocalTodos(newTodos);
  };

  addTodo = (title) => {
    const todos = [...this.state.todos];

    const newTodo = {
      id: Date.now(),
      title: title,
      done: false,
    };

    this.setTodos([...todos, newTodo]);
    this.setCloneTodos([...todos, newTodo]);
    this.setLocalTodos([...todos, newTodo]);
  };

  render() {
    return (
      <div className="todolist">
        <div className="container">
          <div className="todolist-content">
            <Header
              darkMode={this.props.darkMode}
              toggleColorMode={this.props.toggleColorMode}
            />
            <Form addTodo={this.addTodo} selectAllTodos={this.selectAllTodos} />
            <Todos
              todos={this.state.cloneTodos}
              handelDelete={this.handelDelete}
              handelComplete={this.handelComplete}
              clearCompleted={this.clearCompleted}
              showActive={this.showActive}
              showCompleted={this.showCompleted}
              showAll={this.showAll}
              mode={this.state.mode}
            />
            <footer
              style={{
                textAlign: "center",
                padding: "50px 0",
                fontSize: "14px",
              }}
            >
              copyright &copy;
              <a
                href="https://github.com/youssef-ahmed-Devlogs"
                target="blank"
                style={{
                  fontSize: "14px",
                  color: "inherit",
                }}
              >
                Youssef Ahmed
              </a>{" "}
              2021
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Todolist;
