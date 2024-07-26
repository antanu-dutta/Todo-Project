import React, { useState } from "react";
import Button from "./Button";

const TodoCard = ({ todo, deleteTodo }) => {
  const [completed, setCompleted] = useState(false);
  const { todoName, date, time, status } = todo;
  return (
    <div className="bg-[#F7DCB9] p-6 rounded-xl opacity-100 transition-all">
      <h2 className="text-center font-semibold text-3xl mb-5">{todoName}</h2>
      <div className="text-lg font-medium tracking-wider mb-3">
        <span className="font-bold">Date:</span> {date}
      </div>
      <div className="text-lg font-medium tracking-wider mb-3">
        <span className="font-bold">Time:</span> {time}
      </div>
      <div className="text-lg font-medium tracking-wider mb-6">
        <span className="font-bold">Status:</span>{" "}
        {completed ? "Completed" : "Pending"}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button
          className="bg-purple-700 hover:bg-purple-800 px-5 text-white"
          onClick={() => setCompleted(true)}
        >
          Complete
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-800 px-5 text-white"
          onClick={() => deleteTodo(todoName)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
