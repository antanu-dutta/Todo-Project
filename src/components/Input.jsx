import React, { useState } from "react";
import Button from "./Button";
import { useTodoContext } from "../context/TodoContext";

const Input = () => {
  const curDate = Date.now();
  const { inputValue, setInputValue, setTodos } = useTodoContext();
  const [id, setId] = useState(1);
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSetTodo = () => {
    if (inputValue) {
      setId(id + 1);
      setTodos((prev) => [
        ...prev,
        {
          id: id,
          todoName: inputValue,
          date: new Date(curDate).toLocaleDateString(),
          time: new Date(curDate).toLocaleTimeString(),
          status: "Pending",
        },
      ]);
      setInputValue("");
    } else {
      alert("Enter todo to add to list");
    }
  };
  return (
    <div className="grid place-items-center">
      <form
        className="flex items-center flex-col md:flex-row gap-6 justify-center p-4 w-full "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleOnChange}
          className="md:w-3/4 px-3 py-3 outline-none border w-full border-gray-900 font-semibold rounded-md text-lg"
          placeholder="Enter todo here"
        />
        <Button
          className="bg-green-700 font-semibold px-8 text-white w-full md:w-auto hover:bg-green-800"
          onClick={onSetTodo}
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default Input;
