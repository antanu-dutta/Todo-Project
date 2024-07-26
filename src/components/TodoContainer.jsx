import React, { useCallback, useMemo, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos, setTodos } = useTodoContext();
  const deleteTodo = useCallback(
    (todoName) => {
      const filteredTodos = todos.filter(
        (curTodo) => curTodo.todoName !== todoName
      );
      setTodos(filteredTodos);
    },
    [todos, setTodos]
  );
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-10">
        {todos.map((curTodo, index) => (
          <TodoCard todo={curTodo} key={index} deleteTodo={deleteTodo} />
        ))}
      </div>
      {todos.length === 0 && (
        <h1 className="text-7xl text-center font-semibold">
          Your Todo List is Empty
        </h1>
      )}
    </div>
  );
};

export default TodoContainer;
