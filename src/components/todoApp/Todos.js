import React from "react";
import Todo from "./Todo";
import ActionsBar from "./ActionsBar";

const Todos = (props) => {
  return (
    <div className="todos">
      {props.todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          handelDelete={props.handelDelete}
          handelComplete={props.handelComplete}
        />
      ))}

      {props.todos.length === 0 && (
        <div className="empty">No todos to Show...</div>
      )}
      <ActionsBar
        todos={props.todos}
        clearCompleted={props.clearCompleted}
        showActive={props.showActive}
        showCompleted={props.showCompleted}
        showAll={props.showAll}
        mode={props.mode}
      />
    </div>
  );
};

export default Todos;
