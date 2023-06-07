import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  todolist: [],
};

const todolistSlice = createSlice({
  name: "todolist",
  initialState: initialState,
  reducers: {
    Add(state, action) {
      const newTodo = action.todo;
      const curtime = moment().format("MMMM Do YYYY, h:mm:ss a");

      if (!action.todo) {
        return;
      }
      state.todolist.push({
        status: false,
        id: Date.Now(),
        name: newTodo,
        time: curtime,
      });
    },
    Delete(state, action) {},
    Edit(state, action) {},
  },
});

export const todolistActions = todolistSlice.actions;
export default todolistSlice.reducer;
