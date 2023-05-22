import { Container } from "@mui/material";
import React from "react";
import TodoList from "../components/TodoList";

const MainTodo = () => {
  return (
    <Container maxWidth={"lg"}>
      <TodoList />
    </Container>
  );
};

export default MainTodo;
