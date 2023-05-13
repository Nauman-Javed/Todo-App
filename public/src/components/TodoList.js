import { List, Paper } from "@mui/material";
import React from "react";
import Input from "./Input";
import { UseTodo } from "../context/Context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = UseTodo();
  return (
    <Paper
      elevation={5}
      sx={{
        height: "80vh",
        backgroundColor: "rgba(144, 178, 249)",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List
        sx={{
          height: "100vh",
          overflow: "auto",
        }}
      >
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </List>
      <Input />
    </Paper>
  );
};

export default TodoList;
