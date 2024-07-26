import React from "react";
import Button from "./Button";
import { useTodoContext } from "../context/TodoContext";

const Input = () => {
  const curDate = Date.now();
  const { inputValue, setInputValue, setTodos, isComplete } = useTodoContext();
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSetTodo = () => {
    setTodos((prev) => [
      ...prev,
      {
        todoName: inputValue,
        date: new Date(curDate).toLocaleDateString(),
        time: new Date(curDate).toLocaleTimeString(),
        status: isComplete ? "Completed" : "Pending",
      },
    ]);
    setInputValue("");
  };
  return (
    <div className="grid place-items-center">
      <form
        className="flex items-center gap-6 justify-center p-4 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          className="w-3/4 px-3 py-3 outline-none border border-gray-900 font-semibold rounded-md text-lg"
          placeholder="Enter todo here"
        />
        <Button
          className="bg-green-700 font-semibold px-8 text-white hover:bg-green-800"
          onClick={onSetTodo}
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default Input;
