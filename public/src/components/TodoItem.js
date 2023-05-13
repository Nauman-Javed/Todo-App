import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { UseTodo } from "../context/Context";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(true);
  const [newTodo, setNewTodo] = useState(todo.name);
  const { Delete, Edit } = UseTodo();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      saveHandler();
    }
  };

  const saveHandler = () => {
    if (!newTodo) {
      return;
    }
    const todoObj = { ...todo, name: newTodo };
    Edit(todo.id, todoObj);
    setEdit(true);
  };

  const importantHandler = () => {
    const todoObj = { ...todo, important: !todo.important };
    Edit(todo.id, todoObj);
  };

  return (
    <Box
      key={todo.id}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 2,
        marginBottom: 2,
      }}
    >
      <Box display={"flex"}>
        {todo.important ? (
          <IconButton>
            <Favorite onClick={importantHandler} color="primary" />
          </IconButton>
        ) : (
          <IconButton>
            <FavoriteBorder onClick={importantHandler} />
          </IconButton>
        )}

        {edit ? (
          <Stack>
            <Typography variant="h6">{todo.name}</Typography>
            <Typography variant="p">{todo.time}</Typography>
          </Stack>
        ) : (
          <TextField
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={onKeyDownHandler}
            fullWidth
            placeholder="Add new todo"
            variant="standard"
          />
        )}
      </Box>
      {edit ? (
        <Box marginRight={"15px"}>
          <Button
            onClick={() => setEdit(!edit)}
            variant="contained"
            startIcon={<BorderColorRoundedIcon />}
          >
            Edit
          </Button>
          <Button
            onClick={() => Delete(todo.id)}
            sx={{
              marginLeft: "15px",
            }}
            variant="contained"
            startIcon={<DeleteForeverRoundedIcon />}
          >
            Delete
          </Button>
        </Box>
      ) : (
        <Button
          sx={{ marginRight: "15px" }}
          onClick={saveHandler}
          variant="contained"
          startIcon={<DoneIcon />}
        >
          Save
        </Button>
      )}
    </Box>
  );
};

export default TodoItem;
