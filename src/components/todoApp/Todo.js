import React from "react";
import FeatherIcon from "feather-icons-react";

const Todo = (props) => {
  const { title } = props.todo;

  return (
    <div className={props.todo.done ? "todo done" : "todo"}>
      <div className="todo-content">
        <div
          className="todo-icon completed"
          onClick={() => props.handelComplete(props.todo.id)}
        >
          <FeatherIcon icon={props.todo.done ? "check-circle" : "circle"} />
        </div>
        <div className="todo-text">{title}</div>
      </div>
      <div
        className="todo-icon delete"
        onClick={() => props.handelDelete(props.todo.id)}
      >
        <FeatherIcon icon="x" size="30" />
      </div>
    </div>
  );
};

export default Todo;
