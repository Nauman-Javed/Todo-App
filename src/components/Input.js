import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { UseTodo } from "../context/Context";
import { useDispatch } from "react-redux";
import { todolistActions } from "../store/TodoList";

const Input = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();


  const ClickHandler = () => {
    if (!todo) {
      return;
    } else {
      dispatch(todolistActions.Add(todo));
      setTodo("");
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      ClickHandler();
    }
  };

  return (
    <Box
      sx={{
        padding: "5px 10px 5px 10px",
        backgroundColor: "white",
        borderRadius: "7px",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextField
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyDown={onKeyDownHandler}
        value={todo}
        fullWidth
        id="outlined-basic"
        placeholder="Add Todo"
        variant="standard"
      />
      <Button
        onClick={ClickHandler}
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </Box>
  );
};

export default Input;
