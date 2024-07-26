import Container from "./components/Container";
import Input from "./components/Input";
import React from "react";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <Container>
      <Input />
      <TodoContainer />
    </Container>
  );
};

export default App;
