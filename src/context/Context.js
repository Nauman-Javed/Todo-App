import React, { useContext, useReducer } from "react";
import moment from "moment";

const TodoContext = React.createContext();

export const UseTodo = () => useContext(TodoContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      if (!action.data) {
        return;
      }
      const curtime = moment().format("MMMM Do YYYY, h:mm:ss a");
      const newTodo = {
        important: false,
        id: Date.now(),
        name: action.data,
        time: curtime,
      };
      return [...state, newTodo];

    case "Delete":
      return state.filter((single) => single.id !== action.data);

    case "Edit":
      const newList = [...state];
      const objIndex = newList.findIndex((single) => {
        return single.id === action.data.id;
      });
      newList[objIndex] = action.data.newObj;
      return [...newList];

    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);

  const Add = (todo) => {
    dispatch({ type: "Add", data: todo });
  };

  const Delete = (index) => {
    dispatch({ type: "Delete", data: index });
  };

  const Edit = (index, obj) => {
    dispatch({ type: "Edit", data: { id: index, newObj: obj } });
  };

  return (
    <TodoContext.Provider
      value={{
        Add,
        Delete,
        todos,
        Edit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
