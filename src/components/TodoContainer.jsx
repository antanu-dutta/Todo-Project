import React, { useState } from "react";
import Button from "./Button";
import { useTodoContext } from "../context/TodoContext";

const TodoContainer = () => {
  const { todos, setIsComplete } = useTodoContext();

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 pt-10">
        {todos.map((curTodo, index) => (
          <div
            className="bg-[#F7DCB9] p-6 rounded-xl opacity-100 transition-all"
            key={index}
          >
            <h2 className="text-center font-semibold text-3xl mb-5">
              {curTodo.todoName}
            </h2>
            <div className="text-lg font-medium tracking-wider mb-3">
              <span className="font-bold">Date:</span> {curTodo.date}
            </div>
            <div className="text-lg font-medium tracking-wider mb-3">
              <span className="font-bold">Time:</span> {curTodo.time}
            </div>
            <div className="text-lg font-medium tracking-wider mb-6">
              <span className="font-bold">Status:</span> {curTodo.status}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="bg-purple-700 hover:bg-purple-800 px-5 text-white"
                onClick={() => setIsComplete(true)}
              >
                Complete
              </Button>
              <Button className="bg-red-700 hover:bg-red-800 px-5 text-white">
                Delete
              </Button>
            </div>
          </div>
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
