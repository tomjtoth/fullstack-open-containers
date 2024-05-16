import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const handlers = { deleteTodo, completeTodo };

  return (
    <>
      {todos
        .map((todo) => <Todo todo={todo} {...handlers} />)
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
