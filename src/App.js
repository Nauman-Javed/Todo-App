import { Routes, Route } from "react-router-dom";
import MainTodo from "./views/MainTodo";
import ImportantTodos from "./views/ImportantTodos";
import { StyledBox } from "./components";
import Navbar from "./views/Navbar";

function App() {
  return (
    <StyledBox>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainTodo />} />
        <Route path="/important" element={<ImportantTodos />} />
      </Routes>
    </StyledBox>
  );
}

export default App;
