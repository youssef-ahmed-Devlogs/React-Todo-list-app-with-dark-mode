import React from "react";

const ActionsBar = (props) => {
  const { todos, mode } = props;

  const todosCount = todos.filter((todo) => todo.done === false);

  return (
    <div className="action-bar">
      <div className="todos-count">{todosCount.length} items left</div>
      <div className="category">
        <div
          className={mode === "all" ? "all-todos active" : "all-todos"}
          onClick={props.showAll}
        >
          All
        </div>
        <div
          className={mode === "active" ? "active-todos active" : "active-todos"}
          onClick={props.showActive}
        >
          Active
        </div>
        <div
          className={
            mode === "completed" ? "completed-todos active" : "completed-todos"
          }
          onClick={props.showCompleted}
        >
          Completed
        </div>
      </div>
      <div className="clear-completed" onClick={props.clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default ActionsBar;
