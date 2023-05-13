import { Routes, Route } from "react-router-dom";
import MainTodo from "./pages/MainTodo";
import ImportantTodos from "./pages/ImportantTodos";
import Header from "./pages/Header";
import { StyledBox } from "./components";

function App() {
  return (
    <StyledBox>
      <Header />
      <Routes>
        <Route path="/" element={<MainTodo />} />
        <Route path="/important" element={<ImportantTodos />} />
      </Routes>
    </StyledBox>
  );
}

export default App;
