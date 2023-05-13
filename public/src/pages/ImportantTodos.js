import { Box, Container, List, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { UseTodo } from "../context/Context";

const ImportantTodos = () => {
  const { todos } = UseTodo();

  return (
    <Container maxWidth={"lg"}>
      <Paper
        elevation={5}
        sx={{
          height: "80vh",
          backgroundColor: "rgba(144, 178, 249)",
          padding: "10px",
          overflow: "auto",
        }}
      >
        <List sx={{ height: "78vh", overflow: "auto" }}>
          {todos.filter((single) => single.important).length === 0 ? (
            <Typography
              display={"flex"}
              justifyContent={"center"}
              fontWeight={"bold"}
            >
              No Important Yet
            </Typography>
          ) : (
            todos
              .filter((single) => single.important)
              .map((todoList) => {
                return (
                  <Box key={todoList.id} ml={2} mb={2}>
                    <Stack>
                      <Typography variant="h6">{todoList.name}</Typography>
                      <Typography variant="p">{todoList.time}</Typography>
                    </Stack>
                  </Box>
                );
              })
          )}
        </List>
      </Paper>
    </Container>
  );
};

export default ImportantTodos;
