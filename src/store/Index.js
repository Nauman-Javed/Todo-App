import { configureStore } from "@reduxjs/toolkit";

import todolistReducer from "./TodoList";

const store = configureStore({
  reducer: { todolist: todolistReducer },
});

export default store;
