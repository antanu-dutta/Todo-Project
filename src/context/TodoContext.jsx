import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [todos, setTodos] = useState([]);
  const contextValue = {
    inputValue,
    setInputValue,
    todos,
    setTodos,
    isComplete,
    setIsComplete,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export default TodoContextProvider;
